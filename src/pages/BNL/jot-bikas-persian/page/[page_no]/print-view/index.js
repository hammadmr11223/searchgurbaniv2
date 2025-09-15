//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PagePrintView from '@/components/pagePrint';
import { API } from '@/config/api';
import { ApiHelper } from '@/helpers/ApiHelper';
import Spinner from '@/components/Spinner';
import { useParams } from 'next/navigation';

function BnlPrintPage() {
    // const { page_no, type } = useParams();

    const params  = useParams();
    //  const page_no = params?.page_no;
    // const type = params?.type;

     const type = "jot-bikas-persian";
              const page_no = params?.page_no;
    const lineno = params?.line_no;

    const [headingData, setHeadindData] = useState([]);
    const [angData, setAngData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [lineNo, setLineNo] = useState("");
    useEffect(() => {
        //document.title = `Bhai Nand Lal - ${type} ` ;
        getAngByAng(page_no)
    }, [page_no])
    const getAngByAng = async (pageNo) => {
        setLoader(true)
        console.log('Ang No', type);
        await ApiHelper.get(API.getBnlPages + type + "/page?page=" + pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('Ang eeeeeeeeeeeeeeeee', resData.data);
                console.log('AngNo@@@@', typeof (resData.data.current_page));
                setAngData(resData.data.lines);
                setHeadindData(resData.data)
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    return (
        <div>
            {loader && <Spinner />}
            {type === 'ghazal' ?
                <PagePrintView pageNo={page_no} title='Bhai Nand Lal -Divan-e-Goya: Ghazals' pageto='63' angData={angData} headingData={headingData} poet='bnl' /> :
                type === 'quatrains' ?
                    <PagePrintView pageNo={page_no} title='Bhai Nand Lal - Rubaayee' pageto='19' angData={angData} headingData={headingData} poet='bnl' /> : 
                type === 'zindginama' ?
                <PagePrintView  pageNo={page_no} title='Bhai Nand Lal - Zindginama' pageto='42' angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'ganjnama' ?
                <PagePrintView  pageNo={page_no} title='Bhai Nand Lal - Ganjnama' pageto='19' angData={angData} headingData={headingData} poet='bnl'/> :   
                type === 'jot-bikas' ?
                <PagePrintView  pageNo={page_no} title='Bhai Nand Lal - Jot Bikas' pageto='4' angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'jot-bikas-persian' ?
                <PagePrintView  pageNo={page_no} title='Bhai Nand Lal - Jot Bikas' pageto='15' angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'rahitnama' ?
                <PagePrintView  pageNo={page_no} title='Bhai Nand Lal - Rahitnama' pageto='4' angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'tankahnama' ?
                <PagePrintView  pageNo={page_no} title='Bhai Nand Lal - Tankahnama' pageto='6' angData={angData} headingData={headingData} poet='bnl'/> :null}
        </div>
    )
}

export default BnlPrintPage