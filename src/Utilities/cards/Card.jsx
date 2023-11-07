import React from 'react'
import { baseUrl } from '../base/baseURL'
import {HiDotsVertical} from 'react-icons/hi'

function Card({eventData}) {

  function handleEdit(eventId) {
    window.location.href = `/dashboard/edit/${eventId}`;
  }
  
  return (
    <>
          {eventData ? (
            <div className=' w-full flex flex-wrap flex-row gap-6'>
              {eventData.map((item, index)=>(
                <div key={index} className=' max-h-[400px] bg-white max-w-[280px] h-auto rounded-lg p-[13px] shadow-md'>
                  <img 
                  className=' rounded min-h-[170px]'
                  src={`${baseUrl}/uploads/${item.eventThumbnail}`} 
                  alt="event thumbnail" />
                  <p className='mt-4 text-xs text-red font-bold'>{item.dates[0]}</p>
                  <div className=''>
                    <p className='min-h-[50px] font-bold leading-4 mt-2 text-ellipsis overflow-hidden line-clamp-3 hover:underline cursor-pointer'>{item.eventTitle}</p>
                  </div>
                  <div className='w-full mt-5 flex justify-between '>
                    <button onClick={()=>handleEdit(item._id)} className=' bg-black w-full py-1 text-white mr-2 rounded'>Edit</button>
                    <button className='flex justify-center items-center bg-[rgba(0,0,0,0.1)] rounded w-12'><HiDotsVertical className=''/></button>
                  </div>
                  
                </div>
              ))}
            </div>
            
            
          ) : (
            <p>No image to display</p>
          )}
      </>
  )
}

export default Card