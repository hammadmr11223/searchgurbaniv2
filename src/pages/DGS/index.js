// import '../../assets/css/dashboard.css';
// import '../../assets/css/intro.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
import Axios from 'axios';
import { API } from "@/config/api";
import { ApiHelper } from '@/helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '@/assets/img/intro-bannar.webp';
import Spinner from '@/components/Spinner';
import Head from 'next/head';

function DgsIntroduction() {
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    const [headingData, setHeadindData] = useState([]);
    useEffect(() => {
        getIntro()
    }, [])
   /*  const getIntro = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=dasam-granth/introduction')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setIntroData(resData.data.data)

            })
            .catch((err) => {
                console.log(err);
            })
    } */

            const getIntro = async () => {
  try {
    const res = await Axios.get('https://backend.searchgurbani.com/api/meta?url=dasam-granth/introduction');

    if (res?.data?.data?.html) {
      // Replace only href="/dasam-granth/... to href="/DGS/...
      const updatedHtml = res.data.data.html.replace(
        /href="\/dasam-granth/g,
        'href="/DGS'
      );

      // Save updated HTML into state
      setIntroData({
        ...res.data.data,
        html: updatedHtml
      });
      setHeadindData(res.data.data)
    } else {
      setIntroData(res.data.data);
      setHeadindData(res.data.data)
    }
  } catch (err) {
    console.error(err);
    setError(true);
  }
};


   
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
            <section className='section-1 intro-bg'>
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
                     
                                <div class="px-1 py-1 align-middle mt-5 dsg-intro bgv-intro">
                                    {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}                                    
                                    {introData ?
                                        < div className=''
                                        dangerouslySetInnerHTML={{
                                            __html: introData.html
                                        }} 
                                        /> : null}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {loader && <Spinner />}
            </section>
            
        </div>
    )
}

export default DgsIntroduction



 