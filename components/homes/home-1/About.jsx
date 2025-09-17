"use client";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import ModalVideo from "react-modal-video";
import { useState } from "react";
export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        id="about"
        className="about-section fix section-padding scrollSpySection"
      >
        <div className="about-shape-1 float-bob-x">
          <Image
            src="/assets/img/about/about-shape-1.png"
            width={114}
            height={419}
            alt="img"
          />
        </div>
        <div className="about-shape-2 float-bob-x">
          <Image
            src="/assets/img/about/about-shape-2.png"
            width={318}
            height={408}
            alt="img"
          />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <Image
                    src="/assets/img/about/01.jpg"
                    alt="img"
                    width={485}
                    height={592}
                    className="wow fadeInLeft"
                    data-wow-delay=".2s"
                  />
                  {/* <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <Image
                      src="/assets/img/about/02.jpg"
                      width={260}
                      height={270}
                      alt="img"
                    />
                    <div className="video-box">
                      <a
                        onClick={() => setOpen(true)}
                        className="video-btn video-popup"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div> */}
                  <div className="about-line-shape">
                    <Image
                      src="/assets/img/about/about-shape-3.png"
                      width={30}
                      height={545}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long"></i>2020
                      Vertex
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </h6>
                    <h2 className="splt-txt wow">
                      <AnimatedText text="Why Us?" />
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    At Vertex, we understand that choosing the right
                    electro-mechanical partner is critical to the success of
                    your projects. Here’s why our clients trust us:
                  </p>
                  <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Expertise: End-to-end solutions in design, contracting,
                      automation, and solar.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Experience: Since 2020, successful projects across
                      industries.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Quality: Durable, safe, and efficient systems built to
                      standards.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Innovation: Cutting-edge, sustainable technologies and
                      practices.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Clients: Transparent, goal-driven, and collaborative
                      approach.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Global Standards: Local presence in Tyre with
                      international quality.
                    </li>
                  </ul>
                  {/* <div className="about-author">
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <Image
                        src="/assets/img/about/author.png"
                        width={68}
                        height={68}
                        alt="author-img"
                      />
                      <div className="content">
                        <p>Xbuild, CEO</p>
                        <h4>Brooklyn Simmons</h4>
                      </div>
                    </div>
                    <Image
                      src="/assets/img/about/signature.png"
                      alt="img"
                      width={85}
                      height={51}
                      className="wow fadeInUp"
                      data-wow-delay=".4s"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Cn4G2lZ_g2I"
        onClose={() => setOpen(false)}
      />{" "} */}
    </>
  );
}
