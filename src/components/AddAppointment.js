import { useState } from "react"
import { BiCalendar } from "react-icons/bi"

function AddWrite({toggleWrite,formPublish,formData,setFormData}){
  if(!toggleWrite) {
    return null
  }
  return(
    <>
      <ul>
        <li>
          <label htmlFor="userName">집사명</label>
          <input 
            type='text'
            onChange={e => {setFormData({...formData,ownerName:e.target.value})}}/> 
        </li>
        <li>
          <label htmlFor="userChidren">애기명</label>
          <input type='text'
          onChange={e => {setFormData({...formData,petName:e.target.value})}}/> 
        </li>
        <li>
          <label htmlFor="userTime">예약시간</label>
          <input type='time'
          onChange={e => {setFormData({...formData,aptTime:e.target.value})}}/> 
        </li>
        <li>
          <label htmlFor="userDate">예약시간</label>
          <input type='date'
          onChange={e => {setFormData({...formData,aptDate:e.target.value})}}/> 
        </li>
        <li>
          <label htmlFor="userMemo">기타설명</label>
          <textarea
          onChange={e => {setFormData({...formData,aptNotes:e.target.value})}}></textarea>
        </li>
      </ul>
      <p>
        <input type='submit' onClick={formPublish}/>
      </p>
    </>
  )
}


export default function AddAppointment({lastId,onSendAppoint}){
  
  const clearData = {
  "petName": "",
  "ownerName": "",
  "aptNotes": "",
  "aptDate": ""
  }
  const [toggleWrite,setToggleWrite] = useState(true);
  const [formData,setFormData] = useState(clearData);

  function formPublish(){
    // 합본 만들기
    const appointInfo = {
      id : lastId + 1,
      petName: formData.petName,
      ownerName:formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate + '' + formData.aptTime,
    }
    onSendAppoint(appointInfo);
    setToggleWrite(!toggleWrite);
    setFormData(clearData);
  }
  return(
    <div id="appoint">
      <h4 onClick={() => {setToggleWrite(!toggleWrite)}}><BiCalendar />예약하기</h4>
      <AddWrite 
      toggleWrite = {toggleWrite}
      formPublish = {formPublish}
      formData = {formData}
      setFormData = {setFormData}
      />
    </div>
  )
}