//Gurbani search//
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../assets/css/dashboard.css';
// import '../../assets/css/style.css';
// import '../../assets/css/intro.css';
import inerlogo from '@/assets/img/iner-logo-mid.svg';
import windows from '@/assets/icons/windows.svg';
import mac from '@/assets/icons/mac.svg';
import ubuntu from '@/assets/icons/ubuntu.svg';
import javaicon from '@/assets/icons/jv.svg';
import pdf from '@/assets/icons/pdf.svg';
import appstore from '@/assets/icons/appstore.svg';
import plastore from '@/assets/icons/platstore.svg';
import poster from '@/assets/img/isg-poster-sm.jpg';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import Head from 'next/head';

function ISearchGurbani() {
    const [share, setShare] = useState(false);
     const [currentUrl, setCurrentUrl] = useState("");
  const handleShareClose = () => setShare(false);
  const handleShare = () => setShare(true);
  const handleShareModal = (platform) => {
    handleShareClose();

  };
   useEffect(() => {
      if (typeof window !== "undefined") {
        setCurrentUrl(window.location.href);
      }
    }, []);
   
    return (
        <div>
            
             <Head>
                          <title>{`iSearchGurbani v4.0 Gurbani Search Software-: searchgurbani.com`} </title>
                          <meta name="description" content={`Download iSearchGurbani: A cross Platform software for exploring sikh scriptures and displaying Gurbani text on projectors . Available for PC, Mac, Linux , Android smartphones and tablets and IPhone and Ipad`} />
                          <meta name="keywords" content="Mobile Version, Gurbani, Shabad Keertan,  Dasam Granth, Guru Granth, Granth, Bhai Gurdas, Vaaran, Varan, Mahankosh, Kosh, Hukumnama, Baanis, Japji, Jaap, Sukhmani, Ardaas" />
                          <meta property="og:title" content={`iSearchGurbani v4.0 Gurbani Search Software-: searchgurbani.com`} />
                          <meta property="og:description" content={`Download iSearchGurbani: A cross Platform software for exploring sikh scriptures and displaying Gurbani text on projectors . Available for PC, Mac, Linux , Android smartphones and tablets and IPhone and Ipad`} />
                          <meta property="og:image" content="https://www.searchgurbani.com/assets/img/sg-ggs1.png" />
                         
                         
                        </Head>
            <section className='section-1 intro-bg'>
            <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div className="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div className="px-1 py-1 align-middle mt-5 bgv-intro">
             
                
                 
                <div className="second-container intro-bkg">
                    <div className='row'>
                        <div className='col-lg-9  '>
                            <h1 className='text-dark mb-2' >iSearchGurbani 4.0 for Windows, Mac and Linux</h1>
                            <p>iSearchGurbani ( iSG) is a cross platform software bringing you
                                  a simplistic approach to search and explore Gurbani . iSG includes 
                                  complete Sri Guru Granth Sahib , Bhai Gurdas Vaaran , Kabit Bhai Gurdas,
                                   Bhai Nand Lal Baani and Baani’s from Sri Dasam Granth Sahib.
                                    iSearchGurbani ( iSG) has a built in slideshow/projector feature,
                                     which automatically displays text to an additional monitor or
                                      projector screen configured as extended monitor.</p>
                                <button className='install mb-5' onClick={handleShare} >Install Now</button>
                            
                        </div>
                        <div className='col-lg-3 d-flex justify-content-end'>
                            <div className='app-thumb'>
                            <Image src={inerlogo} className="img-fluid web-dw-logo" alt="Responsive image" />
                            </div>
                        </div>
                        <div className='col-lg-12'>
                        <h4 className='p_s_head text-dark main-rd' >READ SGGS:</h4>          
                            <p className='tagline_p' >Explore and relish Sri Guru Granth Sahib Ang by Ang.</p>
                            <h4 className='p_s_head text-dark' >BAANIS:</h4>          
                            <p className='tagline_p' >Daily Nitnem baanis and other Baanis like Sukhmani Sahib, Asa di vaar with easy navigation and pagination.</p>
                            <h4 className='p_s_head text-dark' >GURBANI SEARCH:</h4> 
                            <p className='tagline_p' >INSTANT SEARCH WITH INPUT OF ONE ALPHABET</p>
                            <p className='tagline_p' >Advanced search of Shabads from Sri Guru Granth Sahib 
                                , Bhai Gurdas Vaaran , Kabit Bhai Gurdas, Bhai Nand Lal Baani and Sri Dasam Granth Sahib. First Letter Beginning and Anywhere in Romanization and Gurmukhi
                                    Search can be precise by adding consonants to first letter, exclude the matras which represent the vowels
                                Gurmukhi search is ' Case sensitive'</p>
                             <h4 className='p_s_head text-dark mb-3' >NEW FEATURES:ISEARCHGURBANI 4.0 ( September 2018 )</h4> 
                             <ul className='my-5 features-dw' >
                                <li>New instant Search alogrithm for instant search of shabads</li>
                                <li>Lareevar Gurmukhi with Lareevar Assist</li>
                                <li>Set Shabad Start: Set the line of Shabad as Asthai, for quick display</li>
                                <li>Keyboard Shortcuts</li>
                                <li>Baanis and Hukumnamas</li>
                                <li>Full Screen Customization: Font Size, Font Color, Background Image or Color.</li>
                                <li>Set Language Display Order in Full Screen </li>
                                <li>Secondary ( Pramaan) Search</li>
                                <li>Display Message to Community ( Full Screen)</li>
                                <li>Save SGGS Ang/Baani/Searched Shabad as a Favorite.</li>
                             </ul>
                        </div>
                        <div className='col-lg-8'>
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                <th colSpan={2} scope="col">Download iSearchGurbani 4.0</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className="d-flex align-items-center">
      <Image src={windows} width={35} height={35} className="dw-logos me-2" alt="Windows" />
      <span>Windows (48 MB)</span>
    </div></td>
                                    <td> <a href="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.exe" target="_blank" className='dwnld-btn'><i className="bi bi-download"></i>Download</a> </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="d-flex align-items-center">
      <Image src={mac} width={35} height={35} className="dw-logos me-2" alt="Windows" />
      <span>Apple Mac OSX  (48 MB)</span>
    </div>
                                    
                                    </td>
                                    
                                    <td> <a href="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.dmg" target="_blank" className='dwnld-btn'><i className="bi bi-download"></i>Download</a> </td>
                                </tr>
                                <tr>
                                    <td>
                                     <div className="d-flex align-items-center">
      <Image src={ubuntu} width={35} height={35} className="dw-logos me-2" alt="Windows" />
      <span>Ubuntu / Unix  (48 MB)</span>
    </div>
                                    
                                    
                                    </td>
                                    <td> <a href="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.sh" target="_blank" className='dwnld-btn'><i className="bi bi-download"></i>Download</a> </td>
                                </tr>
                                <tr>
                                    <td>
                                    
                                           <div className="d-flex align-items-center">
      <Image src={javaicon} width={35} height={35} className="dw-logos me-2" alt="Windows" />
      <span>Download JRE here</span>
    </div>
                                    
                                    </td>
                                    <td> <a href="https://www.backend.searchgurbani.com/downloads/isg4/jre/JavaSetup8u211.exe" target="_blank" className='dwnld-btn'><i className="bi bi-download"></i>Download</a> </td>
                                </tr>
                                <tr>
                                    <td>
                                     <div className="d-flex align-items-center">
      <Image src={pdf} width={35} height={35} className="dw-logos me-2" alt="Windows" />
      <span>iSearchGurbani Install Guide  (1 MB)</span>
    </div>
                                    
                                    </td>
                                    <td> <a href="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4-install.pdf" target="_blank" className='dwnld-btn'><i className="bi bi-download"></i>Download</a> </td>
                                </tr>
                                <tr>
                                    <td>
                                    
                                       <div className="d-flex align-items-center">
      <Image src={appstore} width={35} height={35} className="dw-logos me-2" alt="Windows" />
      <span>iSearchGurbani for Iphone & Ipad</span>
    </div>
    </td>
                                    <td> <a href="https://apps.apple.com/in/app/isearchgurbani/id6744822993" target="_blank" className='dwnld-btn'><i className="bi bi-download"></i>Download</a> </td>
                                </tr>
                                <tr>
                                    <td>
                                                        <div className="d-flex align-items-center">
      <Image src={plastore} width={35} height={35} className="dw-logos me-2" alt="Windows" />
      <span>iSearchGurbani for Android Phones and Tablets</span>
    </div>
                                    
                                    </td>
                                    <td> <a href="https://play.google.com/store/apps/details?id=com.isearch.gurbani" target="_blank" className='dwnld-btn'><i className="bi bi-download"></i>Download</a> </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className='col-lg-4 mb-3'>
                        <Image src={poster} className="poster" alt="Responsive image" />
                        </div>
                        <div className='col-lg-12'>
                        <h4 className='p_s_head text-dark mb-2' >iSG Requirements</h4> 
                             <ul>
                                <li>iSearchGurbani is cross platform software, can be installed on Windows/ MAC OSx/ Linux</li>
                                <li>Java Run Enviornment</li>
                                <li>Recommended Version 6 Update 5 or higher: <a href="https://www.data.searchgurbani.com/downloads/isg4/jre/JavaSetup8u211.exe" target="_blank"><b>Download JRE here</b></a></li>
                                <li>RAM : atleast 128 MB</li>
                                <li>Disk Space: 100MB</li>
                             </ul>
                        </div>
                    </div>
                    </div>
                    
                    </div>  </div>  </div>  
                </div>
                </div>
                </div> </section>
            <Modal show={share} onHide={handleShareClose}>
        <Modal.Header closeButton>
          <Modal.Title>Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='socia-share'>
            <ul>
              <li>
                <a className='soc-icon' href="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.exe" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={windows} className="img-fluid donate" alt="Responsive image"  />
                </a>
              </li>
              <li>
                <a className='soc-icon' href="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.dmg" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={mac} className="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' href="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.sh" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={ubuntu} className="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' href="https://www.backend.searchgurbani.com/downloads/isg4/jre/JavaSetup8u211.exe" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={javaicon} className="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' href="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4-install.pdf" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={pdf} className="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' href="https://apps.apple.com/in/app/isearchgurbani/id6744822993" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={appstore} className="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' href="https://play.google.com/store/apps/details?id=com.isearch.gurbani" target="_blank" onClick={() => handleShareModal()}>
                  <Image src={plastore} className="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
            </ul>
          </div>

        </Modal.Body>
      </Modal>
        </div>
    )
}

export default ISearchGurbani