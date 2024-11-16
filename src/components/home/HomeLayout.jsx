import React from 'react';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import HomeHeader from '../headers/HomeHeader';
import HomeHeroSection from '../client-components/HomeHeroSection';
import { useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Utilities/base/baseURL';
import { useState } from 'react';
import ClientCard from '../../Utilities/cards/ClientCard';
import UserLogout from '../logout/UserLogout';
import jwtDecode from 'jwt-decode';
import ReactLoading from 'react-loading';

function HomeLayout() {
	const [fetchedData, setFetchedData] = useState(null);
	const [userLoggedIn, setUserLoggedIn] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userToken, setUserToken] = useState(null);

	useEffect(() => {
		const fetchAllData = async () => {
			try {
				const response = await axios.get(`${baseUrl}/admin/get-event`);
				console.log(response.data);
				setFetchedData(response.data);
			} catch {
				console.error('Error fetching data:', error);
			}
		};

		fetchAllData();
	}, []);

	useEffect(() => {
		const token = localStorage.getItem('user-token');

		if (token) {
			const userDetails = jwtDecode(token);
			const userName = userDetails.firstName;
			const userNameFirstLetter = userName.charAt(0);
			setUserLoggedIn(userNameFirstLetter);
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<>
			<div>
				<HomeHeader user={userLoggedIn} />

				{fetchedData && fetchedData.length > 0 ? (
					<>
						<HomeHeroSection
							key={0}
							title={fetchedData[0].eventTitle}
							thumbnail={fetchedData[0].eventThumbnail}
							type={fetchedData[0].eventType}
							dates={fetchedData[0].dates}
							times={fetchedData[0].times}
							venue={fetchedData[0].venue}
						/>
					</>
				) : (
					<>
						<div className=' w-full h-screen flex justify-center items-center'>
							<ReactLoading type='spinningBubbles' color='#d6d6d6' />
						</div>
					</>
				)}

				<div className='container mx-auto py-24 px-24'>
					<p className='font-bold text-lg mb-4'>Upcoming More Events</p>
					<ClientCard
						eventData={fetchedData}
						altTitle={true}
						isLoggedIn={isLoggedIn}
						userToken={userToken}
					/>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default HomeLayout;
