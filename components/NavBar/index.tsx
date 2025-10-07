import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from "next/router";
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const { locale, locales } = useRouter();
  const [showSwitcher, setShowSwitcher] = useState(false);
  return (
    <Navbar expand="xl" expanded={expanded} className=" tw-px-3 md:tw-px-3 navbar" collapseOnSelect={true} >
      <Link href="/">
        <a className="tw-flex tw-flex-col  tw-items-center tw-justify-start ">{/* xl: tw-absolute tw-relative */}
          <img src="img/logo.png" style={{ maxWidth: '150px' }} />
        </a>
      </Link>
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
      <Navbar.Collapse className="justify-content-center mobile-blur tw-container tw-mx-auto">

        <div className='tw-w-full  tw-max-h-auto  tw-py-2 md:tw-flex-row tw-flex-col  tw-flex  tw-items-center  tw-justify-center'>
          <div className="border-right-nav nav-item"><Link href="/" ><a className="nav-link" onClick={() => setExpanded(false)}>{locale === "en-US" ? "Home" : "トップ"}</a></Link></div>
          <div className="border-right-nav nav-item"><Link href="/joshiryoku" ><a className="nav-link" onClick={() => setExpanded(false)}>{locale === "en-US" ? "Joshiryoku" : "女子力クラブ"}</a></Link></div>
          <div className="border-right-nav nav-item"><Link href="/roadmap"><a className="nav-link" onClick={() => setExpanded(false)}>{locale === "en-US" ? "Roadmap" : "ロードマップ"}</a></Link></div>
          <div className="border-right-nav nav-item"><Link href="/team"><a className="nav-link" onClick={() => setExpanded(false)}>{locale === "en-US" ? "Meet the Team" : "チームに会う"}</a></Link></div>
          <div className="border-right-nav nav-item"><Link href="/contestants"><a className="nav-link" onClick={() => setExpanded(false)}>{locale === "en-US" ? "Contestants" : "出場者"}</a></Link></div>
          <div className="nav-item"><Link href="/faq"><a className="nav-link" onClick={() => setExpanded(false)}>{locale === "en-US" ? "FAQ" : "よくある質問"}</a></Link></div>

        </div>
        <div className="nav-item dropdown">
          <Link href={""} >
            <a className="nav-link tw-text-center" onClick={() => setShowSwitcher(!showSwitcher)}>
              <img src="/img/globe.png" className="tw-inline" style={{ width: "1.8rem" }} />
            </a>
          </Link>


          {showSwitcher && <div className="dropdown-content">
            {locales?.map((l, i) => {
              return (
                <span key={i} className={l === locale ? "selected-locale nav-link locale" : "nav-link locale"}>
                  <Link href={""} locale={l}>
                    {l === "en-US" ? "EN" : "日"}
                  </Link>
                </span>
              );
            })}
          </div>
          }
        </div>


      </Navbar.Collapse>

    </Navbar >
  );
}
export default NavBar;
