import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router";
// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/intro.css';

// import '../../../assets/css/bhatts.css';
import Axios from 'axios';
// import { Link, useLocation } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '@/assets/img/intro-bannar.webp';
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import Head from 'next/head';

function BhattSahiban() {
   // const navigate = useNavigate();
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
const [headingData, setHeadindData] = useState([]);

    useEffect(() => {
        getIntro()
    }, [])
    const getIntro = async () => {
        setLoader(true)
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=bhatts')
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
                <div className="container ">
                    <div className="second-container intro-bkg">
                        <div className="row ">
                            <div class="col-lg-12">
                                <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                    <div class="px-1 py-1 align-middle  bgv-intro">
                                        <div className="second-container intro-bkg">
                                            <div className="row ">
                                                <div class="col-lg-12">
                                                    <div class="px-1 py-1 align-middle mt-3  akl-intro-kalshar rewamp_wrap rewamp-head-centerss">
                                                        <h2>Bhatt & Bards</h2>
                                                        <hr></hr>
                                                        <p>Bhatts & Bards in Sri Guru Granth Sahib ji</p>

                                                        <ul className='raagas' >
                                                            <li><Link href='/bhatts/bhatt-kalshar'>Kalshar</Link> </li>
                                                            <li><Link href='/bhatts/bhatt-jalap'> Jalap</Link> </li>
                                                            <li><Link href='/bhatts/bhatt-kirat'>Kirat </Link> </li>
                                                            <li><Link href='/bhatts/bhatt-bhika'>Bhika </Link></li>
                                                            <li><Link href='/bhatts/bhatt-salh'>Salh </Link></li>
                                                            <li><Link href='/bhatts/bhatt-bhalh'>Bhalh </Link></li>
                                                            <li><Link href='/bhatts/bhatt-nalh'>Nal</Link></li>
                                                            <li><Link href='/bhatts/bhatt-gyand'>Gyand </Link></li>
                                                            <li><Link href='/bhatts/bhatt-mathura'>Mathura</Link></li>
                                                            <li><Link href='/bhatts/bhatt-balh'>Bal </Link></li>
                                                            <li><Link href='/bhatts/bhatt-haribans'>Harbans </Link></li>
                                                            <li><Link href='/bhatts/sunderbaba'>Baba Sunder ji </Link></li>
                                                            <li><Link href='/bhatts/satta'>Satta and Balwand </Link></li>
                                                            <li><Link href='/bhatts/mardana'>Bhai Mardana Ji </Link></li>

                                                        </ul>



                                                        {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}
                                                        {introData ?
                                                            < div className=' mt-4'
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

export default BhattSahiban