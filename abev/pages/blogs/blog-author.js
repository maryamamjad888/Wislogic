import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar";

import FooterOne from "@/components/Layout/Footer/Footer";
import Link from "next/link";

const BlogAuthor = () => {
	return (
		<>
			<Navbar />
			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<h1>Author: Anna Smith</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/blogs/blog-grid">
									<a>Blog</a>
								</Link>
							</li>
							<li>Author</li>
						</ul>
					</div>
				</div>
			</div>
			
			<FooterOne />
		</>
	);
};

export default BlogAuthor;
