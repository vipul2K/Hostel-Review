import React, {useState} from 'react';
import {db} from './Firebase';
import Review from './Review';
import '../style/comp.css'

const Form = () => {
     const [name, setName] =useState("");
     const [email, setEmail] =useState("");
     const [msg, setMsg] =useState("");
     const handleSubmit =(e) =>{
         e.preventDefault();
         db.collection('hostelreview').add({
             name:name,
             email:email,
             msg:msg
         })
         .then(()=>{
             alert("submitted")
         })
         .catch((error)=>{
             alert(error.message)
         });
         setName('')
         setEmail('')
         setMsg('')
     };
    return(
        
            <form className="my-form" onSubmit={handleSubmit}>
            <div class="container form-style-8 ">
            <h2 class="ncenter">REVIEW</h2>    
                <label>Name</label>
                <input 
                name="field1"
                placeholder="enter your name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                 />
<br>

</br>
                <label>Email Address</label>
                <input 
                name="field2"
                placeholder="enter your email address"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}    
                />
<br>
    
</br>

                <Review />
<br>
    
</br>
                <label> Comments/ Review/ Question if any</label>
                <textarea 
                placeholder="type here"
                value={msg}
                type="text"
                onChange={(e)=>setMsg(e.target.value)} 
                > </textarea>

                <button class="btn-grid" type="submit">Submit</button>
                </div>
            </form>
    )
}
export default Form;