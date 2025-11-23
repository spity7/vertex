"use client";

import React, { Suspense, useState, useEffect } from "react";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import VisionSection from "@components/sections/Vision";
import FeaturesTwoSection from "@components/sections/FeaturesTwo";
import AboutFourSection from "@components/sections/AboutFour";
import CallToActionSection from "@components/sections/CallToAction";
import { useGlobalContext } from "@/src/context/GlobalContext";

function Services() {
  const { getAllServices } = useGlobalContext();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices(); // ✅ call the async function
        setServices(data);
      } catch (err) {
        console.error("Error loading services:", err);
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [getAllServices]);

  if (error) return <div>{error}</div>;

  return (
    <>
      <PageBanner
        pageTitle={"Our Services"}
        breadTitle={"Services"}
        bgImage={"/img/photo/20251015_111400.jpg"}
      />

      {/* services */}
      <section>
        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />

          {/* <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mil-center mil-mb-120">
                <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                  Modern concept
                </span>
                <p className="mil-text-lg mil-up">
                  Ruizarch we are a leader in architecture and design with a
                  user-centric approach and deep technical expertise. We are
                  consistently ranked as one of the top 10 architecture firms in
                  the world, and our core disciplines are supported by a wide
                  range of complementary services, all of which have a singular
                  goal: to build environments where our clients thrive.
                </p>
              </div>
            </div>
          </div> */}

          <div className="mil-center mil-mb-90">
            <span className="mil-suptitle mil-upper mil-up mil-mb-30">
              On This We Work
            </span>
            <h2 className="mil-upper mil-up">Exclusive Services</h2>
          </div>

          <div className="row">
            {services.map((item, key) => (
              <div className="col-lg-4 mil-up" key={`services-item-${key}`}>
                <div className="mil-service-card mil-mb-30">
                  <div className="mil-card-number">
                    {key < 10 ? "0" + (key + 1) + "." : key + 1 + "."}
                  </div>
                  <div className="mil-center">
                    <div className="mil-icon mil-icon-lg mil-mb-30">
                      <img src={item.iconUrl} alt={item.name} />
                    </div>
                    <h4 className="mil-upper mil-mb-20">{item.name}</h4>
                    <div className="mil-divider-sm mil-mb-20" />
                    <p
                      className="mil-service-text"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                      <img src="/img/icons/1.svg" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* services end */}

      {/* <VisionSection /> */}

      <FeaturesTwoSection />

      {/* <AboutFourSection /> */}

      <CallToActionSection />
    </>
  );
}
export default Services;
