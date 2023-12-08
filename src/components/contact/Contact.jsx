// Write all the code here
import React, { useState } from "react";
import Popup from 'reactjs-popup';
import ContactImg from "../../assets/burger2.png";

function Contact() {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    function getContactInfo(event) {
        const { name, value } = event.target;
        setContactInfo(prevValue => ({ ...prevValue, [name]: value }));
    };

    function showPopUp(event) {
        event.preventDefault();

        if (contactInfo.name && contactInfo.email && contactInfo.message) {
            setShowSuccess(true);
            setShowError(false);
        } else {
            setShowError(true);
            setShowSuccess(false);
        }
    };

    return(<div className="contact">
        <form onSubmit={showPopUp}>
            <h2>Contact Us</h2>
            <input onChange={getContactInfo} type="text" placeholder="Name" name="name" value={contactInfo.nameame}/>
            <input onChange={getContactInfo} type="email" placeholder="Email" name="email" value={contactInfo.emailmail}/>
            <textarea onChange={getContactInfo} className="form-control text-area" name="message" placeholder="Message" resize="none" rows={10} value={contactInfo.message}></textarea>
            
            <Popup
                    trigger={<button type="submit">Send</button>}
                    closeOnDocumentClick
                >
                    {showError && (
                        <div style={{ color: "red", backgroundColor: "#fff", padding: "10px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                            Please fill out all the fields in the form
                        </div>
                    )}
                    {showSuccess && (
                        <div style={{ color: "green", backgroundColor: "#fff", padding: "10px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                            Thank you for contacting us. We will get back to you shortly.
                        </div>
                    )}
                </Popup>

        </form>
        <div className="formBorder">
            <div>
                <img src={ContactImg} alt=""/>
            </div>
        </div>
    </div>);
};

export default Contact;
