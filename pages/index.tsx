import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "../assets/content.json";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
const Home: NextPage = () => {
    const [display, setDisplay] = useState(0);
    const { locale, locales, asPath } = useRouter();

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

                <div>
                    <video src="/Tree_animation.mp4" playsInline autoPlay loop muted preload={'auto'} className='feature-video'></video>
                </div>

                <Footer />
            </main>
        </>
    )
}

export default Home
