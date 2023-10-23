import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Utilities/base/baseURL";

function Dashboard() {

  const [eventDetails, setEventDetails] = useState([])

  useEffect(() => {
    const fetchEventDetails =  async()=>{
      try{
        const response = await axios.get(`${baseUrl}/admin/get-event`);
          setEventDetails(response.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchEventDetails();
  }, [])
  
  return (
    <>
      <div className="h-auto">
          {eventDetails ? (
            <div className="h-auto">
              {eventDetails.map((item, index)=>(
                <div key={index} className="w-[300px] h-auto">
                  <p>Title: {item.eventTitle}</p>
                  <p>Type: {item.eventType}</p>
                  <ul>Swag Items: {item.swagItems.map((swagItem, swagIndex) => (
                      <li key={swagIndex}>{swagItem}</li>))}
                  </ul>
                  <img src={`${baseUrl}/uploads/${item.eventThumbnail}`} alt="Uploaded Thumbnail" />
                </div>
              ))}
            </div>
          ) : (
            <p>No image to display</p>
          )}
      </div>
    </>
  )
}

export default Dashboard;
