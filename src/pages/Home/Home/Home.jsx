import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Extrasection from "../Extrasection/Extrasection";
import Gallery from "../Gallery/Gallery";
import Shopcategory from "../Shopcategory/Shopcategory";


import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(()=>{
        AOS.init({duration:2000});

    },[])

    return (
        <div data-aos="fade-up">
            <Banner></Banner>
            <Gallery></Gallery>
            <Shopcategory></Shopcategory>
            <Extrasection></Extrasection>
 
    </div>
    );
};

export default Home;