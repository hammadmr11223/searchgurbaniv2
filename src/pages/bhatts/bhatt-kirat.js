import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Spinner from '@/components/Spinner';

import Head from 'next/head';

function Kirat() {
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
const [headingData, setHeadindData] = useState([]);
    useEffect(() => {
        getIntro()
    }, [])
    const getIntro = async () => {
        setLoader(true)
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=bhatts/bhatt-kirat')
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

export default Kirat