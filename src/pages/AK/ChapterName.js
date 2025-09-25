import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
// import '@/assets/css/dashboard.css';
// import '@/assets/css/author.css';
import Axios from 'axios';
import { API } from "@/config/api";
import { ApiHelper } from '@/helpers/ApiHelper';
import AkIndex from '@/components/AkIndex';
import Spinner from '@/components/Spinner';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
//import imgs from './assets/img/content/ggs_01.jpg'

function ChapterName() {
    // const { chapter_no, chapter_name } = useParams();
     const router = useRouter();
        const { chapter_no,  chapter_name } = router.query;
    const [loader, setLoader] = useState(false);
    const [indexArr, setIndexArr] = useState([]);
    const [chapterArr, setChapterArr] = useState([]);
     const [headingData, setHeadindData] = useState([]);

    useEffect (() => {
        getIndex();
    },[])
    const getIndex = async () => {
        setLoader(true)
        await ApiHelper.get(API.getChapterName + chapter_no + '/' + chapter_name)
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data);
                setChapterArr(resData.data)
                setIndexArr(resData.data.shabads);
                setHeadindData(resData.data)
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
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >Amrit Keertan - Shabad</h3>
                    <div className='alphabet-container text-center'>
                    {chapterArr.chapter_name && chapterArr.chapter_name[0] && (
                            <h2 className='text-dark'>Chapter: {chapterArr.chapter_name[0].section}</h2>
                        )}
                    </div>
                </div>
            </section>


            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no"> No.</span>
                                <span className="col_sl_name">Shabad Title</span>
                                <span className="col_section_no">Page No.</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {indexArr.map((item, index) => { 
                                    const shabadNameWithDashes = item.shabad_name.replace(/ /g, '-');                                   
                                    return (
                                        <div className='ang-itm padd-indexx'>
                                            <div className="section_line line row1">
                                                <span className="col_sl_no sec-no">{index + 1}</span>
                                                <Link  href={`/AK/shabad/${item.shabad_id}/${shabadNameWithDashes}`}  className="col_sl_no sec-nos">
                                                    <span >{item.shabad_name}</span></Link>
                                                    <Link  href={`/AK/shabad/${item.shabad_id}/${shabadNameWithDashes}`} className="col_section_no sec-no page-no"> 
                                                <span>{item.pageno}</span></Link>
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

export default ChapterName