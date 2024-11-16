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
import jwtDecode from 'jwt-decode';
import ReactLoading from 'react-loading';

function Home() {
	const [fetchedData, setFetchedData] = useState(null);

	useEffect(() => {
		const fetchAllData = async () => {
			try {
				const response = await axios.get(`${baseUrl}/admin/get-event`);
				setFetchedData(response.data);
			} catch {
				console.error('Error fetching data:', error);
			}
		};

		fetchAllData();
	}, []);

	return (
		<>
			<div>
				<HomeHeader />
				{fetchedData && fetchedData.length > 0 ? (
					<>
						<HomeHeroSection
							key={1}
							title={fetchedData[1].eventTitle}
							thumbnail={fetchedData[1].eventThumbnail}
							type={fetchedData[1].eventType}
							dates={fetchedData[1].dates}
							times={fetchedData[1].times}
							venue={fetchedData[1].venue}
						/>

						<div className='container mx-auto py-24 px-24'>
							<p className='font-bold text-lg mb-4'>Upcoming More Events</p>
							<ClientCard eventData={fetchedData} altTitle={true} />
						</div>
					</>
				) : (
					<div className=' w-full h-screen flex justify-center items-center'>
						<ReactLoading type='spinningBubbles' color='#d6d6d6' />
					</div>
				)}
			</div>
			<Footer />
		</>
	);
}

export default Home;
