import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import { FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
    };
    getBlogs();
  }, []);

  return (
    <>
      <aside className="widget-area pt-75">
        {blogs && (
          <div className="widget widget_posts_thumb">
            <h3 className="widget-title">
              <span>You may also like</span>
            </h3>

			{blogs && (
          <div className="row justify-content-center">
            {blogs.data.slice(0, 3).map((blog) => (
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
                            blog.attributes.image.data.attributes
                              .alternativeText
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
        )}
      </aside>
    </>
  );
};

export default Sidebar;
