import React, { useState, useEffect } from "react";
import TopNav from "@/components/Layout/Navigations/TopNav";
import Navbar from "@/components/Layout/Navigations/Navbar";
import DetailsContent from "@/components/Blog/BlogDetails/DetailsContent";
import FooterOne from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const ServicesDetails = () => {
  const [blog, setBlog] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
      );
      setBlog(response.data.data);
    };

    fetchBlog();
  }, [slug]);
  return (
    <>
      <TopNav />
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="col-lg-8 col-12">
            <div className="page-title-content2 pt-75">
              <div className="cat-links">
                <Link href="/blogs/blog">blog</Link>
              </div>
              <h1>{blog.length > 0 && blog[0].attributes.title}</h1>
            </div>
          </div>
        </div>
      </div>
      {blog.length > 0 && <DetailsContent {...blog[0]} />}

      <FooterOne />
    </>
  );
};

export default ServicesDetails;
