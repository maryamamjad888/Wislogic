import React from "react";
import TopNav from "@/components/Layout/Navigations/TopNav";
import Navbar from "@/components/Layout/Navigations/Navbar";
import Portfolio2 from 'pages/portfolio/HomePagePortfolio';
import FooterOne from "@/components/Layout/Footer/Footer";


const OurWork = () => {
	return (
		<>
		  <TopNav/>
			<Navbar />
            <Portfolio2/>
			<FooterOne />
		</>
	);
};

export default OurWork;
