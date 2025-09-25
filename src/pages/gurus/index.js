import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/intro.css';
// import '../../../assets/css/sahiban.css';
import Axios from 'axios';
import { API } from "@/config/api";
import { ApiHelper } from '@/helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '@/assets/img/intro-bannar.webp';
import Spinner from '@/components/Spinner';
import Image from 'next/image';
import Head from 'next/head';

function Sahiban() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    

    useEffect(() => {
        getData()
    }, [])

    
            
        
           
    

    const getData = async () => {
        setLoader(true)
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus')
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
                <div className='Gurbani-Raags '>
                    <div className='container'>
                        <h1 class="inner-heading mb-4"></h1> 
                       
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class=" align-middle mt-5 bgv-intro">
                            <div class="col-lg-12">
                                
                                <div class="px-2 py-2 align-middle mt-0 akl-intro rewamp_wrap">                                 
                                    {datas ?
                                        < div className='dates'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html}} 
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

export default Sahiban