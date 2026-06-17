import React from 'react'
import './Contact.css'
import { Helmet } from 'react-helmet-async';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import contact_banner1 from '../../assets/contact-banner.webp' 
import contact_banner2 from '../../assets/about_supply.webp' // Import a secondary image for Row 2

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "04fe1ba1-a073-40fe-b66e-a2eba0473697");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Thank you! Your procurement request has been submitted successfully.");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact-page-container'>
      <Helmet>
        <title>Contact Our Bulk Spice Procurement & Trade Desk | Averon Supplies</title>
        <meta 
          name="description" 
          content="Contact Averon Supplies to request wholesale spice samples, secure container-load contract pricing, or arrange a vendor audit with our compliance desk." 
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/contact-us" />
      </Helmet>

      {/* <h1 className="contact-main-title">Contact Us</h1> */}

      {/* ROW 1: Contact Details - Text Left, Image Right */}
      <div className="contact-split-row">
        <div className="contact-text-block">
          <h3>Send us a message <img src={msg_icon} alt="" className="msg-icon-inline" /></h3>
          <p className='form-intro-text'>
            Information around our business activities, industry information, harvest information and products is available through our team of industry experts. Complete our direct enquiry pipeline below to connect with our logistics desk.
          </p>
          
          <ul className="contact-details-list">
            <li><img src={mail_icon} alt="" /> <span>info@averonsupplies.co.uk</span></li>
            <li><img src={phone_icon} alt="" /> <span>+44 7344469729</span></li>
            <li><img src={location_icon} alt="" /> <span>42 Porthcawe Road, London, SE26 5TA</span></li>
          </ul>
        </div>

        <div className="contact-image-block">
          <img src={contact_banner1} alt="Averon Supplies Sourcing Office" className="editorial-img" />
        </div>
      </div>

      {/* ROW 2: Form Intake - Image Left, Form Right (Shifted down ~1cm) */}
      <div className="contact-split-row reverse-row">
        <div className="contact-image-block">
          <img src={contact_banner2} alt="Bulk Trade Delivery Operations" className="editorial-img-tall" />
        </div>

        <div className="contact-text-block">
          <h2>Find Out More About Our Ingredients</h2>
          <p className="form-required-notice">Fields marked with an asterisk (<span className="req">*</span>) are required.</p>
          
          <form onSubmit={onSubmit} className="corporate-web-form">
            <div className="form-field">
              <label>Name <span className="req">*</span></label>
              <input type="text" name="name" required/>
            </div>

            <div className="form-field">
              <label>Company <span className="req">*</span></label>
              <input type="text" name="company" required/>
            </div>

            <div className="form-field">
              <label>How did you discover Averon Supplies? <span className="req">*</span></label>
              <select name="discovery_source" required>
                <option value="">Please Select</option>
                <option value="Search Engine">Search Engine (Google/Bing)</option>
                <option value="Industry Trade Show">Industry Trade Show / Exhibition</option>
                <option value="LinkedIn / Professional Network">LinkedIn / Professional Network</option>
                <option value="Word of Mouth">Word of Mouth / Recommendation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label>Email <span className="req">*</span></label>
              <input type="email" name="email" placeholder="name@company.com" required/>
            </div>

            <div className="form-field">
              <label>Telephone <span className="req">*</span></label>
              <input type="tel" name='phone' required />
            </div>

            <div className="form-field">
              <label>Your Enquiry <span className="req">*</span></label>
              <textarea name="message" rows="6" placeholder="e.g. We need 500kg of crushed spices monthly, or we are looking for a new single-origin supplier..." required></textarea>
            </div>
            
            <button type='submit' className='corporate-submit-btn'>
              Submit <img src={white_arrow} alt="" />
            </button>
          </form>
          <span className="submission-result">{result}</span>
        </div>
      </div>

      {/* BOTTOM SECTION: High Visibility FAQ Grid */}
      <div className='contact-faq'>
        <h2>Frequently Asked Sourcing Questions</h2>
        <div className='faq-grid'>
          <div className='faq-item-card'>
            <h4>Can we request physical samples for laboratory analysis?</h4>
            <p>Yes. We routinely provide evaluation sample packs of our cinnamon grades, whole cloves, and nutmeg to verified UK food manufacturers and commercial blenders for organoleptic testing and quality assurance verification.</p>
          </div>
          <div className='faq-item-card'>
            <h4>How do you guarantee single-origin batch consistency?</h4>
            <p>Unlike standard market brokers who consolidate and blend batches from multiple regional networks, we own and manage production at our own partner estates in Sri Lanka, guaranteeing absolute single-origin purity and strict grade tolerances.</p>
          </div>
          <div className='faq-item-card'>
            <h4>What documentation accompanies your trade shipments?</h4>
            <p>Every commercial consignment arrives with full technical documentation, including independent laboratory certificates, strict country-of-origin guarantees, batch-coded traceability files, and technical product specification sheets.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact