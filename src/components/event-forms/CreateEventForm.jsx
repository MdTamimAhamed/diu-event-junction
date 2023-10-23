import React from "react";
import {MdKeyboardBackspace} from "react-icons/md"
import { useState } from "react";
import InputHandlerSm from "../formInputHandler/InputHandlerSm"
import {MdAddBox,MdDeleteForever,MdOutlineAddBox} from "react-icons/md"
import axios from "axios";
import { baseUrl } from "../../Utilities/base/baseURL";

function CreateEventForm() {
  function handleRoute() {
    window.location.href = "/admin-profile";
  }

  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [eventType, setEventType] = useState('')
  const [swag, setSwag] = useState('')
  const [showSwagItem, setShowSwagItem] = useState([])

  const [eventStartDate, setEventStartDate] = useState('')
  const [eventEndDate, setEventEndDate] = useState('')

  const [eventStartTime, setEventStartTime] = useState('')
  const [eventEndTime, setEventEndTime] = useState('')

  const [venue, setVenue] = useState('')
  const [speaker, setSpeaker] = useState('')
  const [showSpeaker, setShowSpeaker] = useState([])
  const [eventDetails, setEventDetails] = useState(null)
  const [organizerDetails, setOrganizerDetails] = useState(null)

  const dates = [eventStartDate, eventEndDate]
  const times = [eventStartTime, eventEndTime]

  console.log(`Other: ${eventDetails}`)
  console.log(`Org: ${organizerDetails}`)


  async function handleUpload(e){
    e.preventDefault()

    const formData = new FormData();
    formData.append('title', title)
    formData.append('thumbnail', file)
    formData.append('eventType', eventType)
    formData.append('swagItems', showSwagItem)
    formData.append('eventDates', dates)
    formData.append('eventTimes', times)
    formData.append('venue', venue)
    formData.append('speaker', showSpeaker)
    formData.append('eventDetails', eventDetails)
    formData.append('organizerDetails', organizerDetails)

    try{
      const response = await axios.post(`${baseUrl}/admin/add-event`,
                       formData, { headers:{"Content-Type":"multipart/form-data"}});
    
                
      setTitle('')
      setFile(null)
      setEventType('')
      setShowSwagItem([])
      setVenue('')
      setSpeaker('')
      setEventDetails('')
      setOrganizerDetails('')

    }catch(error){
      console.log(error)
    }
  }

  
  function handleAddItem(){
    if(swag){
      setShowSwagItem([...showSwagItem, swag])
    }
    setSwag('')
  }

  function handleAddSpeaker(){
    if(speaker){
      setShowSpeaker([...showSpeaker, speaker])
    }
    setSpeaker('')
  }

  function handleDeleteSwagItem(index) {
    const updatedSwagItems = showSwagItem.filter((_, i) => i !== index);
    setShowSwagItem(updatedSwagItems);
  }

  function handleDeleteSpeaker(index) {
    const updatedSpeaker = showSpeaker.filter((_, i) => i !== index);
    setShowSpeaker(updatedSpeaker);
  }

  return (
    <>
      <form onSubmit={handleUpload}
        className="max-w-[990px] bg-white mt-5 px-8 py-8 border-t-[5px] border-yellow-500 shadow-md mb-20">
        <div className="flex items-start gap-6">
          <button onClick={handleRoute}><MdKeyboardBackspace className=" text-[1.4em]"/></button>
          <div>
            <div className="text-xl font-medium">Add New Event</div>
            <p className="text-sm text-gray">Fill up this form to post your event.</p>
          </div>
        </div>


        <div className="px-[46px]">
          <div className="mt-8">
            <p className="">Event Title <span className=" text-red text-sm">*</span></p>
            <input 
              className=" min-w-full py-3 px-3 rounded-md placeholder:text-lg outline-1 outline-[rgba(247,37,133,0.2)] border-[1px]
               border-yellow-500 bg-yellow-50 mt-1"
              type="text" 
              placeholder="Enter your event title here..."
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
          </div>


          <div className="mt-8">
            <p>Event Thumbnail <span className="text-red text-sm">*</span></p>
            <div className=" w-full flex flex-col justify-center items-center p-8 border-[2px] border-dashed border-yellow-500 bg-yellow-50 rounded-md">
              <input 
                type="file" 
                accept=".jpg, .png, .jpeg"
                onChange={(e)=> setFile(e.target.files[0])}
              />
            </div>
          </div>


          <div className="flex justify-between mt-10">
            <div className="flex items-center">
              <p >Event Type: <span className="text-red mr-4">*</span></p>
              <select 
              value={eventType}
              onChange={(e)=> setEventType(e.target.value)}
              className="px-6 py-1 bg-yellow-700 text-white rounded-md " name="type" id="type">
                <option value="" >Select Type</option>
                <option value="Conference">Conference</option>
                <option value="Seminer">Seminer</option>
                <option value="Concert">Concert</option>
                <option value="Reception">Reception</option>
                <option value="Other">Other</option>
              </select>
            </div>


            <div className="flex items-center">
              <p className="mr-2">Swag Items:</p>
              <div className="flex justify-between items-center">
                <InputHandlerSm
                  type="text"
                  placeholder="Enter Item"
                  state={swag}
                  setState={setSwag}
                />
                <MdAddBox onClick={handleAddItem} className="text-4xl text-yellow-700 cursor-pointer"/>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-end">
            <ul className="w-[240px]">
              {showSwagItem.map((item,index)=>(
                <li className="flex items-center justify-between mr-8 px-2 py-1 text-sm bg-green-100 text-green-700 rounded mt-1 " key={index}>
                  <div className="flex items-center">
                    <MdOutlineAddBox className="mr-2 text-green-700"/> {item}
                  </div>
                  <button onClick={() => handleDeleteSwagItem(index)} className="ml-2 text-red-700">
                    <MdDeleteForever className="text-red text-lg"/>
                  </button>
                </li>))
              }
            </ul>
          </div>
          
          <div className="mt-10">
            <h1 className="text-black text-lg font-medium">Event Schedule</h1>
            <p className="text-sm text-light-gray pb-2">All the fields are required!</p>
          </div>
          
          {/**Event Schedule section */}
          <div className=" bg-yellow-50 p-6 rounded-md">
            <div className="mt-5 w-full flex justify-between flex-wrap">
              <div className="flex justify-between pr-10 ">
                <p>Date <span className="text-red">*</span></p>
                <div className="ml-10">
                  <p>Start Date:</p>
                  <input 
                    className="w-[200px] border-[1px] border-light-gray py-1 px-2 rounded-md"
                    type='date'
                    placeholder="Start date"
                    value={eventStartDate}
                    onChange={(e)=> setEventStartDate(e.target.value)}
                  />
                  
                  <p>End Date:</p>
                  <input 
                    className="w-[200px] border-[1px] border-light-gray py-1 px-2 rounded-md"
                    type='date'
                    placeholder="End date"
                    value={eventEndDate}
                    onChange={(e)=> setEventEndDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex">
                <p>Time<span className="text-red">*</span></p>
                <div className="ml-10">
                  <p>Start Time:</p>
                  <input 
                    className="w-[200px] border-[1px] border-light-gray py-1 px-2 rounded-md"
                    type='time'
                    placeholder="Start date"
                    value={eventStartTime}
                    onChange={(e)=> setEventStartTime(e.target.value)}
                  />
                  
                  <p>End Time:</p>
                  <input 
                    className="w-[200px] border-[1px] border-light-gray py-1 px-2 rounded-md"
                    type='time'
                    placeholder="End date"
                    value={eventEndTime}
                    onChange={(e)=> setEventEndTime(e.target.value)}
                  />
                </div>
              </div>
            </div>


            <div className="flex items-center  mt-10">
              <p >Venue: <span className="text-red mr-4">*</span></p>
              <select 
                value={venue}
                onChange={(e)=> setVenue(e.target.value)}
                className="px-4 max-w-[400px] py-1 bg-yellow-700 text-white rounded-md ">
                  <option value="" >Select Venue</option>
                  <option value="International Conference Hall, Daffodil International University (ICH)">
                    International Conference Hall, Daffodil International University (ICH)
                  </option>
                  <option value="Conference Hall, Daffodil International University">
                    Conference Hall, Daffodil International University
                  </option>
                  <option value="DIU Auditorium">
                    DIU Auditorium
                  </option>
              </select>
            </div>
          </div>{/** */}


          

          <div className="w-full flex justify-start mt-10">
              <p className="mr-2">Keynote speaker/ Guest <span className="text-red">*</span></p>
              <div className="w-full">
                <div className="flex justify-start items-center">
                  <input
                    className=" w-[60%] border-[1px] border-light-gray py-1 px-4 rounded-md outline-light-gray"
                    type="text"
                    value={speaker}
                    onChange={(e)=> setSpeaker(e.target.value)}
                    placeholder="Enter speaker/guest name"
                  />
                  <button onClick={handleAddSpeaker} className="flex items-center flex-nowrap py-[5px] px-2 ml-2 rounded-md text-white bg-yellow-700" >
                    + Add
                  </button>
                </div>
                <div className=" w-full flex justify-start">
                  <ul className="w-[64%]">
                    {showSpeaker.map((item,index)=>(
                      <li className="flex justify-between  items-center mr-8 px-2 py-2 text-sm bg-green-100 text-green-700 rounded mt-1" key={index}>
                        <div className="flex items-center">
                          <MdOutlineAddBox className="mr-2 text-green-700"/> {item}
                        </div>
                        <button onClick={() => handleDeleteSpeaker(index)} className="ml-2 text-red-700">
                          <MdDeleteForever className="text-red text-lg"/>
                        </button>
                      </li>))
                    }
                  </ul>
                </div>
              </div>
          </div>
          

          <div className="mt-10">
            <h1 className="text-black text-lg font-medium">Event Details</h1>
            <p className="text-sm text-light-gray pb-2">Some fields are required!</p>
          </div>


             <div className="mt-8">
                <p>Organizer's logo <span className="text-gray text-xs">(optional)</span></p>
                <div className=" w-full flex flex-col justify-center items-center p-8 border-[2px] border-dashed border-yellow-500 bg-yellow-50 rounded-md">
                  <input 
                    type="file" 
                    accept=".jpg, .png, .jpeg"
                  />
                </div>
              </div>
            </div>

        <div className="w-full flex justify-start mt-20">
          <button type="submit" className=" text-white px-8 bg-yellow-700  py-2 rounded-md ml-10 mb-10">Save Event</button>
        </div>

      </form>
    </>
  );
}

export default CreateEventForm;
