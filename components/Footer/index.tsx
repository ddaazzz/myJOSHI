import React, { useState } from 'react';
import Link from 'next/link';
/* import { Link } from 'react-router-dom'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <footer className="bg-3 ">
            <div className="tw-w-full  tw-max-h-auto  tw-py-2 tw-flex-row  tw-flex  tw-items-center  tw-justify-between">
                <div className="tw-flex tw-flex-col  tw-items-center tw-justify-center">
                    <img src="img/logo.png" style={{ maxWidth: '150px' }} />
                </div>
                <span className='tw-px-3 md:tw-px-12  md:tw-block '>
                    <Link href="https://x.com/myjoshiofficial/"><a className="fab-icon-bg tw-mr-6 tw-my-6"><FontAwesomeIcon icon={["fab", "twitter"]} /></a></Link>
                    <Link href="/"><a className="fab-icon-bg tw-mr-6 tw-my-6"><FontAwesomeIcon icon={["fab", "discord"]} /></a></Link>
                    <Link href="https://www.instagram.com/myjoshiofficial/"><a className="fab-icon-bg tw-my-6"><FontAwesomeIcon icon={["fab", "instagram"]} /></a></Link>
                    <p className='heading-color tw-text-right'  >@All Rights Reserved</p>
                </span>

            </div>
        </footer>
    );
}
export default Footer;
