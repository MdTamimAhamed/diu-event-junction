import React from 'react'
import { baseUrl } from '../../Utilities/base/baseURL';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InputHandlerSm from "../formInputHandler/InputHandlerSm"
import { MdKeyboardBackspace } from "react-icons/md"
import { MdAddBox,MdDeleteForever,MdOutlineAddBox, MdOutlineFileUpload } from "react-icons/md"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
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

  const [title, setTitle] = useState('');
  const [file, setFile] = useState({});
  const [eventType, setEventType] = useState('');
  const [swag, setSwag] = useState('')
  const [showSwagItem, setShowSwagItem] = useState([])

  async function handleUpload(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append('eventTitle', title)
    formData.append('eventThumbnail', file)
    formData.append('eventType', eventType)
    formData.append('swagItems', showSwagItem);

    //print
    for(let value of formData){
      console.log(value);
 }

    try{
      const response = await axios.patch(`${baseUrl}/admin/update-event/${id}`, formData,
                        {headers: {
                          'Content-Type': 'multipart/form-data',
                          'accept': 'application/x-www-form-urlencoded'
                        }} )
      console.log("Response Data:", response.data);

    }catch(error){

    }
  }

  useEffect(() => {
    if (updateEventData)
      setTitle(updateEventData.eventTitle);
      setEventType(updateEventData.eventType);
      setShowSwagItem([...showSwagItem, updateEventData.swagItems]);
  }, [updateEventData]);


  function handleRoute() {
    window.location.href = "/dashboard";
  }

  function handleAddItem(){
    if(swag){
      setShowSwagItem([...showSwagItem, swag])
    }
    setSwag('')
  }

  
  return (
    <>
        {updateEventData?(
          <>
            <form onSubmit={handleUpload} encType="multipart/form-data"
                className="max-w-[900px] bg-white mt-5 px-8 py-8  shadow-md mb-20">
                <div className="flex items-start gap-6">
                  <button onClick={handleRoute}><MdKeyboardBackspace className=" text-[1.4em]"/></button>
                  <div className="">
                    <div className="text-xl font-medium">Edit Event</div>
                    <p className="text-sm text-gray">Update your event here.</p>
                  </div>
                </div>


                <div className="px-[46px]">
                  <div className="mt-8">
                    <p className="">Event Title <span className=" text-red text-sm">*</span></p>
                    <input 
                      className=" min-w-full py-3 px-3 rounded-md placeholder:text-lg outline-1 outline-light-gray border-[1px]
                      border-black-500 mt-1 bg-[rgba(0,0,0,0.04)]"
                      type="text" 
                      value={title}
                      onChange={(e)=>setTitle(e.target.value)}
                      placeholder="Enter your event title here..."
                    />
                  </div>
                </div>

                <div className="px-[46px]">
                    <div className="mt-8">
                        <p>Event Thumbnail <span className="text-red text-sm">*</span></p>
                        <div className=" relative w-full flex flex-col justify-center items-center p-8 border-[2px] border-dashed bg-[rgba(0,0,0,0.04)]  rounded-md">
                          <div className=" relative   w-[130px] py-[2px]">
                            <input 
                            className=" z-10 relative opacity-0 cursor-pointer" 
                            type="file" 
                            accept=".jpg, .png, .jpeg"
                            onChange={(e)=>setFile(e.target.files[0])}
                            />
                            <button className=" absolute left-0 top-0 flex justify-center items-center text-md text-white rounded-md w-full h-full bg-black " type="button"><MdOutlineFileUpload className="text-xl mr-2"/> Upload</button>
                          </div>
                          {file && file.name? (
                            <div className="flex items-center">
                              <p>{file.name}</p>
                              <button
                                className="ml-2 text-red-700"
                                type="button"
                                onClick={() => setFile(null)}
                              >
                                <MdDeleteForever className="text-red text-lg" />
                              </button>
                            </div>
                          ):''}

                          <div className='w-64 h-auto mt-2'>
                            <img className='w-full h-full' src={`${baseUrl}/uploads/${updateEventData.eventThumbnail}`} alt="" />
                          </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-10">
                    <div className="flex items-center">
                      <p >Event Type: <span className="text-red mr-4">*</span></p>
                      <select 
                      value={eventType}
                      onChange={(e)=> setEventType(e.target.value)}
                      className="px-6 py-1 bg-black text-white rounded-md " name="type" id="type">
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
                        <MdAddBox onClick={handleAddItem} className="text-4xl text-black cursor-pointer"/>
                      </div>
                    </div>
                </div>
                


                <div className="w-full flex justify-start mt-20">
                    <button type="submit" className=" text-white px-8 bg-black  py-2 rounded-md ml-10 mb-10">Post Event</button>
                </div>
            </form>
          </>
        ):(
          <p>Nothing to show</p>
        )}
    </>
  )
}

export default EventEdit;