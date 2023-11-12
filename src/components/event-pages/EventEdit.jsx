import React from 'react'
import { baseUrl } from '../../Utilities/base/baseURL';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventEdit() {
  const { id } = useParams();
  console.log(id)
  const [updateEventData, setUpdateEventData] = useState(null);

  useEffect(()=>{
    const fatchToUpdateData = async ()=>{
      try{
        const response = await axios.get(`${baseUrl}/admin/get-event?eventId=${id}`)
        setUpdateEventData(response.data)
  
      }catch(error){
  
      }
    } 
    fatchToUpdateData();
  },[id])

  
  return (
    <>
        {updateEventData?(
          <>
            <h1>Hello world</h1>
            <p>{updateEventData.eventTitle}</p>
          </>
        ):(
          <p>Nothing to show</p>
        )}
    </>
  )
}

export default EventEdit;