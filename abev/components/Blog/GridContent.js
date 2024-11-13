import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import { FaArrowRight } from "react-icons/fa";

const BlogPostStyle1 = () => {
  const [blogs, setBlogs] = React.useState();
  const [blogPageInfo, setBlogPageInfo] = React.useState();

  React.useEffect(() => {
    const fetchBlogPageInfo = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/blog-page?populate=*`
        );
        setBlogPageInfo(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching blog page info:", error);
      }
    };
    fetchBlogPageInfo();
  }, []);
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
    };
    getBlogs();
  }, []);

  return (
    <div className="blog-area">
      
        {blogPageInfo && (
          <div>
            <div
              className="page-title-area"
              style={{
                backgroundImage: blogPageInfo
                  ? `url(${blogPageInfo.BannerImg.data.attributes.url})`
                  : "none",
                height: "500px",
                width: "100%",
                position: "relative",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  width: "100%",
                  height: "500px",
                  background: "rgba(37, 37, 37, 0.6)",
                  zIndex: 1,
                }}
              ></div>
              <div className="container">
                <div
                  className="what-text-container d-flex flex-column align-items-center justify-content-center"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <h1>{blogPageInfo.Title}</h1>
                  <p className="w-80">{blogPageInfo.Description}</p>
                  <div className="ButtonBottom">
                    <Link href="">
                      <a className="btn-epicc mt-20">
                        <div>
                          <span>{blogPageInfo.ButtonTitle}</span>
                          <span>{blogPageInfo.ButtonTitle}</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
		<div className="container  pt-100">
        {blogs && (
          <div className="row justify-content-center">
            {blogs.data.map((blog) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                key={blog.id}
              >
                <div className="single-blog-post bg-f9f9f9">
                  <Link href={`/blogs/${blog.attributes.slug}`}>
                    <a className="d-block">
                      <div className="image">
                        <img
                          src={blog.attributes.image.data.attributes.url}
                          alt={
                            blog.attributes.image.data.attributes.name
                          }
                        />
                      </div>
                      <div className="content2">
                        <p>{blog.attributes.category}</p>
                        <div className="two-lines">
                          <h3>{blog.attributes.title}</h3>
                        </div>
                        <div className="two-lines">
                          <p>{blog.attributes.detailsText}</p>
                        </div>
                        <div className="read-more mt-20">
                          <a
                            href={`/blogs/${blog.attributes.slug}`}
                            className="read-more-link"
                          >
                            Read more &nbsp;
                            <FaArrowRight />
                          </a>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostStyle1;
