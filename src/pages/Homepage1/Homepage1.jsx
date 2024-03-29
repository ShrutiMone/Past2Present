import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import LoginModal from "../../components/LoginModal"
import Herosection from "../../components/Herosection/Herosection";
import Submititemform from "../../components/submititemform";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Bestseller from "../../components/Bestseller/Bestseller";

function Homepage1(){
    return(
        <div>
            <Header/>
            <Herosection/>
            <Bestseller/>
            {/* <Submititemform/> */}
            <Footer/>
        </div>
    );
}

export default Homepage1;