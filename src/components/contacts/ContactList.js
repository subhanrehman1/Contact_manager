import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './contact.css'
const ContactList = () => {
  const [data, setData] = useState([]);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteVal, setDeleteVal] = useState("");
  useEffect(() => {
    let i = 0;
    while (i < localStorage.length) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      value = JSON.parse(value);
      setData((prev) => [...prev, value]);
      i++;
    }
  }, []);
  const handleDelete = (val) => {
    let value = localStorage.getItem(val);
    value = JSON.parse(value);
    localStorage.removeItem(val);
    setData(data.filter((val) => val.id !== value.id));
    console.log(data);
  };
  console.log(data);
  return (
    <div className="wrapp">
      <div
        style={{ textAlign: "center" , marginTop:"50px"}}
        className="ui container"
      >
        <h1 >Contact List</h1>
      </div>
      {data.length === 0 ? (
        <div style={{ margin: "100px 0", textAlign: "center" }}>
          No Contacts Saved
        </div>
      ) : (
        <div style={{ margin: "70px" }}>
          {data.map((val, index) => {
            return (
              <div
                style={{ display: "flex", justifyContent: "left", marginLeft:"40px" }}
                className="ui segment"
              >
                <div style={{width:"200px", height:"20px", marginBottom:"20px"}}>
                <img style={{width:"40px", height:"40px" ,borderRadius:"60%"}} src={val.Url} alt={"logo"}/></div>
                <div style={{width:"300px", height:"20px"}}>Name : {val.name}</div>
                <div  style={{width:"300px", height:"20px"}}>Phone : {val.phone}</div> 
                <div  style={{width:"300px", height:"20px"}}> type : {val.type}</div>
                <div  style={{width:"300px", height:"20px"}}>WhatsApp : {val.isWhatsApp?"Yes":"No"}</div>
                <div  style={{width:"70px", height:"20px"}}>
                  <Link to={`edit-contact/${val.id}`}>
                    <i
                      value={`${val.id}`}
                      style={{ cursor: "pointer" }}
                      class="edit icon"
                    ></i>
                  </Link>
                </div>
                <div  style={{width:"30px", height:"20px"}}>
                  <i
                    onClick={() => {
                      setDeletePopUp(true);
                      setDeleteVal(`${val.id}`);
                    }}
                    style={{ cursor: "pointer" }}
                    class="trash icon"
                  ></i>
                </div>
              </div>
            );
          })}
          {deletePopUp && (
            <div
              style={{
              
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
                margin: "auto auto",
                width: "50%",
                height: "50%",
                textAlign: "center",
                border:"none",
                display:"flex",
                flexDirection : "column",
                boxShadow: "2px 3px 8px grey",
                justifyContent: "center"

              }}
              className="ui segment"
            >
              <div><h4>Are you sure, you want to delete?</h4></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: '50px'
                }}
              >
                <button
                  onClick={() => {
                    handleDelete(deleteVal);
                    setDeletePopUp(false);
                  }}
                  style={{ cursor: "pointer" , width:"150px" , height:"50px", borderRadius:"8px"
                  ,backgroundColor: "rgb(118, 209, 118)", border:"none", color:"white"}}
                  
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setDeletePopUp(false);
                  }}
                  style={{ cursor: "pointer" , width:"150px" , height:"50px", borderRadius:"8px"
                  ,backgroundColor: "red", border:"none" , color:"white" , marginLeft:'50px'}}
                  
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="add-contact">
          <i style={{ cursor: "pointer" }} class="plus square icon large"></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactList;
