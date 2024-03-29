import React,{useEffect} from "react";
import Header from "../Header/Header";
import AboutUs from "../About Us/About Us";
import Diffrence from "../Diffrence/Diffence";
import ContactUs from "../Contact us/Contact";
import Landing from "../Landing/Landing";
import Footers from "../Footer/Footers";
import Solution from "../Solutions/Solutions";

function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
    <div className="">
      <Landing/>
      <AboutUs/>
      <Diffrence/>
     <Solution/>
      <ContactUs/> 
      <Footers/>
      </div>
    </>
  );
}

export default Layout;
