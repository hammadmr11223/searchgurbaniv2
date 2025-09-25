import React, { useState } from "react";
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../assets/css/dashboard.css';
// import '../assets/css/style.css';
// import '../assets/css/feedbck.css';
import searchbannar from '../assets/img/search-bannar.svg';
import Form from 'react-bootstrap/Form';
import Image from "next/image";
import Head from "next/head";

const Feedback = () => {

    return ( 
        <div >
          
             <Head>
                          <title>{`Feedback Form : searchgurbani.com`} </title>
                          <meta name="description" content="A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar" />
                          <meta name="keywords" content="Gurbaanee Keertan,Gurmat Sangeet, Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan, Mahankosh, Kosh, Hukumnama, Baanis, Japji, jaap, Sukhmani, Ardaas" />
                          <meta property="og:title" content={`Feedback Form : searchgurbani.com`} />
                          <meta property="og:description" content="A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar" />
                          <meta property="og:image" content="https://www.searchgurbani.com/assets/img/sg-ggs1.png" />
                         
                         
                        </Head>
               <section className='section-1'>
                <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <Image src={searchbannar} className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
                <div className="fouth-container common-padding">
                        <div className="container align-items-center d-flex justify-content-center">
                            <div className="row w-60 search-main-grd">
                                <div className="col-12" >
                                    <h1 className="main-heading-Feedback">Send us your valuable feedback</h1>
                                </div>                        
                                <div className="filter">
                                    <div className="main-filters">
                                    <div className='row g-3'>
                                        <div className="col-lg-6">
                                            <div className="form-control auto-com-check">
                                                <input type="text"  name="fname" className="feed-inputs" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-control auto-com-check">
                                                <input type="text"  name="fname" className="feed-inputs" placeholder="Email ID"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-control auto-com-check">
                                                <input type="text"  name="fname" className="feed-inputs" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-control auto-com-check feed-text">
                                            <textarea className="feed-txt" name="w3review" placeholder="Subject"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                        <div className="">
                                            <button className="btn btn-outline-secondary sub-feed-bttn1" type="button">
                                           Submit
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            </section>
      </div>
    )
}
export default Feedback;