import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

const Contact = () => {
  return (
    <>
      <PageBanner
        pageTitle={"We’d love to talk"}
        breadTitle={"Contact"}
        bgImage={
          "/img/photo/WhatsApp Image 2025-11-03 at 22.13.25_422237c8.jpg"
        }
      />

      {/* about */}
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">Info Contact</h2>
                <p className="mil-up mil-mb-40">
                  Get in touch with Vertex for inquiries, collaborations, or
                  project consultations. Our team is ready to provide expert
                  guidance and tailored electro-mechanical solutions that meet
                  your needs with precision and reliability.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mil-relative">
              <div className="mil-contact-sidebar">
                <img
                  src="img/photo/WhatsApp Image 2025-11-03 at 22.14.54_a909efad.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "0 -60px",
                  }}
                  className="mil-mb-30"
                />

                <div className="mil-sidebar-info">
                  <h6 className="mil-upper mil-up mil-mb-30">Headquarters</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>Tyre, Jal El Baher Center Dakhlalah, 4th Floor</li>
                    <li>Tyre, Near LDC Laboratory Center Badawi, GF</li>
                    {/* <li>Suite 300 NY, NY 80202</li> */}
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>+961 70 063 194</li>
                    <li>+961 03 935 124</li>
                    <li>+961 70 830 139</li>
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                  <ul className="mil-list mil-dark mil-up">
                    <li>info@vertex-engineering.com</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4">
                  <div className="mil-up mil-mb-60">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                      Wills Point
                    </span>
                    <p className="mil-up">
                      10233 Gaillard Lake Est <br />
                      Suite 420 <br />
                      Houston, TX 75169 <br />
                      (903) 560 - 9830
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mil-up mil-mb-60">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                      Chicago
                    </span>
                    <p className="mil-up">
                      10233 Gaillard Lake Est <br />
                      Suite 420 <br />
                      Houston, TX 75169 <br />
                      (903) 560 - 9830
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mil-up mil-mb-60">
                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                      Harriman
                    </span>
                    <p className="mil-up">
                      10233 Gaillard Lake Est <br />
                      Suite 420 <br />
                      Houston, TX 75169 <br />
                      (903) 560 - 9830
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* about end */}

      {/* map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3335.4510800993535!2d35.216626975683695!3d33.28086017345711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE2JzUxLjEiTiAzNcKwMTMnMDkuMSJF!5e0!3m2!1sen!2slb!4v1762360177077!5m2!1sen!2slb"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* map end */}

      {/* contact */}
      <section className="mil-relative">
        <div className="container mil-p-120-30">
          <div className="mil-background-grid mil-softened"></div>
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">
                  We’d Love to Hear From You
                </h2>
                <p className="mil-up mil-mb-30">
                  Have a project in mind or a question about our services? Reach
                  out to the Vertex team — we’re here to discuss your needs and
                  provide expert guidance on electrical, mechanical, automation,
                  or solar engineering solutions.
                </p>
                <div className="mil-divider-lg mil-up mil-mb-30"></div>
                <p className="mil-up mil-mb-30">
                  Interested in joining our team? Explore career opportunities
                  and grow with Vertex.
                </p>
                <div className="mil-up">
                  <div className="mil-link mil-upper">
                    Join Us{" "}
                    <span className="mil-arrow">
                      <img src="/img/icons/1.svg" alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
    </>
  );
};
export default Contact;
