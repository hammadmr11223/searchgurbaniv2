import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/intro.css';
import Axios from 'axios';
import { API } from "@/config/api";
import { ApiHelper } from '@/helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '@/assets/img/intro-bannar.webp';
import Spinner from '@/components/Spinner';
import jathaImage from '@/assets/img/content/jatha.jpg';
import tabalaImage from '@/assets/img/content/tabla.jpg';
import raagiImage from '@/assets/img/content/raagi.gif';
import Head from 'next/head';


function Muscical() {
    const [raag, setRaag] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        getRaags()
    }, [])
    const getRaags = async () => {
        setLoader(true)
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=saaj')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setRaag(resData.data.data)
setLoader(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
             <Head>
                          <title>{raag?.title} </title>
                          <meta name="description" content={raag?.description} />
                          <meta name="keywords" content={raag?.keywords} />
                          <meta property="og:title" content={raag?.title} />
                          <meta property="og:description" content={raag?.description} />
                          <meta property="og:image" content="https://www.searchgurbani.com/assets/img/sg-ggs1.png" />
                         
                         
                        </Head>
            <section className='section-1'>
                {/* <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div> */}
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <div className="second-container intro-bkg">
                            <div className="row ">
                                <div class="col-lg-12">
                                    <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                        <div class="px-1 py-1 align-middle  bgv-intro">
                                        <h1 class="inner-heading mb-4"></h1>
                                            <div className="row ">
                                                <div class="col-lg-12">
                                                    <div class="px-1 py-1 align-middle mt-0 dev-giri rag-common rewamp_wrap rewamp-head-centerss">
                                                        <h2 >Musical Instruments in Gurmat Sangeet</h2>
                                                        <hr></hr>
                                                        {raag ?
                                                            < div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: raag.html
                                                                }}
                                                            /> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div></div></div></div>
                    </div>
                </div>

                {loader && <Spinner />}
            </section>

        </div>
    )
}

export default Muscical