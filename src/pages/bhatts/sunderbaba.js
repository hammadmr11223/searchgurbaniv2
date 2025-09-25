import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/intro.css';
// import '../../../assets/css/kalshar.css';
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

function BabaSundar() {
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
const [headingData, setHeadindData] = useState([]);

    useEffect(() => {
        getIntro()
    }, [])
    const getIntro = async () => {
        setLoader(true)
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=bhatts/sunderbaba')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setIntroData(resData.data.data)
                setHeadindData(resData.data.data)
setLoader(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <Head>
                          <title>{headingData?.title} </title>
                          <meta name="description" content={headingData?.description} />
                          <meta name="keywords" content={headingData?.keywords} />
                          <meta property="og:title" content={headingData?.title} />
                          <meta property="og:description" content={headingData?.description} />
                          <meta property="og:image" content="https://www.searchgurbani.com/assets/img/sg-ggs1.png" />
                         
                         
                        </Head>
            <section className='section-1  back-color'>
                {/* <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div> */}


                <div className="container">
                    <div className="second-container intro-bkg">
                        <div className="row ">
                            <div class="col-lg-12">
                                <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                    <div class="px-1 py-1 align-middle  bgv-intro">
                                        <div className="second-container intro-bkg">
                                            <div className="row ">
                                                <div class="col-lg-12">
                                                    <div class="px-1 py-1 align-middle mt-3 akl-intro-kalshar rewamp_wrap rewamp-head-centerss">
                                                        {introData ?
                                                            < div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: introData.html
                                                                }}
                                                            /> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></div></div></div>
                </div>
                {loader && <Spinner />}
            </section>

        </div>
    )
}

export default BabaSundar