import React from "react";
import { useState } from "react";
import Image from "../util/Image";
import './addContact.css'
import { useEffect } from "react";
import user from "../../common/image/user.png"
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom"

const AddContacts = () => {
 const [profilePic , setProfilepic] = useState()
  const [imageUrls, setImageUrls] = useState(user);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isWhatsApp, setIsWhatsApp] = useState();
  const [type, setType] = useState("");
  const [saved, setSaved] = useState(false);
  const id =name+phone+v4()
  const addUrlt=(url)=>{
    setImageUrls(url)
  }
  const NavigateTohome= useNavigate()
  const handleClick = () => {
    const data={
        id : id,
        name:name,
        phone:phone,
        isWhatsApp:isWhatsApp,
        type:type,
        Url:imageUrls
    }
    localStorage.setItem(id,JSON.stringify(data));
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 1000);

   
  }
  useEffect(()=>{
    setProfilepic(imageUrls)

  },[imageUrls])
  ;
  return (
    <div className="container-main">
      <form onSubmit={handleClick}>
    <div className="wrapper">
      <div style={{display:"flex" , flexDirection: "row" }}><h1 style={{ textAlign: "left" }} >
        Add Contact
      </h1>
      <div style={{marginLeft:'90px' , marginTop:'10px', cursor:'pointer'}} onClick={()=>{NavigateTohome('/')}}> ↩Back</div>
      </div>
      <img height="40px" width="40px" src={profilePic} alt="user" ></img>
      <div className="segment" >
  
      
        <div style={{display:"flex", flexDirection:"column"}} >
        <label>Name: </label> 
          <input className="input" onChange={(e) => setName(e.target.value)} type="text" required="true"></input>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap:'wrap',
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "40rem", 
        }}

      >
        <div>
          <label>Phone: </label>
          <div >
            <input
            className="input"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              required
            ></input>
      
          </div>
        </div>
        <div>
        <label>Type </label>
        <div>
          <select
          className="input"
            onInput={(e) => setType(e.target.value)}
           
            required
          >
            <option value="">Select...</option>
            <option value="Personal">Personal</option>
            <option value="Office">Office</option>
          </select></div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
         
            <input
            className="input-check"
              onChange={(e) => setIsWhatsApp(e.target.checked)}
              type="checkbox"
        
            />
             <div className="check-box-text" >
            <label > WhatsApp?</label>
          </div>
        </div>
      </div>
      <div>
          <label>Profile Picture: </label>
          <div >
               <Image addUrlt={addUrlt}/>
          </div>
        </div>
   


      <button className="add"  >
        Add
      </button>
      
    
      {saved && (
        <div
          style={{
            border: "none",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            margin: "auto auto",
            width: "20rem",
            height: "4rem",
            textAlign: "center",
            boxShadow:"2px 3px 8px grey",
            backgroundColor:'lightgreen',
            color:'white',
          }}
          className="ui segment"
        >
          Saved successfully
        </div>
        
      )}
    </div>
    </form>
    </div>
  );
};

export default AddContacts;
