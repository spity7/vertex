"use client";

import { useState, useEffect } from "react";
import { useGlobalContext } from "@/src/context/GlobalContext";

const ServicesSection = () => {
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

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {/* services */}
      <section className="mil-soft-bg mil-relative">
        <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />

          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-90">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: "Our Services" }}
                />
                <h2
                  className="mil-upper mil-up"
                  dangerouslySetInnerHTML={{ __html: "What We Offer" }}
                />
              </div>
            </div>

            {services.map((item, key) => (
              <div key={`services-item-${key}`} className="col-lg-4">
                <div className="mil-service-card mil-up mil-mb-30">
                  <div className="mil-card-number">{key + 1}</div>
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
    </>
  );
};

export default ServicesSection;
