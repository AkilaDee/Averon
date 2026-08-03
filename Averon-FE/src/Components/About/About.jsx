import React from 'react'
import './About.css'
import { Helmet } from 'react-helmet-async';
import about_img from '../../assets/about.webp'

const About = () => {
  return (
    <div className='about-wrapper'>
      <Helmet>
        <title>About Us | Family-Run Ceylon Cinnamon Growers | Averon</title>
        <meta
          name="description"
          content="Averon Supplies is the UK arm of a family cinnamon business in southern Sri Lanka, supplying single-origin Ceylon cinnamon and spices to trade buyers."
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/about-us" />
      </Helmet>
    <div className='about'>
        <div className='about-left'>
            <img
              src={about_img}
              alt="Hand-peeling Ceylon cinnamon quills at our family processing facility in southern Sri Lanka"
              className='about-img'
            />

        </div>
        <div className='about-right'>
            <h3>Our Story</h3>
            <h2>THE AVERON JOURNEY</h2>
            <p>Averon Supplies Ltd is the United Kingdom arm of a family cinnamon business
              based in the Southern Province of Sri Lanka. For decades, that business has
              cultivated, hand-peeled and processed Ceylon cinnamon at commercial scale,
              supplying the domestic Sri Lankan trade before extending into export markets.

              We operate a single-origin supply chain. All material we offer is grown and
              processed by the same family operation, at the same facilities, to a consistent
              specification. This structure gives our customers direct access to the people
              responsible for cultivation and processing, and allows technical questions on
              grading, moisture content or harvest timing to be answered from first-hand
              knowledge.

              Our focus is the British and European trade: food manufacturers, supplement
              producers, blenders, repackers, wholesalers and specialist retailers who require
              authenticated single-origin material with documentation to match.</p>

        </div>
    </div>
      <div className='about-bottom'>
          <p>Averon Supplies Ltd is a registered Food Business Operator in the United Kingdom,
            operating a documented HACCP system in line with Food Standards Agency requirements.
            Every consignment is supplied with batch-level documentation and traceability to the
            estate section and processing lot of origin, enabling any enquiry on a specific
            shipment to be answered from records.<br /><br />

            We supply conventional single-origin Ceylon cinnamon (<em>Cinnamomum verum</em>),
            commonly known as true cinnamon. Ceylon cinnamon is distinguished from Cassia by its
            trace coumarin content, which makes it suitable for applications with high inclusion
            rates or intended for regular consumption, including food supplements and infant
            products. Species and grade documentation is provided with each shipment.<br /><br />

            Our range also includes black pepper, green cardamom, cloves, nutmeg, mace and vanilla,
            supplied whole or ground to customer specification. Sample material is available for
            all product lines prior to order, and we welcome enquiries regarding grades, pack
            formats and bulk pricing.</p>
      </div>
    </div>
  )
}

export default About