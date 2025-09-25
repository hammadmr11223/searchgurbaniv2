import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/intro.css';
// import '../../../assets/css/nanak.css';
// import '../../../assets/css/guru-amar-das.css';
import Axios from 'axios';
import nanak from '@/assets/img/nanak.jpg';
import { API } from "@/config/api";
import { ApiHelper } from '@/helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '@/assets/img/intro-bannar.webp';
import Spinner from '@/components/Spinner';
import surdas from '@/assets/img/content/surdas.jpg';
import Link from 'next/link';
import Head from 'next/head';

function Surdas() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
const [headingData, setHeadindData] = useState([]);

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        setLoader(true)
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=bhagats/bhagat-surdas')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setDatas(resData.data.data)
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
                                                    <div class="px-1 py-1 align-middle mt-0 akl-intro">
                                                        {datas ?
                                                            < div className='static-page'
                                                                dangerouslySetInnerHTML={{
                                                                    __html: datas.html
                                                                        ?.replace(/src="assets\/img\/res\/surdas\.jpg"/g, `src="${surdas.src}"` )
                                                                        
                                                                }}
                                                            /> : null}
                                                        <div className='d-flex justify-content-start index-wrapper'><Link href='/bhagats' className='static-index'>Bhagats Index
                                                        </Link></div>
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

export default Surdas