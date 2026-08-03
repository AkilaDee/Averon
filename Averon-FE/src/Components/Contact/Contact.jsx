import React from 'react'
import './Contact.css'
import { Helmet } from 'react-helmet-async';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import contact_banner1 from '../../assets/contact-banner.webp' 
import contact_banner2 from '../../assets/about_supply.webp' 

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
        <title>Get in Touch | Averon Supplies</title>
        <meta 
          name="description" 
          content="Contact Averon Supplies for wholesale Ceylon spice inquiries, custom container pricing, and sample requests." 
        />
        <link 
          rel="canonical" 
          href="https://www.averonsupplies.co.uk/contact-us" 
        />
      </Helmet>

      {/* ROW 1: Contact Details */}
      <div className="contact-split-row">
        <div className="contact-text-block">
          <h2>Send us a message <img src={msg_icon} alt="" className="msg-icon-inline" /></h2>
          <p className='form-intro-text'>
            Information around our business activities, industry information, harvest information and products is available through our team of industry experts. Complete our direct enquiry pipeline below to connect with our logistics desk.
          </p>
          
          <ul className="contact-details-list">
            <li><img src={mail_icon} alt="" /> <span>info@averonsupplies.co.uk</span></li>
            <li><img src={phone_icon} alt="" /> <span>+447344469729</span></li>
            <li><img src={location_icon} alt="" /> <span>42 Porthcawe Road, London, SE26 5TA</span></li>
          </ul>
        </div>

        <div className="contact-image-block">
          <img src={contact_banner1} alt="Averon Supplies Sourcing Office" className="editorial-img" />
        </div>
      </div>

      {/* ROW 2: Form Intake */}
      <div className="contact-split-row reverse-row">
        <div className="contact-image-block">
          <img src={contact_banner2} alt="Bulk Trade Delivery Operations" className="editorial-img-tall" />
        </div>

        <div className="contact-text-block">
          <h2>Find Out More About Our Ingredients</h2>
          <p className="form-required-notice">Fields marked with an asterisk (<span className="req">*</span>) are required.</p>
          
          <form onSubmit={onSubmit} className="corporate-web-form">
            <div className="form-field">
              <label htmlFor="name">Name <span className="req">*</span></label>
              <input type="text" id="name" name="name" required/>
            </div>

            <div className="form-field">
              <label htmlFor="company">Company <span className="req">*</span></label>
              <input type="text" id="company" name="company" required/>
            </div>

            <div className="form-field">
              <label htmlFor="discovery_source">How did you discover Averon Supplies? <span className="req">*</span></label>
              <select id="discovery_source" name="discovery_source" required>
                <option value="">Please Select</option>
                <option value="Search Engine">Search Engine (Google/Bing)</option>
                <option value="Industry Trade Show">Industry Trade Show / Exhibition</option>
                <option value="LinkedIn / Professional Network">LinkedIn / Professional Network</option>
                <option value="Word of Mouth">Word of Mouth / Recommendation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email <span className="req">*</span></label>
              <input type="email" id="email" name="email" placeholder="name@company.com" required/>
            </div>

            <div className="form-field">
              <label htmlFor="phone">Telephone <span className="req">*</span></label>
              <input type="tel" id="phone" name='phone' required />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Enquiry <span className="req">*</span></label>
              <textarea id="message" name="message" rows="6" placeholder="e.g. We need 500kg of crushed spices monthly, or we are looking for a new single-origin supplier..." required></textarea>
            </div>
            
            <button type='submit' className='corporate-submit-btn'>
              Submit <img src={white_arrow} alt="" />
            </button>
          </form>
          <span className="submission-result">{result}</span>
        </div>
      </div>

      {/* BOTTOM SECTION: FAQ Grid */}
      <div className='contact-faq'>
        <h2>Frequently Asked Sourcing Questions</h2>
        <div className='faq-grid'>
          <div className='faq-item-card'>
            <h3>Can we request physical samples for laboratory analysis?</h3>
            <p>Yes. We routinely provide evaluation sample packs of our cinnamon grades, whole cloves, and nutmeg to verified UK food manufacturers and commercial blenders for organoleptic testing and quality assurance verification.</p>
          </div>
          <div className='faq-item-card'>
            <h3>How do you guarantee single-origin batch consistency?</h3>
            <p>Unlike standard market brokers who consolidate and blend batches from multiple regional networks, we own and manage production at our own partner estates in Sri Lanka, guaranteeing absolute single-origin purity and strict grade tolerances.</p>
          </div>
          <div className='faq-item-card'>
            <h3>What documentation accompanies your trade shipments?</h3>
            <p>Every commercial consignment arrives with full technical documentation, including independent laboratory certificates, strict country-of-origin guarantees, batch-coded traceability files, and technical product specification sheets.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact