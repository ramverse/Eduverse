import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {


const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };






  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sed consequuntur dolore culpa quas obcaecati aperiam vel eligendi incidunt non!</p>
<ul>
    <li> <img src={mail_icon} alt="" />contact@gmail.com</li>
    <li> <img src={phone_icon}alt="" />+1234567</li>
    <li> <img src={location_icon} alt="" />77 abc road ,Pune,Maharashtra</li>
</ul>

        </div>
   <div className="contact-col"> 

    <form onSubmit={onSubmit}>
      <label>Your Name</label>
      <input type="text" name="name" placeholder='enter you name' required/>
      <label>Phone number</label>
      <input type="tel" name='phone' placeholder='Enter your mobile no' required />
      <label > Write your message here</label>
      <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>

      <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
    </form>
  <span>{result}</span>
   </div>
    </div>
  )
}

export default Contact
