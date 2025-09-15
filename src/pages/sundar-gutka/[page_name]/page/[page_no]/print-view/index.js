 //Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import PagePrintView from '@/components/pagePrint';
import { API } from '@/config/api';
import { ApiHelper } from '@/helpers/ApiHelper';
import Spinner from '@/components/Spinner';
import { useRouter } from 'next/router';

function SgPrintPage() {
  //  const { type , page_no } = useParams();
    const router = useRouter();
    const { page_name, page_no } = router.query;
console.log("object", page_name, page_no );
const type = page_name
    const [headingData, setHeadindData] = useState([]);
    const [angData, setAngData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [lineNo, setLineNo] = useState("");
    useEffect(() => {
        getAngByAng(page_no)
    }, [page_no])
    const getAngByAng = async (pageNo) => {
        setLoader(true)
        console.log('Ang No', pageNo);
        await ApiHelper.get(API.getBaanis + type + "?page=" + pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                setAngData(resData.data.lines);
                setHeadindData(resData.data)
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            }); 
    }
    return (
        <div>
            {loader && <Spinner />}
            {type === 'japji-sahib' ?
                <PagePrintView pageNo={page_no} title='Japji Sahib' pageto='16' angData={angData} headingData={headingData} poet='sg' /> :
                type === 'jaap-sahib' ?
                    <PagePrintView pageNo={page_no} title='Jaap Sahib' pageto='33' angData={angData} headingData={headingData} poet='sg' /> : 
                type === 'tvai-prasadh-savaiye' ?
                <PagePrintView  pageNo={page_no} title='Tvai Prasadh Savaiye' pageto='2' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'chaupai-sahib' ?
                <PagePrintView  pageNo={page_no} title='Chaupai Sahib' pageto='5' angData={angData} headingData={headingData} poet='sg'/> :   
                type === 'anand-sahib' ?
                <PagePrintView  pageNo={page_no} title='Anand Sahib' pageto='9' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'rehraas-sahib' ?
                <PagePrintView  pageNo={page_no} title='Rehraas Sahib' pageto='15' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'kirtan-sohila' ?
                <PagePrintView  pageNo={page_no} title='Kirtan Sohila' pageto='3' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'anand-sahib-bhog' ?
                <PagePrintView  pageNo={page_no} title='Anand Sahib (Bhog)' pageto='2' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'aarti' ?
                    <PagePrintView pageNo={page_no} title='Aartee' pageto='4' angData={angData} headingData={headingData} poet='sg' /> : 
                type === 'laavan-anand-karaj' ?
                <PagePrintView  pageNo={page_no} title='Laavan( Anand Karaj)' pageto='1' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'asa-ki-vaar' ?
                <PagePrintView  pageNo={page_no} title='Asa Ki Vaar' pageto='26' angData={angData} headingData={headingData} poet='sg'/> :   
                type === 'sukhmani-sahib' ?
                <PagePrintView  pageNo={page_no} title='Sukhmani sahib' pageto='82' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'sidh-gosht' ?
                <PagePrintView  pageNo={page_no} title='Sidh Gosht' pageto='17' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'ramkali-sadh' ?
                <PagePrintView  pageNo={page_no} title='Ramkali Sadh' pageto='2' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'dhakanee-oankaar' ?
                <PagePrintView  pageNo={page_no} title='Dhakanee Oankaar' pageto='16' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'baavan-akhree' ?
                    <PagePrintView pageNo={page_no} title='Baavan Akhree' pageto='28' angData={angData} headingData={headingData} poet='sg' /> : 
                type === 'shabad-hazare' ?
                <PagePrintView  pageNo={page_no} title='Shabad Hazare' pageto='5' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'baarah-maaha' ?
                <PagePrintView  pageNo={page_no} title='Baarah Maaha' pageto='5' angData={angData} headingData={headingData} poet='sg'/> :   
                type === 'sukhmana-sahib' ?
                <PagePrintView  pageNo={page_no} title='Sukhmana Sahib' pageto='19' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'dukh-bhanjani-sahib' ?
                <PagePrintView  pageNo={page_no} title='Dukh Bhanjani Sahib' pageto='12' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'salok-sehskritee' ?
                <PagePrintView  pageNo={page_no} title='Salok Sehskritee' pageto='11' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'gathaa' ?
                <PagePrintView  pageNo={page_no} title='Gathaa' pageto='3' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'phunhay-m5' ?
                    <PagePrintView pageNo={page_no} title='Phunhay M:5' pageto='4' angData={angData} headingData={headingData} poet='sg' /> : 
                type === 'chaubolay-m5' ?
                <PagePrintView  pageNo={page_no} title='Chaubolay M:5' pageto='1' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'salok-kabeer-ji' ?
                <PagePrintView  pageNo={page_no} title='Salok Kabeer ji' pageto='20' angData={angData} headingData={headingData} poet='sg'/> :   
                type === 'salok-farid-ji' ?
                <PagePrintView  pageNo={page_no} title='Salok Farid ji' pageto='12' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'savaiye-m1' ?
                <PagePrintView  pageNo={page_no} title='Savaiye M:1' pageto='3' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'savaiye-m2' ?
                <PagePrintView  pageNo={page_no} title='Savaiye M:2' pageto='3' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'savaiye-m3' ?
                <PagePrintView  pageNo={page_no} title='Savaiye M:3' pageto='6' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'savaiye-m4' ?
                    <PagePrintView pageNo={page_no} title='Savaiye M:4' pageto='13' angData={angData} headingData={headingData} poet='sg' /> : 
                type === 'savaiye-m5' ?
                <PagePrintView  pageNo={page_no} title='Savaiye M:5' pageto='5' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'salok-m9' ?
                <PagePrintView  pageNo={page_no} title='Salok M: 9' pageto='5' angData={angData} headingData={headingData} poet='sg'/> :   
                type === 'akal-ustati' ?
                <PagePrintView  pageNo={page_no} title='Akal Ustati' pageto='22' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'bachitar-natak' ?
                <PagePrintView  pageNo={page_no} title='Bachitar Natak' pageto='40' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'shabad-hazare-paatishahi-10' ?
                <PagePrintView  pageNo={page_no} title='Shabad Hazare Paatishahi 10' pageto='4' angData={angData} headingData={headingData} poet='sg'/> :
                type === 'tvai-prasadh-savaiye-dheenan-kee' ?
                <PagePrintView  pageNo={page_no} title='Tvai Prasadh Savaiye ( Dheenan Kee)' pageto='2' angData={angData} headingData={headingData} poet='sg'/> :null}
        </div>
    )
}

export default SgPrintPage