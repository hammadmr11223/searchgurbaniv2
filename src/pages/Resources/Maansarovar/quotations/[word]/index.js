import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/author.css';
import Axios from 'axios';
import { API } from "@/config/api";
import { ApiHelper } from '@/helpers/ApiHelper';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

function MaansarovarIndex() {
   // const navigate = useNavigate();
  const router = useRouter();
//       const searchParams = useSearchParams();
//   const queryWord = searchParams.get('word') || '';
//      console.log("searchParams", searchParams, queryWord);
//      const word = queryWord

//  const params = useParams();
//   const word = decodeURIComponent(params.word);
// console.log("dssdsdv word", word);
     const { word , pageno } = router.query;
     console.log("dssdsdv chapterId", word,pageno ,  router.query);
    const [loader, setLoader] = useState(false);
   // const { word } = useParams();
    const [indexArr, setIndexArr] = useState([]);
   const [headingData, setheadingData] = useState();



    useEffect(() => {
        getIndex();
    }, [])
  
                             
    const getIndex = async () => {
        setLoader(true)
        await ApiHelper.get(API.getMaansarovarIndex + word)
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data.quotations);
                setIndexArr(resData.data.quotations);
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
                    <h3 className='text-dark mb-3 text-center' >Maansarovar - Quotations for {word}</h3>
                    <button className='ang-btn maan-search'  onClick={() => router.push('/Resources/Maansarovar')}>Search Page</button>
                </div>
      
            </section>


            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no maan-no"> No</span>
                                <span className="col_sl_name maan-quo">Quotation</span>
                                <span className="col_section_no maan-ang">SGGS Ang</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {indexArr.map((item, index) => {
                                    return (
                                        <div className='ang-itm mt-2 padd-indexx rows-padd-issue' >
                                            <div className="section_line line row1">
                                                <span className="col_sl_no sec-no quot-no">{index + 1}</span>
                                                <Link href={`/GGS/ang/${item.pageno}`} className="col_sl_no sec-nos quot-page">
                                                    <span >{item.quotation}</span></Link>
                                                <Link href={`/GGS/ang/${item.pageno}`}><span className="col_section_no sec-no quot-page">{item.pageno}</span></Link>
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

export default MaansarovarIndex