import React, { useEffect, useState } from "react";
import WOW from "wow.js";

export const Diffrence = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const cardsData = [
    {
      title: "Experienced Team",
      description:
        "Our team consists of seasoned logistics professionals with extensive experience in the shipping industry. From freight specialists to customs experts, we have the knowledge and skills to handle your shipments efficiently.",
    },
    {
      title: "Comprehensive Services",
      description:
        "We offer a comprehensive range of logistics services, including freight forwarding, warehousing, customs clearance, transportation, and more. With all your logistics needs covered under one roof, we ensure seamless supply chain management.",
    },
    {
      title: "Personalized Approach",
      description:
        "We understand that every shipment is unique. That's why we provide personalized attention to each client, tailoring our services to meet your specific requirements. You can rely on us to deliver a customized logistics solution that suits your business.",
    },
    {
      title: "Commitment to Quality",
      description:
        "Quality is at the heart of everything we do. We prioritize the safety and security of your shipments, using advanced technology and strict quality control measures to ensure that your goods arrive at their destination in perfect condition.",
    },
    {
      title: "Competitive Pricing",
      description:
        "We offer competitive pricing without compromising on quality. Our cost-effective logistics solutions help you save money while ensuring reliable and timely delivery of your shipments.",
    },
    {
      title: "Sustainable Practices",
      description:
        "As a responsible logistics company, we are committed to sustainability. We implement eco-friendly practices and offer sustainable shipping options to minimize our environmental impact and create a greener future.",
    },
  ];
  
 
  return (
    <>
      <div className=" section pb-10 mt-4" id="why"   style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className="">
          <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#FF7900] font-bold text-center wow fadeInUp pt-4">
           Why Choose Vagus Goods
          </p>

          <div className="flex flex-wrap justify-center mt-24 wow fadeInUp mx-10 lg:mx-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {cardsData.map((card, index) => (
                <div className="flex" key={index}>
                  <div
                    className="group  bg-white bg-opacity-5 rounded-lg  shadow-lg transform hover:scale-110 transition-transform duration-500 "
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="text-center p-6 wow fadeInUp">
                      {card.logo}
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-base text-center text-[#FF7900] uppercase font-bold mb-2 wow fadeInUp">
                        {card.title}
                      </h3>
                      <p className="text-[#737070] text-center font-semibold text-base p-3 wow fadeInUp">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Diffrence;
