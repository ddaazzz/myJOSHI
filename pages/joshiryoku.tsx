import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import Faq from '../components/Faq'
import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "../assets/content.json";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
const Joshiryoku: NextPage = () => {
  const [display, setDisplay] = useState(0);
  const { locale } = useRouter();

  var content_json = Content.Home.filter((p) => p.locale === locale)[0];
  console.log(locale);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    swipe: true,
    swipeToSlide: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    afterChange: (currentSlide: any) => {
      setDisplay(currentSlide)

    }
  };
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1
  };
  return (
    <>
      <Head>
        <title>Joshiryoku</title>
        <meta name="description" content="Joshiryoku" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="canvas" >

        <NavBar />
        <div >
          <section className=" tw-items-center tw-m-auto tw-relative">
            <img src="img/banner.png" className='tw-w-full  tw-z-0 feature-banner' />
            <img src="img/logo.png" className='logo-section tw-absolute self-center tw-z-10 tw--translate-y-1/2' />
          </section>
          <Container className="md:tw-pb-16 tw-pb-4 story-section tw-px-0" >
            <Row className="story md:tw-p-16 md:tw-mt-0 tw-p-4 md:tw-m-12 tw-m-0 tw-mb-12" >
              <Col md={12} xs={12} className="align-self-center  tw-mb-4">
                <p className='tw-text-center heading-2 md:tw-mt-0 tw-mt-4'>
                  {content_json.title_1}
                </p>
              </Col>
              <Col md={12} xs={12}>
                <p className='tw-text-center md:tw-leading-relaxed md:tw-text-2xl tw-text-xl lg:tw-pt-0 tw-pt-0'>
                  {content_json.content_1}
                </p> </Col>
            </Row>
            <Row className="md:tw-px-16 tw-px-0 md:tw-pt-16 tw-pt-4 tw-mb-16 " >
              <Col md={6} xs={12} className="align-self-center text-center">
                <div className="align-self-center text-center">
                  <Slider {...settings} className="slider borders" >
                    <img src="./img/1.png" className="slider-item" />
                    <img src="./img/2.png" className="slider-item" />
                    <img src="./img/3.png" className="slider-item" />
                    <img src="./img/4.png" className="slider-item" />
                    <img src="./img/5.png" className="slider-item" />
                    <img src="./img/6.png" className="slider-item" />
                    <img src="./img/7.png" className="slider-item" />
                    <img src="./img/8.png" className="slider-item" />
                    <img src="./img/9.png" className="slider-item" />
                  </Slider>
                </div>
              </Col>
              <Col md={6} xs={12} className="align-self-center grid ">
                <img src="./img/1.png" className={display != 0 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
                <img src="./img/2.png" className={display != 1 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
                <img src="./img/3.png" className={display != 2 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
                <img src="./img/4.png" className={display != 3 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
                <img src="./img/5.png" className={display != 4 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
                <img src="./img/6.png" className={display != 5 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
                <img src="./img/7.png" className={display != 6 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
                <img src="./img/8.png" className={display != 7 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
                <img src="./img/9.png" className={display != 8 ? "md:tw-block tw-hidden slider-thumbnail opacity" : "md:tw-block tw-hidden slider-thumbnail"} />
              </Col>
            </Row>
            <Row className="story md:tw-p-16 md:tw-mt-0 tw-p-4 md:tw-m-12 tw-m-0 " >
              <Col md={12} xs={12} className="align-self-center  tw-mb-4">
                <p className='tw-text-left heading-2  md:tw-mt-0 tw-mt-4'>
                  {content_json.title_2}
                </p>
              </Col>
              <Col md={12} xs={12}>
                <p className='tw-text-left md:tw-leading-relaxed md:tw-text-xl tw-text-xl lg:tw-pt-0 tw-pt-4'>
                  {content_json.content_2_1} </p>
                <p className='tw-text-left md:tw-leading-relaxed md:tw-text-xl tw-text-xl'>
                  {content_json.content_2_2} </p>
              </Col>
            </Row>
            <Row className="story md:tw-p-16 md:tw-mt-0 tw-p-4 md:tw-m-12 tw-m-12 " >
              <Col md={12} xs={12} className="align-self-center  tw-mb-4">
                <p className='tw-text-left heading-2  md:tw-mt-0 tw-mt-4'>
                  {content_json.title_3}
                </p>
              </Col>
              <Col md={12} xs={12}>
                <p className='tw-text-left md:tw-leading-relaxed md:tw-text-xl tw-text-xl lg:tw-pt-0 tw-pt-4'>
                  {content_json.content_3_1}</p>
                <p className='tw-text-left md:tw-leading-relaxed md:tw-text-xl tw-text-xl'>
                  {content_json.content_3_2}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Joshiryoku
