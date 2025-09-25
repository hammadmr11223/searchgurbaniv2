import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/intro.css';
// import '../../../assets/css/nanak.css';
import Axios from 'axios';
import { API } from "@/config/api";
import { ApiHelper } from '@/helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '@/assets/img/intro-bannar.webp';
import Spinner from '@/components/Spinner';
import gtb5 from '@/assets/img/content/gtb5.jpg';
import gtb4 from '@/assets/img/content/gtb4.jpg';
import gtb10 from '@/assets/img/content/gtb10.jpg';
import gtb6 from '@/assets/img/content/gtb6.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function GuruBahadur1() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        setLoader(true)
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/guruteghbhadur1')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setDatas(resData.data.data)
setLoader(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
             <Head>
                          <title>{datas?.title} </title>
                          <meta name="description" content={datas?.description} />
                          <meta name="keywords" content={datas?.keywords} />
                          <meta property="og:title" content={datas?.title} />
                          <meta property="og:description" content={datas?.description} />
                          <meta property="og:image" content="https://www.searchgurbani.com/assets/img/sg-ggs1.png" />
                         
                         
                        </Head>
            <section className='section-1'>
                <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <Image src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div>

                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <h1 class="inner-heading "></h1>
                        <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle  bgv-intro">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro">                    
                               
                                {datas ?

                                    < div className='dates'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html
                                                ?.replace(/src="..\/assets\/img\/res\/gtb5\.jpg"/g, `src="${gtb5.src}"`)
                                                .replace(/src="..\/assets\/img\/res\/gtb4\.jpg"/g, `src="${gtb4.src}"`)
                                                .replace(/src="..\/assets\/img\/res\/gtb10\.jpg"/g, `src="${gtb10.src}"`)
                                                .replace(/src="..\/assets\/img\/res\/gtb6\.jpg"/g, `src="${gtb6.src}"`)

                                                
                                        }}
                                    /> : null}
                            </div>
                        </div>
                    </div>
                    </div>
                        </div>
                    </div>
                    <hr></hr>
                        <div className='page-content left-algn-next'><Link href='/gurus'>Index</Link></div>
                <div className='page-content right-algn-next'><Link href='/gurus/guruteghbhadur'>Back</Link></div>
                </div>
        </div>

                

    { loader && <Spinner /> }
            </section >

        </div >
    )
}

export default GuruBahadur1