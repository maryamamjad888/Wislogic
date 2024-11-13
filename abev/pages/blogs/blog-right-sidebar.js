import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar";
import RightSidebarContent from "@/components/Blog/RightSidebarContent";
import FooterOne from "@/components/Layout/Footer/Footer";
import Partner from "@/components/HomePages/BigData/Partner";

const BlogRightSidebar = () => {
	return (
		<>
			<Navbar />
			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title red-light-color">
							Blog right sidebar
						</span>
						<h1>Our latest articles & resources</h1>
					</div>
				</div>
			</div>
			<RightSidebarContent />
			<div className="pt-100 bg-f9f9f9">
				<Partner />
			</div>
			<FooterOne />
		</>
	);
};

export default BlogRightSidebar;
