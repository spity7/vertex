import { counterItems } from "@/data/facts";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Achievements() {
  return (
    <section
      className="achivements-section fix section-bg-2 section-padding bg-cover"
      style={{ backgroundImage: 'url("/assets/img/achivements-bg-shape.png")' }}
    >
      <div className="container">
        <div className="achivements-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="achivements-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long" />
                    VERTEX
                    <i className="fa-regular fa-arrow-right-long" />
                  </h6>
                  <h2 className="splt-txt wow">
                    <AnimatedText text="Our Values" /> <br />
                    {/* <AnimatedText text="Now Constructing A Dream." /> */}
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp">
                  At Vertex, our values shape every decision, every design, and
                  every project we deliver. They reflect our commitment to
                  engineering excellence and long-term client partnerships.
                </p>
                <div className="row">
                  {counterItems.map((item) => (
                    <div
                      key={item.id}
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay={item.delay}
                    >
                      <div className="counter-items">
                        <div className="content">
                          <div
                            className="icon "
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src={item.iconSrc}
                              style={{ objectFit: "contain" }}
                              width={36}
                              height={36}
                              alt="icon"
                            />
                          </div>
                          <h2>
                            <span
                              className="count"
                              style={{ fontSize: "22px" }}
                            >
                              {item.count}
                            </span>
                            {/* {item.suffix} */}
                          </h2>
                          <p style={{ marginTop: 20 }}>{item.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="achivements-image">
                <Image
                  src="/assets/img/achivements-image.jpg"
                  width={373}
                  height={556}
                  alt="img"
                />
                <div className="achivements-image-2 float-bob-y">
                  <Image
                    src="/assets/img/achivements-image-2.jpg"
                    width={238}
                    height={343}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
