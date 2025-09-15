//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import PagePrintView from '@/components/pagePrint';
import { API } from '@/config/api';
import { ApiHelper } from '@/helpers/ApiHelper';
import ShabadPrint from '@/components/ShabadPrint';
import Spinner from '@/components/Spinner';
import { useParams } from 'next/navigation';

function BnlShabadPrint() {
//    const {type, shabad_id, lineno, title } = useParams();
const params  = useParams();
      const shabad_id = params?.shabad_id;
     const title = params?.title;

     const type = "tankahnama";
              const page_no = params?.page_no;
    const lineno = params?.lineno;

    const [headingData, setHeadindData] = useState([]);
    const [angData, setAngData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [lineNo, setLineNo] = useState("");
    const [pageNO, setPageNo] = useState('');
    useEffect(() => {
        getShabadLines(shabad_id);
        setPageNo(shabad_id);
        console.log('Ang', type);
}, [type, shabad_id, lineno])
const getShabadLines = async (id) => {
    setLoader(true)
    await ApiHelper.get(API.getBnlPages + type + '/shabad/' + id + "/line/" + lineno + '/title/' + title)
        .then((resData) => {
            setLoader(false);
            console.log('Ang', resData.data);
            setAngData(resData.data.lines)
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
            <ShabadPrint  title={title} angData={angData} headingData={headingData} poet='bnl'/> 
        </div>
    )
}

export default BnlShabadPrint