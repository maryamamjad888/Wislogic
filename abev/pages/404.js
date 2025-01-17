import React from "react";
import Link from "next/link";
import Image from "next/image";

import errorImg from "@/public/images/error.png";

export default function Custom404() {
	return (
		<div className="not-found-area ptb-100">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="not-found-content">
							<Image src={errorImg} alt="error-image" />
							<h3>Oops! That page can&apos;t be found</h3>
							<p>
								The page you are looking for might have been
								removed had its name changed or is temporarily
								unavailable.
							</p>
							<Link href="/">
								<a className="btn-style-one red-light-color">
									Back to Home{" "}
									
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

