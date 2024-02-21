import React, { useEffect } from "react";
import WOW from "wow.js";

import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

function Services() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
 
 
 
  
  return (
    <>
    <NavBar/>
    <div className="section" id="services">
      <div className="container mx-auto px-8 py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#FF7900] mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Freight Forwarding"
            description="We offer comprehensive freight forwarding services, managing the movement of your goods efficiently and cost-effectively."
          />
          <ServiceCard
            title="Warehousing"
            description="Our state-of-the-art warehouses ensure the safe storage and management of your inventory."
          />
          <ServiceCard
            title="Customs Clearance"
            description="Navigating complex customs regulations is made easy with our expert customs clearance services."
          />
          <ServiceCard
            title="Transportation"
            description="From road to rail, air to sea, we have the resources and expertise to handle all your transportation needs."
          />
        </div>
      </div>
    </div>
 


      <Footer/>
    </>
  );
}
const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h3 className="text-lg font-semibold text-[#FF7900] mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Services;
