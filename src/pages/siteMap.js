import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../assets/css/dashboard.css';
import Axios from 'axios';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../components/CommonHelmet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SiteMap() {
     const pathname = usePathname();
   
    return (
        <section className='p-4' >
            {/* <HelmetWrapper
                title={`Search Gurbani Sitemap`}
                description="Search Gurbani Sitemap"
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            <div className='container'>
                <div className='row'>
                    <h1 className='inner-heading mb-4' >Search Gurbani Sitemap</h1>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Sri Guru Granth Sahib</h3>
                            <ul>
                                <li><Link className={pathname === '/GGS' ? 'active' : ''} href='/GGS'>Introduction</Link></li> 
                                <li><Link className={pathname === '/GGS/angByAng' ? 'active' : ''} href='/GGS/angByAng'>Ang by Ang</Link></li>
                                <li><Link className={pathname === '/GGS' ? 'active' : ''} href='/guru-granth-sahib/index/chapter'>Chapter Index</Link></li>
                                <li><Link className={pathname === '/GGS/authorIndex' ? 'active' : ''} href='/GGS/authorIndex'>Author Index</Link></li>
                                <li><Link className={pathname === '/GGS/ggsAdvanceSearch' ? 'active' : ''} href='/GGS/ggsAdvanceSearch'>Search Sri Guru Granth Sahib ji</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Amrit Keertan Gutka</h3>
                            <ul>
                                <li><Link className={pathname === '/AK' ? 'active' : ''} href='/AK'>Introduction</Link></li>
                                <li><Link className={pathname === '/AK/pageByPage' ? 'active' : ''} href='/AK/pageByPage'>Browse Page by Page</Link></li>
                                <li><Link className={pathname === '/AK/chapterIndex' ? 'active' : ''} href='/AK/chapterIndex'>Chapter Index</Link></li>
                                <li><Link className={pathname === '/AK/englishIndex' ? 'active' : ''} href="/AK/englishIndex">English Index</Link></li>
                                <li><Link className={pathname === '/AK/punjabiIndex' ? 'active' : ''} href="/AK/punjabiIndex">Punjabi Index</Link></li>
                                <li><Link className={pathname === '/AK/hindiIndex' ? 'active' : ''} href="/AK/hindiIndex">Hindi Index</Link></li>
                                <li><Link className={pathname === '/AK/akSearch' ? 'active' : ''} href="/AK/akSearch">Search Amrit Keertan Gutka</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Bhai Gurdas Vaaran</h3>
                            <ul>
                                <li><Link className={pathname === '/BGV' ? 'active' : ''} href="/BGV">Introduction</Link></li>
                                <li><Link className={pathname === '/BGV/pauriByPauri' ? 'active' : ''} href="/BGV/pauriByPauri">Browse Pauri by Pauri</Link></li>
                                <li><Link className={pathname === '/BGV/vaarIndex' ? 'active' : ''} href="/BGV/vaarIndex">Vaar Index</Link></li>
                                <li><Link className={pathname === '/BGV/BgvSearch' ? 'active' : ''} href="/BGV/BgvSearch">Search Bhai Gurdas Vaaran</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Dasam Granth Sahib</h3>
                            <ul>
                                <li><Link className={pathname === '/DGS' ? 'active' : ''} href="/DGS">Introduction</Link></li>
                                <li><Link className={pathname === '/DGS/dgChapterIndexPB' ? 'active' : ''} href="/DGS/dgChapterIndexPB" >Chapter Index</Link></li>
                                <li><Link className={pathname === '/DGS/dgPageByPage' ? 'active' : ''} href="/DGS/dgPageByPage" >Browse Page by Page</Link></li>
                                <li><Link className={pathname === '/DGS/dgsSearch' ? 'active' : ''} href="/DGS/dgsSearch">Search Dasam Granth Sahib</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Kabit Bhai Gurdas</h3>
                            <ul>
                                <li><Link className={pathname === '/KS/kabitByKabit' ? 'active' : ''} href="/KS/kabitByKabit">Browse Kabit by Kabit</Link></li>
                                <li><Link className={pathname === '/KS/ksSearch' ? 'active' : ''} href="/KS/ksSearch">Search Kabit Bhai Gurdas</Link></li>
                            </ul>
                        </div>
                    </div>
                   
                    
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Bhai Nand Lal Baani</h3>
                            <ul>
                                <li><Link className={pathname === '/BNL/ghazal' ? 'active' : ''} href="/BNL/ghazal">Divan-e-Goya : Ghazals </Link></li>
                                <li><Link className={pathname === '/BNL/quatrains' ? 'active' : ''} href="/BNL/quatrains">Rubaayee</Link></li>
                                <li><Link className={pathname === '/BNL/zindginama' ? 'active' : ''} href="/BNL/zindginama">Zindginama</Link></li>
                                <li><Link className={pathname === '/BNL/ganjnama' ? 'active' : ''} href="/BNL/ganjnama">Ganjnama</Link></li>
                                <li><Link className={pathname === '/BNL/jot-bikas' ? 'active' : ''} href="/BNL/jot-bikas">Jot Bikas (Punjabi)</Link></li>
                                <li><Link className={pathname === '/BNL/jot-bikas-persian' ? 'active' : ''} href="/BNL/jot-bikas-persian">Jot Bikas (Persian)</Link></li>
                                <li><Link className={pathname === '/BNL/rahitnama' ? 'active' : ''} href="/BNL/rahitnama">Rahit Nama</Link></li>
                                <li><Link className={pathname === '/BNL/tankahnama' ? 'active' : ''} href="/BNL/tankahnama">Tankah Nama</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Baani's</h3>
                            <ul>
                                <li><Link href='/'>Nitnem</Link>
                                <ul className='sub-sitemap' >
                                    <li><Link className={pathname === '/sundar-gutka/baanis/japji-sahib' ? 'active' : ''} href="/sundar-gutka/baanis/japji-sahib">Japji Sahib</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/baanis/jaap-sahib' ? 'active' : ''} href="/sundar-gutka/baanis/jaap-sahib">Jaap Sahib</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/baanis/tvai-prasadh-savaiye' ? 'active' : ''} href="/sundar-gutka/baanis/tvai-prasadh-savaiye">Tvai Prasadh Savaiye</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/baanis/chaupai-sahib' ? 'active' : ''} href="/sundar-gutka/baanis/chaupai-sahib">Chaupai Sahib</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/baanis/anand-sahib' ? 'active' : ''} href="/sundar-gutka/baanis/anand-sahib">Anand Sahib</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/baanis/rehraas-sahib' ? 'active' : ''} href="/sundar-gutka/baanis/rehraas-sahib">Rehraas Sahib</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/baanis/kirtan-sohila' ? 'active' : ''} href="/sundar-gutka/baanis/kirtan-sohila">Kirtan Sohila</Link></li>
                                </ul>
                                </li>
                                <li><Link href='/'>Guru Granth Sahib</Link>
                                <ul className='sub-sitemap' >
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/anand-sahib-bhog' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/anand-sahib-bhog">Anand Sahib(Bhog) </Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/laavan-anand-karaj' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/laavan-anand-karaj">Laavan(Anand Karaj) </Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/asa-ki-vaar' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/asa-ki-vaar">Asa Ki Vaar</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/sukhmani-sahib' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/sukhmani-sahib">Sukhmani Sahib</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/sidh-gosht' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/sidh-gosht">Sidh Gosht</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/ramkali-sadh' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/ramkali-sadh">Ramkali Sadh</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/dhakanee-oankaar' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/dhakanee-oankaar">Dhakanee Oankaar</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/baavan-akhree' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/baavan-akhree">Baavan Akhree</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/shabad-hazare' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/shabad-hazare">Shabad Hazare</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/baarah-maaha' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/baarah-maaha">Baarah Maaha</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/sukhmana-sahib' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/sukhmana-sahib">Sukhmana sahib</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/dukh-bhanjani-sahib' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/dukh-bhanjani-sahib">Dukh Bhanjani Sahib</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/salok-sehskritee' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/salok-sehskritee">Salok Sehskritee</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/gathaa' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/gathaa">Gathaa</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/phunhay-m5' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/phunhay-m5">Phunhay M: 5</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/chaubolay-m5' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/chaubolay-m5">Chaubolay M:5</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/salok-kabeer-ji' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/salok-kabeer-ji">Salok Kabeer ji</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/salok-farid-ji' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/salok-farid-ji">Salok Farid ji</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/savaiye-m1' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/savaiye-m1">Savaiye M: 1</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/savaiye-m2' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/savaiye-m2">Savaiye M: 2</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/savaiye-m3' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/savaiye-m3">Savaiye M: 3</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/savaiye-m4' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/savaiye-m4">Savaiye M: 4</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/savaiye-m5' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/savaiye-m5">Savaiye M: 5</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/GGS/baanis/salok-m9' ? 'active' : ''} href="/sundar-gutka/GGS/baanis/salok-m9">Salok M: 9</Link></li>
                                </ul>
                                </li>
                                <li><Link href='/'>Dasam Granth</Link>
                                <ul className='sub-sitemap' >
                                    <li><Link className={pathname === '/sundar-gutka/DS/baanis/akal-ustati' ? 'active' : ''} href="/sundar-gutka/DS/baanis/akal-ustati">Akal Ustati</Link></li>
                                    <li><Link className={pathname === '/sundar-gutka/DS/baanis/bachitar-natak' ? 'active' : ''} href="/sundar-gutka/DS/baanis/bachitar-natak">Bachitar Natak</Link></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Resources</h3>
                            <ul>
                                <li><Link className={pathname === '/Resources/GSRM/Mahankosh' ? 'active' : ''} href="/Resources/GSRM/Mahankosh">GurShabad Ratanakar Mahankosh </Link></li>
                                <li><Link className={pathname === '/Resources/SGGK/SGGKSearch' ? 'active' : ''} href="/Resources/SGGK/SGGKSearch">Sri Guru Granth Kosh</Link></li>
                                <li><Link className={pathname === '/Resources/SNP/SNPrakash' ? 'active' : ''} href="/Resources/SNP/SNPrakash">Sri Nanak Prakash</Link></li>
                                <li><Link className={pathname === '/Resources/SGPSG' ? 'active' : ''} href="/Resources/SGPSG">Sri Gur Pratap Suraj Granth</Link></li>
                                <li><Link className={pathname === '/Resources/FWT' ? 'active' : ''} href="/Resources/FWT">Faridkot Wala Teeka</Link></li>
                                <li><Link className={pathname === '/Resources/SGGD' ? 'active' : ''} href="/Resources/SGGD">Sri Guru Granth Darpan</Link></li>
                                <li><Link className={pathname === '/Resources/Maansarovar' ? 'active' : ''} href="/Resources/Maansarovar">Maansarovar</Link></li>
                                <li><Link className={pathname === '/Resources/Compilation/page/1' ? 'active' : ''} href="/Resources/Compilation/page/1">Compilation of Sri Guru Granth Sahib</Link></li>
                                <li><Link  className={pathname === '/Resources/Music/page/1' ? 'active' : ''} href="/Resources/Music/page/1">Indian Classical Music and Sikh Kirtan </Link></li>
                                <li><Link className={pathname === '/gurus' ? 'active' : ''} href="/gurus">Guru Sahiban</Link></li>
                                <li><Link className={pathname === '/bhagats' ? 'active' : ''} href="/bhagats">Bhagat Sahiban</Link></li>
                                <li><Link className={pathname === '/bhatts' ? 'active' : ''} href="/bhatts">Bhatt Sahiban</Link></li>
                                <li><Link className={pathname === '/raags' ? 'active' : ''} href="/raags">Gurbani Raags</Link></li>
                                <li><Link className={pathname === '/Resources/SearchGurbaniDV' ? 'active' : ''} href="/Resources/SearchGurbaniDV">Search Gurbani Desktop Version</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Hukumnama</h3>
                            <ul>
                                <li><Link className={pathname === '/Resources/Hukumnama/HukumIndex' ? 'active' : ''} href="/Resources/Hukumnama/HukumIndex">Hukumnama Index</Link></li>
                                <li><Link className={pathname === '/Resources/Hukumnama' ? 'active' : ''} href="/Resources/Hukumnama">Sri Darbar Sahib</Link></li>
                                <li><Link className={pathname === '/Resources/Hukumnama/CyberHukumnama' ? 'active' : ''} href="/Resources/Hukumnama/CyberHukumnama">Cyber Hukumnama</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteMap