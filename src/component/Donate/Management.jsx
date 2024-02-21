import React, { useEffect, useState } from "react";
import left from "../img/plus tleft.png";
import right from "../img/tright.png";
import WOW from "wow.js";

export const Management = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const cardsData = [
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faComputer}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: " Project Feasibility",
      description:
        "We conduct comprehensive project feasibility studies to assess the viability of your project and identify potential risks and opportunities..",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faDesktop}
      //       className="text-blue-400"
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Tender Process",
      description:
        "Manage the tendering process efficiently and ensure you receive competitive bids from qualified contractors",
    },
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "Tender Documentation",
      description:
        "  Prepare comprehensive and accurate tender documents to attract the best contractors and avoid any misunderstandings.",
    },
    
    {
      //   logo: (
      //     <FontAwesomeIcon
      //       icon={faMobileScreen}
      //       className="text-blue-400 "
      //       bounce
      //       size="3x"
      //       style={{ color: "#181919" }}
      //     />
      //   ),
      title: "M.E.P Project Coordination",
      description:
        "Orchestrate the seamless integration of mechanical, electrical, and plumbing systems within your project",
    },
  ];
 
  return (
    <>
      <div className=" section pb-10 mt-4" id="diffrence"   style={{ textAlign: "justify", textJustify: "auto" }}>
        <div className="">
          <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#FF7900] font-bold text-center wow fadeInUp pt-4">
           Project Management
          </p>

          <div className="flex flex-wrap justify-center mt-24 wow fadeInUp mx-10 lg:mx-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              {cardsData.map((card, index) => (
                <div className="flex" key={index}>
                  <div
                    className="group  bg-white bg-opacity-5 rounded-lg ring-1 ring-[#FF7900] shadow-lg transform hover:scale-110 transition-transform duration-500 "
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

export default  Management;
