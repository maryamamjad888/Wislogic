import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import TopNav from "@/components/Layout/Navigations/TopNav";
import Navbar from "@/components/Layout/Navigations/Navbar";
import GridContent from "@/components/Blog/GridContent";
import FooterOne from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";

const BlogGrid = () => {
	const [metaData, setMetaData] = useState(null);
  useEffect(() => {
    const getMetaInfo = async () => {
      try {
        const response = await axios.get(`${baseApiUrl}/api/blog-page?populate=*`);
        setMetaData(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching info:", error);
      }
    };

    getMetaInfo();
  }, []);
	return (
		<>
		<Helmet>
        <title>{metaData && metaData.MetaTitle}</title>
        <meta
          name="description"
          content={metaData && metaData.MetaDescription}
        />
      </Helmet>
		<TopNav/>
			<Navbar />
			<GridContent />
			<FooterOne />
		</>
	);
};

export default BlogGrid;
