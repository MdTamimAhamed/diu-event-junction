import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utilities/base/baseURL'
import { useParams } from 'react-router-dom'
import { GoDotFill } from 'react-icons/go'
import {MdDateRange, MdOutlineAccessTime} from 'react-icons/md'

function PreviewEvent() {
  const { id } = useParams();
  const [previewEventData, setPreviewEventData] = useState(null);

  useEffect(()=>{
    const fatchPreviewData = async ()=>{
      try{
        const response = await axios.get(`${baseUrl}/admin/get-event?eventId=${id}`)
        setPreviewEventData(response.data)
  
      }catch(error){
  
      }
    } 
    fatchPreviewData();
  },[id])


  let formattedDate = ''
  let day = ''
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if(previewEventData && previewEventData.dates){
    const dateObj = new Date(previewEventData.dates[0]);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    day = daysOfWeek[dateObj.getDay()]
    formattedDate = dateObj.toLocaleDateString('en-US', options);
  }

  return (
    <>
      {previewEventData?(
        <div className='flex justify-evenly bg-primary h-[320px]'>
          <div className='max-w-4xl mt-20'>
            <img 
            className='rounded-lg shadow-md '
            src={`${baseUrl}/uploads/${previewEventData.eventThumbnail}`} alt="event thumbnail" />

            <div className='flex mt-16'>
              <p className='text-red '>Up comming event</p>
              <p className='border-[1px] border-secondary text-secondary ml-4 px-6'>{previewEventData.eventType}</p>
            </div>

            <div className='flex justify-between'>
              {/*Left column */}
              <div className='  mt-2 w-[70%]'>
                <div className='border-l-4 border-secondary'>
                  <h1 className=' font-extrabold text-2xl leading-7 ml-2'>{previewEventData.eventTitle}</h1>
                </div>
                <div className='mt-10'>
                  <p className='font-medium'>Keynote speaker/guest</p>
                  {previewEventData.speaker.map((item, index)=>(
                     <p key={index} className='flex items-center text-gray list-disc font-lato'><GoDotFill className='text-sm mr-2 text-secondary'/>{item}</p>
                  ))}
                </div>
              </div>

              {/*Right column */}
              <div className='w-[26%]'>
                  <p className='font-medium mb-[3px]'>Event starts in:</p>
                  <div className='flex justify-between w-full [&>div]:bg-white [&>div]:shadow-md [&>div]:w-12 [&>div]:h-10'>
                     <div className='relative rounded'><span className=' absolute text-lg font-bold top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>00</span></div>
                     <div className='relative rounded'><span className='absolute text-lg font-bold top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>00</span></div>
                     <div className='relative rounded'><span className='absolute text-lg font-bold top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>00</span></div>
                     <div className='relative rounded'><span className='absolute text-lg font-bold top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>00</span></div>
                  </div>

                  <div>
                    <p className='mt-10 font-medium mb-2'> Program Schedule</p>
                    <div className='flex items-center text-sm'>
                      <MdDateRange className='mr-2 text-lg text-secondary'/>
                      <p className='font-medium'>Date:<span className='font-normal ml-2 text-red'>{day}, {formattedDate}</span></p>
                    </div>

                    <div className='flex items-center text-sm mt-[4px]'>
                      <MdOutlineAccessTime className='mr-2 text-lg text-secondary'/>
                      <p className='font-medium'>Time: 
                      <span className='font-normal ml-2'>
                        {previewEventData.times[0]}-
                        {previewEventData.times[1]}
                        </span></p>
                    </div>

                    <div className='flex items-center text-sm mt-[4px]'>
                      <MdOutlineAccessTime className='mr-2 text-lg text-secondary'/>
                      <p className='font-medium'>Time: 
                      <span className='font-normal ml-2'>{previewEventData.venue}</span></p>
                    </div>

                  </div>
              </div>
            </div>

          </div>
        </div>
      ):(
        <p>Event not found!</p>
      )}
    </>
  )
}

export default PreviewEvent