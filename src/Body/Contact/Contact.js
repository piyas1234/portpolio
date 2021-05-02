import React from "react";
import Button from "../Home/components/UI/Button";
import './style.css'
const Contact = () => {
  return (
    <div style={{backgroundColor:"#8604F9",}}>
       <div className="offset-md-1 col-md-10">

            <div className="contact-row">
            <h1 className="shadow-lg  text-white  mb-5 p-2">Contact form</h1>
           <div className="row">
               <div className="col-md-6  card p-2">
                   <form action="" method="post" className="p-3">
                   <div className="form-group">
                   <label htmlFor="">Name*</label>
                   <input className="form-control" type="text"/>
                   </div>

                   <div className="form-group">
                   <label htmlFor="">Email*</label>
                   <input className="form-control" type="text"/>
                   </div>

                   <div className="form-group">
                   <label htmlFor="">Message*</label>
                   <textarea style={{height:"200px"}} className="form-control" type="text"></textarea>
                   </div>
                   <Button label={'submit'}></Button>
                   </form>
               </div>
               <div className="col-md-6">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463289.25645017484!2d90.5721047881072!3d24.882719239645958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756e23129c64bf9%3A0xfe2dd4b9f582cdd1!2sNetrokona%20District!5e0!3m2!1sen!2sbd!4v1619944604992!5m2!1sen!2sbd" width="600" height="540"  allowfullscreen="" loading="lazy"></iframe>
               </div>
           </div>
            </div>
       </div>
    </div>
  );
};

export default Contact;
