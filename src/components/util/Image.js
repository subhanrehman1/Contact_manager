import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Image = ({addUrlt}) => {
  const [progress , setProgress]=useState()
  const [isfile, setFile] = useState(null);
  const handleImageAsFile = (e) => {
    setFile(e.target.files[0]);
  }
  const addlist = async(event) => {
    try {
      event.preventDefault();
      let file = isfile;
      const storage = getStorage();
      var storagePath = 'uploads/' + `${file.name + v4()}` ;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', (snapshot) => {
        // progrss function ....
     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress)
      }, 
      (error) => { 
        console.log(error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            addUrlt(downloadURL)
            
          });
        });   
      } catch (error) { throw error;}  
    }
    return (<>
        <div >
          <div className="wrapper-image">
              <input  type="file" accept=".png, .jpg, .jpeg" onChange={handleImageAsFile}/>
              <button  className="btn__default btn__add"  onClick={addlist}>Upload  </button>  
            <div>{progress}</div>
          </div>
        </div>
      </>)
    }
    export default Image