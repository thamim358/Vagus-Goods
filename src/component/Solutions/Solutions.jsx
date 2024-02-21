import React, { useEffect, useState } from "react";
import tranport from "../img/transportation.jpeg"
import warehouse from "../img/warehouse.jpeg"
import customer from "../img/customercleaer.jpeg"
import SupplyChainLogisticsImageUrl from "../img/supplychain.jpeg"
import DigitalSolutionsImageUrl from "../img/digital.jpeg"
import FashionLifestyleImageUrl from "../img/fashion.jpeg"
import RetailIndustryLogisticsImageUrl from "../img/retail.jpeg"
import AutomotiveIndustrySupplyChainImageUrl from "../img/automotive.jpeg"
import ChemicalsImageUrl from "../img/chemical.jpeg"
import TechnologyElectronicsImageUrl from "../img/technology.jpeg"
import FMCGSupplyChainImageUrl from "../img/fmg.jpeg"
import HealthcareImageUrl from "../img/health.jpeg"
import "./solutions.scss";
import WOW from "wow.js";


export const Solution = () => {
  const solution = [
  {
    imageUrl: tranport,
    title: "Transportation Services",
    description: "From road to rail, air to sea, Vagus Goods has the resources and expertise to handle all your transportation needs.",
  },
  {
    imageUrl: warehouse,
    title: "Warehouse Automation Solution",
    description: "Our state-of-the-art warehouse automation solutions ensure efficient and streamlined storage and management of your inventory.",
  },
  {
    imageUrl: customer,
    title: "Customs Clearance",
    description: "Navigating complex customs regulations is made easy with Vagus Goods' expert customs clearance services.",
  },
  {
    imageUrl: SupplyChainLogisticsImageUrl,
    title: "Supply Chain and Logistics",
    description: "We focus on solving your supply chain needs from end to end, taking the complexity out of logistics for you.",
  },
  {
    imageUrl: DigitalSolutionsImageUrl,
    title: "Digital Solutions",
    description: "Our tailored online services simplify logistics by letting you instantly book, manage, and track shipments, among other features.",
  },
  {
    imageUrl: FashionLifestyleImageUrl,
    title: "Fashion & Lifestyle",
    description: "Explore our logistics solutions tailored for the fashion and lifestyle industry, ensuring seamless supply chain management.",
  },
  {
    imageUrl: RetailIndustryLogisticsImageUrl,
    title: "Retail Industry Logistics",
    description: "Vagus Goods provides comprehensive logistics solutions for the retail industry, optimizing supply chains and enhancing omnichannel sales.",
  },
  {
    imageUrl: AutomotiveIndustrySupplyChainImageUrl,
    title: "Automotive Industry Supply Chain Solutions",
    description: "Discover efficient logistics solutions designed for the automotive industry, ensuring timely delivery and cost-effective supply chain management.",
  },
  {
    imageUrl: ChemicalsImageUrl,
    title: "Chemicals",
    description: "We prioritize safety and security in the handling of chemicals, offering specialized logistics solutions to meet industry standards.",
  },
  {
    imageUrl: TechnologyElectronicsImageUrl,
    title: "Technology & Electronics Supply Chain Management",
    description: "Vagus Goods offers tailored logistics solutions for the technology and electronics sector, ensuring the seamless movement of goods and components.",
  },
  {
    imageUrl: FMCGSupplyChainImageUrl,
    title: "FMCG Supply Chain Management",
    description: "Streamline your fast-moving consumer goods supply chain with Vagus Goods' efficient and secure logistics solutions.",
  },
  {
    imageUrl: HealthcareImageUrl,
    title: "Healthcare Logistics",
    description: "Trust Vagus Goods to handle your healthcare logistics needs with precision and care, ensuring the timely and secure delivery of medical supplies and equipment.",
  },
];

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
 
  return (
    <>
      <section id="logistics">
        <div
          className=" bg-[#F7F7F7] section pb-10 p-12"
          id="whyme"
          style={{ textAlign: "justify", textJustify: "auto" }}
        >
          <div className="">
            <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#FF7900] font-bold text-start wow fadeInUp pt-4">
             Logistics Solution
            </p>
            <div className="text-base text-[#7B7B7B] text-start mt-3 font-normal leading-relaxed mb-2 lg:mb-6 wow fadeInUp">
            From the farm to your fridge, or the warehouse to your wardrobe, Maersk is developing solutions that meet customer needs from one end of the supply chain to the other.
            </div>

            <div
              class="flex justify-center"
              style={{ overflowX: "hidden" }}
            >
              
              <div className="flex flex-wrap justify-center mt-12 wow fadeInUp mx-10 lg:mx-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {solution.map((card, index) => (
                  <div
                    key={index}
                    className="max-w-sm bg-white border border-gray-200 shadow rounded-xl"
                    
                  >
                    
                      <img
                        className=" w-full h-40 object-cover rounded-lg "
                        src={card.imageUrl}
                        alt=""
                      />
              
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                          {card.title}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
                        {card.description}
                      </p>
                   
                    </div>
                  </div>
                ))}
              
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
