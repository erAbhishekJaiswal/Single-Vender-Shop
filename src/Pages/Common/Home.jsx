import React from 'react'
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import HeroBanner from '../../Components/HeroBanner';
import ProductsSlide from '../../Components/ProductsSlide';
import CategoryGrid from '../../Components/CategoryGrid';
const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <HeroBanner />
        <ProductsSlide />
        <CategoryGrid />
        <ProductsSlide />
        {/* <Footer /> */}
    </div>
  )
}

export default Home