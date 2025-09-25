import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/author.css';
import Axios from 'axios';
import { API } from "@/config/api";
import { ApiHelper } from '@/helpers/ApiHelper';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

function SGPSGIndex() {
    //const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
   // const { volume_id } = useParams();
      const router = useRouter();
   const { chapterId, chapname } = router.query;
   const volume_id = chapterId
    console.log('INDEX ID',volume_id, chapname)
    const [indexArr, setIndexArr] = useState([]);
     const [headingData, setheadingData]= useState();
    useEffect(() => {
        getIndex();
    }, [])

       

    const getIndex = async () => {
        setLoader(true)
        await ApiHelper.get(API.getSGPSGIndex + '?volume_id='+ volume_id )
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data);
                setIndexArr(resData.data.chapters);
                setheadingData(resData.data)
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
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
            <section className='inner-actions p-4' >
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >Sri Gur Pratap Suraj Granth - Section {volume_id} Chapter Index </h3>

                </div>
               </section>


            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no"> No.</span>
                                <span className="col_sl_name">Chapter Name</span>
                                <span className="col_section_no">Page No.</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {indexArr.map((item, index) => {
                                    return (
                                        <div className='ang-itm ' >
                                            <div className="section_line line row1">
                                                <span className="col_sl_no sec-no">{index + 1}</span>
                                                <Link href={`/Resources/SGPSG/page/${item.page_id}/volume/${item.volume_id}`} className="col_sl_no sec-nos">
                                                    <span >{item.chapter_name}</span></Link>
                                                <Link href={`/Resources/SGPSG/page/${item.page_id}/volume/${item.volume_id}`} className="col_section_no sec-no page-no"><span >{item.page_id}</span></Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SGPSGIndex