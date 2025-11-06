"use client";

import { Formik } from "formik";
import AppData from "@data/app.json";

const ContactForm = ({ subtitleOffset }) => {
  return (
    <>
      {/* contact form */}
      <Formik
        initialValues={{
          email: "",
          name: "",
          tel: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const form = document.getElementById("contactForm");
          const status = document.getElementById("contactFormStatus");
          const data = new FormData();

          data.append("name", values.name);
          data.append("email", values.email);
          data.append("tel", values.tel);
          data.append("message", values.message);

          status.style.display = "block";
          status.innerHTML = ""; // clear previous messages

          try {
            const response = await fetch(form.action, {
              method: "POST",
              body: data,
              headers: { Accept: "application/json" },
            });

            if (response.ok) {
              status.innerHTML =
                "<h5>Thanks, your message is sent successfully.</h5>";

              // ✅ Reset all fields
              resetForm();
            } else {
              const data = await response.json();
              status.innerHTML = `<h5>${
                data.error || "Oops! Something went wrong."
              }</h5>`;
            }
          } catch (error) {
            status.innerHTML =
              "<h5>Oops! There was a problem submitting your form</h5>";
          }

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            id="contactForm"
            action="/api/contact"
            className={
              subtitleOffset
                ? "mil-mt-suptitle-offset mil-mb-90 cform"
                : "mil-mb-90 cform"
            }
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper">
                    <span>Full Name</span>
                    <span className="mil-required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name Here"
                    name="name"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper">
                    <span>Email address</span>
                    <span className="mil-required">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Here"
                    name="email"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper">
                    <span>Phone</span>
                    <span className="mil-required">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Here"
                    name="tel"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper">
                    <span>Message</span>
                    <span className="mil-required">*</span>
                  </label>
                  <textarea
                    placeholder="Enter Your Name Here"
                    name="message"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="mil-button mil-up"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Now"}
                </button>
              </div>
            </div>
            <div
              className="form-status alert-success mil-mb-90"
              id="contactFormStatus"
            />
          </form>
        )}
      </Formik>
      {/* contact form end */}
    </>
  );
};
export default ContactForm;
