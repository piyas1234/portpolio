import React from "react";
import Button from "../Home/components/UI/Button";
import MediumHeading from "../Home/components/UI/MediumHeading";
import './style.css'
const Contact = () => {
  return (
    <div >
       <div className="offset-md-1 col-md-10 ">

            <div  className="contact-row p-5 contact-main">
             {/* <MediumHeading text="Contact form"></MediumHeading> */}
             <h2 className="bg-dark text-white p-2 rounded shadow">Contact Form</h2>
           <div className="row">
               <div className="col-md-12 p-2">
                   <form action="" method="post" className="p-3">
                   <div className="form-group">
                   <label htmlFor="">Name*</label>
                   <input className="form-control formControl" type="text"/>
                   </div>

                   <div className="form-group">
                   <label htmlFor="">Email*</label>
                   <input className="form-control formControl" type="text"/>
                   </div>

                   <div className="form-group">
                   <label htmlFor="">Message*</label>
                   <textarea style={{height:"200px"}} className="form-control formControl" type="text"></textarea>
                   </div>
                   <Button label={'submit'}></Button>
                   </form>
               </div>
                
           </div>
            </div>
       </div>
    </div>
  );
};

export default Contact;
