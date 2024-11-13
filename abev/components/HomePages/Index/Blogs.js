import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import { FaArrowRight } from "react-icons/fa";

const BlogPostStyle1 = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
    };
    getBlogs();
  }, []);

  return (
    <div className="blog-area pt-100">
      <div className="container">
        <div className="headtext width3 mx-auto">
          <p>Our News</p>
        </div>
        <div className="text-container text-center d-flex flex-column align-items-center justify-content-center">
          <h1 data-aos="fade-up" data-aos-duration="1200">
          Our Latest Blogs
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" className=" w-80">
            Explore the forefront of digital agency expertise through our
            insightful blogs, your gateway to staying ahead in the
            ever-revolving digital landscape.
          </p>
        </div>

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
                    <div className="d-block">
                      <div className="image">
                        <img
                          src={blog.attributes.image.data.attributes.url}
                          alt={
                            blog.attributes.image.data.attributes
                              .name
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
                    </div>
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
