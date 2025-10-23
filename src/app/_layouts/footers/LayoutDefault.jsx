"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
      {/* footer */}
      <footer className="mil-relative">
        <img
          src="/img/photo/1 copy.jpg"
          className="mil-bg-img mil-parallax"
          alt="image"
          style={{ objectPosition: "top" }}
          data-value-1="-25%"
          data-value-2="23%"
        />

        <div className="mil-overlay" />
        <div className="container mil-p-120-90">
          <div className="mil-background-grid" />

          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="mil-footer-navigation mil-up mil-mb-90">
                    <nav>
                      <ul>
                        {AppData.footer.menu.map((item, key) => (
                          <li
                            key={`footer-menu-item-${key}`}
                            className={
                              (asPath.indexOf(item.link) != -1 &&
                                item.link != "/") ||
                              asPath == item.link
                                ? "mil-active"
                                : ""
                            }
                          >
                            <Link href={item.link}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    Email :
                  </span>
                  <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                    info@vertex-engineering.co
                    {/* 8619 S Wolcott Avenue <br />
                    Floor 202 <br />
                    Chicago, IL 60620 <br />
                    (773) 238 - 7162 */}
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    Phone :
                  </span>
                  <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                    +961 70063194 <br />
                    +961 03935124 <br />
                    +961 70830139
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-5">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    Location :
                  </span>
                  <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                    <img
                      src="/img/flags/128px-Flag_of_Lebanon.svg.png"
                      alt="Lebanon flag"
                      style={{
                        width: "20px",
                        height: "14px",
                        marginRight: "6px",
                        display: "inline",
                        verticalAlign: "middle",
                      }}
                    />
                    Head Office: Tyre, Jal El Baher Center Dakhlalah, 4th Floor
                    <br />
                    <img
                      src="/img/flags/128px-Flag_of_Lebanon.svg.png"
                      alt="Lebanon flag"
                      style={{
                        width: "20px",
                        height: "14px",
                        marginRight: "6px",
                        display: "inline",
                        verticalAlign: "middle",
                      }}
                    />
                    Panel Boards Factory: Tyre, Near LDC Laboratory
                    Center Badawi, GF
                  </p>
                </div>
                {/* <div className="col-md-6 col-lg-6 col-xl-3">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    Harriman
                  </span>
                  <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                    5 Harriman Woods Dr <br />
                    Suite 702 <br />
                    New York, NY 10926 <br />
                    (570) 253 - 2853
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    Largo
                  </span>
                  <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                    1071 Donegan Rd <br />
                    Suite 1300 <br />
                    Florida, FL 33771 <br />
                    (727) 223 - 5371
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4">
              <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                <img
                  src={AppData.footer.logo.image}
                  alt={AppData.footer.logo.alt}
                  style={{ width: "130px" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="mil-footer-bottom">
            <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
            <ul className="mil-light-soft mil-mb-15">
              {AppData.social.map((item, key) => (
                <li key={`footer-social-item-${key}`}>
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mil-light-soft mil-mb-15">
              <li>
                <a href="#.">Our App</a>
              </li>
              <li>
                <a href="#.">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
