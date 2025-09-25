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
import guru3 from '@/assets/img/content/guru3.jpg';
import gamar2 from '@/assets/img/content/gamar2.jpg';
import baoli from '@/assets/img/content/baoli.jpg';
import gamar1 from '@/assets/img/content/gamar1.jpg';
import akbar from '@/assets/img/content/akbar.jpg';
import Image from 'next/image';
import Head from 'next/head';

function GuruAmarDas() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        setLoader(true)
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/guruamar')
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
                        <h3 class="mb-4 raags-heading">Sri Guru Amar Das Ji</h3> 
                        <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle mt-5 bgv-intro">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro rewamp_wrap guru-ramdas Amar_Das_Ji">                               
                                {datas ?
                                        < div className='dates dates-rams list-divs Amar_Das_Ji'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html
                                            ?.replace(/src="assets\/img\/res\/guru3\.jpg"/g, `src="${guru3.src}"`)
                                            .replace(/src="assets\/img\/res\/gamar2\.jpg"/g, `src="${gamar2.src}"`)
                                            .replace(/src="assets\/img\/res\/baoli\.jpg"/g, `src="${baoli.src}"`)
                                              .replace(/src="assets\/img\/res\/gamar1\.jpg"/g, `src="${gamar1.src}"`)
                                               .replace(/src="assets\/img\/res\/akbar\.jpg"/g, `src="${akbar.src}"`)

                                        }}

                                        /> : null}
                                </div>
                            </div>
                        </div>                 

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

export default GuruAmarDas