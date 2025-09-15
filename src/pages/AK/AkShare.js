//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SharePage from '@/components/CommonSharePage';
import { useRouter } from 'next/router';


function AkSharePage() {
    // const { page_no, line_no } = useParams();
     const router = useRouter();
        const { page_no, line_no } = router.query;
    const [isNos, setIsNos] = useState(false);
    useEffect(()=>{
        console.log('NO', page_no);
    console.log('LineNO', line_no)
    if(page_no !== '')
        {
            setIsNos(true)
        }
    
    },[page_no,line_no])
    return (
        <div>
            {isNos ?
            <SharePage  pageNo={page_no} lineNo={line_no} poet='ak' page='page' title='Amrit Keertan' /> : null}
        </div>
    )
}

export default AkSharePage