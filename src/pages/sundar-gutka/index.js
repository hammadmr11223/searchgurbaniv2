import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
// import '../../assets/css/intro.css'
import { API } from "@/config/api";
import { ApiHelper } from "@/helpers/ApiHelper";
import Link from "next/link";
import Head from "next/head";

function SundarGutka() {
  const [loader, setLoader] = useState(false);
  const [sgData, setSgData] = useState([]);
 const [headingData, setheadingData] = useState();
 

  useEffect(() => {
    getAngByAng("1");
  }, []);
  const getAngByAng = async (pageNo) => {
    setLoader(true);
    console.log("Ang No", pageNo);
    await ApiHelper.get(API.getGutka)
      .then((resData) => {
        setLoader(false);
        console.log("Ang", resData.data);
        setheadingData(resData.data)
        setSgData(resData.data.lines);
      })
      .catch((err) => {
        setLoader(false);
        /* setMessage("Error !!! Please try again"); */
        console.log(err, "err");
      });
  };
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
      <section className="inner-actions p-4">
        <div className="container">
          <div className="second-container  wow fadeInUp animated  ">
            <div className="container-fluid ">
              <div className="row ">
                <div>
                  <div className="px-2 py-2 align-middle">
                    <h4 className="second-heading">Sundar Gutka</h4>
                    <p className="second-para">
                      {" "}
                      Sunder Gutka is a collection of Banis or hymns that form
                      the core of a complete Sikh Daily Prayer. These sacred
                      hymns contain a power to transform our lives completely by
                      bringing an unmatched spiritual elevation in even the most
                      ordinary of minds. Gurbani or the Divine Word contains the
                      instructions and divine guidance revealed directly by God
                      through the Gurus and other pious saintly beings. They
                      show the righteous path of life and give direction to the
                      wandering souls in quest of finding the real meaning of
                      life. These hymns deliver a message which is of eternal
                      relevance irrespective of the caste, creed, religion, age
                      or location of a person.
                    </p>
                    <p>
                      <i>Please click on Baani name to explore:</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="d-flex flex-column">
            <div className="ang-display">
              <div className="ang-wrapper">
                {sgData.map((item, index) => {
                  return (
                    <div className="ang-itm">
                      {item.url !== null ? (
                        <>
                          <Link href={`/sundar-gutka/${item.url}`}>
                            <span
                              className="sg-name"
                              style={{ color: "#dd761c" }}
                            >
                              <b>{item.punjabi}</b>
                            </span>
                            -{" "}
                            <span>
                              <b>{item.english}</b>
                            </span>
                          </Link>
                          <div className="mt-2">{item.description}</div>
                        </>
                      ) : (
                        <>
                          <h4 className="text-dark">{item.english}</h4>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SundarGutka;
