import '../style/comp.css'
import { BsGeoAlt } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";

function Contact() {
    return (
      <div className="my-form">
          <div class="container form-style-8 " type="text">
            <h2 class="ncenter">CONTACT US</h2> 
            <p><BiPhoneCall/> +91-7544-267051, 267310,  267311, 267312</p> 
            <p> <BsFillEnvelopeFill/>    dean@juet.ac.in</p>
            <p> <BsGeoAlt/>    Mumbai - Agra National Hwy, Raghogarh -Vijaypur, Madhya Pradesh 473226 </p>              
          </div>
      </div>
    );
  }
  
  export default Contact;