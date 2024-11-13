import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopNav from "@/components/Layout/Navigations/TopNav";
import Navbar from "@/components/Layout/Navigations/Navbar";
import PortfolioDetailsContent from "@/components/Portfolio/PortfolioDetailsContent";
import FooterOne from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";
import { useRouter } from "next/router";
import axios from "axios";

const PortfolioDetails = () => {
  const [portfolio, setPortfolio] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchsetPortfolio = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/portfolios?filters[slug][$eq]=${slug}&populate=*,ImagesCollage.GridImages,solution.MiniBlocks.Icon,Result.BlockOne`
      );
      setPortfolio(response.data.data);
    };

    fetchsetPortfolio();
  }, [slug]);
  return (
    <>
      <TopNav />
      <Navbar />

      {portfolio.length > 0 && <PortfolioDetailsContent {...portfolio[0]} />}

      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
