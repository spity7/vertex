import React, { Suspense } from "react";
import PageBannerTwo from "@components/PageBannerTwo";

export const dynamic = "force-dynamic"; // ensures it always fetches fresh data

async function getProject(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
    cache: "no-store", // disable caching for live data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch project data");
  }

  const { project } = await res.json();
  return project;
}

async function ProjectDetail({ params }) {
  const { id } = params;
  const project = await getProject(id);

  console.log("Project data: " + project.gallery);

  return (
    <>
      <PageBannerTwo
        subTitle={[project.category + "<br />" + project.location]}
        title={project.name}
        bgImage={project.thumbnailUrl}
      />

      {/* description */}
      <section>
        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{
                    __html: project.name,
                  }}
                />
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{
                    __html: project.title,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-7 mil-mt-suptitle-offset">
              <div
                className="mil-text mil-up mil-mb-30"
                dangerouslySetInnerHTML={{
                  __html: project.description,
                }}
              />
              <ul className="mil-list mil-up mt-5">
                <li>
                  <strong>Category: </strong> {project.category}
                </li>
                <li>
                  <strong>Location: </strong> {project.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* description end */}

      <div className="container">
        <div className="mil-divider-lg" />
      </div>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mil-p-120-0">
                <div className="mil-center mil-mb-90">
                  <span
                    className="mil-suptitle mil-upper mil-up mil-mb-30"
                    dangerouslySetInnerHTML={{ __html: project.name }}
                  />
                  <h2
                    className="mil-upper mil-up"
                    dangerouslySetInnerHTML={{ __html: "Our Gallery" }}
                  />
                </div>
              </div>
              {project.gallery.map((imgUrl, index) => (
                <div
                  className="col-md-6 col-lg-6"
                  key={`projects-row-${index}`}
                >
                  <div
                    key={`projects-item-${index}`}
                    className={
                      "mil-portfolio-item mil-square-item mil-up mil-mb-30"
                    }
                  >
                    <img src={imgUrl} alt={"j"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default ProjectDetail;
