import React, { useState } from "react";
import "../styles/about.css";
import Footer from "../Components/footer";
import axios from "axios";
import { BackendURL } from "../BackendContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Contact_Us from "../assets/contact_us.jpg";
import CustomButton from "../Components/CustomButton";
import { Helmet } from "react-helmet-async"; // 👈 SEO helmet

const ContactUs = () => {
  const URL = BackendURL();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState({
    guardianName: "",
    childName: "",
    phoneNo: "",
    email: "",
    subject: "",
    message: ""
  });

  // ✅ Handle form input
  const handleChange = (eventTriggered) => {
    const { name, value } = eventTriggered.target;
    setQuery({
      ...query,
      [name]: value
    });
  };

  // ✅ Send form data to backend
  const SendQuery = () => {
    setLoading(true);
    axios
      .post(`${URL}/api/queries/send-query`, query)
      .then((response) => {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => {
        console.error("Getting error in sending query: ", error);
        toast.error(error?.response?.data?.error);
        setTimeout(() => {
          navigate(0);
        }, 2500);
      })
      .finally(() => setLoading(false));
  };

  return (
    <React.Fragment>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | My Therapy Space - Pediatric Therapy in Australia</title>
        <meta
          name="description"
          content="Get in touch with My Therapy Space for pediatric speech therapy, occupational therapy, dietitian services, and early intervention support in Australia. Contact our friendly team today."
        />
        <meta
          name="keywords"
          content="contact pediatric therapy, speech therapy contact, occupational therapy clinic Australia, pediatric dietitian near me, early intervention services Australia, My Therapy Space contact"
        />
      </Helmet>

      <div className="main-box bg-[#E0F4F5] gap-12 items-center">
        {/* ✅ Header Section with Keywords */}
        <header className="w-full px-16 max-sm:px-8 flex flex-col gap-4 mt-32 max-sm:mt-24">
          <h1 className="font-serif text-[#0BAFA6] text-4xl max-sm:text-3xl capitalize">
            Contact My Therapy Space
          </h1>
          <p className="font-serif text-center text-black text-xl max-sm:text-sm">
            If you would like to refer your child for{" "}
            <strong>speech therapy, occupational therapy, or dietitian services</strong>,
            please enter your details below or visit our clinic. Our friendly staff
            will guide you through the <strong>referral process</strong>.
          </p>
        </header>

        {/* ✅ Contact Form Section */}
        <section className="w-[90%] max-sm:w-full flex justify-between items-stretch border border-black-100 shadow-md rounded-xl bg-white">
          {/* Left Image */}
          <div className="w-1/2 max-sm:hidden">
            <img
              src={Contact_Us}
              alt="Child receiving pediatric therapy at My Therapy Space"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          {/* Right Form */}
          <form
            className="w-1/2 max-sm:w-full flex flex-col gap-12 px-8 py-8 text-black"
            onSubmit={(e) => {
              e.preventDefault();
              SendQuery();
            }}
          >
            <span className="font-serif uppercase text-2xl">Contact Details</span>

            <div className="w-full flex justify-between">
              <input
                className="contact-inputs"
                type="text"
                placeholder="Guardian Name"
                name="guardianName"
                value={query.guardianName}
                onChange={handleChange}
                required
              />
              <input
                className="contact-inputs"
                type="text"
                placeholder="Child Name"
                name="childName"
                value={query.childName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full flex justify-between">
              <input
                className="contact-inputs"
                type="text"
                placeholder="Phone"
                name="phoneNo"
                value={query.phoneNo}
                onChange={handleChange}
                required
              />
              <input
                className="contact-inputs"
                type="email"
                placeholder="Email"
                name="email"
                value={query.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full flex justify-between">
              <input
                className="contact-inputs"
                type="text"
                placeholder="Subject"
                name="subject"
                value={query.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-serif text-gray-400 text-base capitalize">
                Message
              </label>
              <textarea
                className="w-full h-40 border-2 border-gray-400 rounded-xl p-4 bg-transparent"
                name="message"
                value={query.message}
                onChange={handleChange}
                placeholder="Tell us about your child’s therapy needs (speech, occupational, dietitian, or early intervention)..."
                required
              />
            </div>

            <CustomButton onClick={SendQuery} disabled={loading}>
              {loading ? (
                <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" />
              ) : (
                "Send"
              )}
            </CustomButton>
          </form>
        </section>

        {/* ✅ Referral Process Section */}
        <section className="w-full max-w-3xl mx-auto py-8 px-4 flex flex-col gap-6 bg-white rounded-2xl shadow-lg text-black">
          <h2 className="font-serif text-[#0BAFA6] text-3xl text-center">
            Our Referral Process for Pediatric Therapy
          </h2>

          <div className="flex flex-col gap-4 mt-6">
            {[
              "Referral received via website, phone, or in person",
              "Complete an intake form about your child’s therapy needs (speech, dietitian, occupational)",
              "Directors review the form and match your child with the right therapist",
              "If seeing one therapist: booked in or added to waitlist",
              "Some families may have an intake meeting to set goals and plan therapy",
              "Appointments are booked and therapy begins",
              "Goals reviewed every 6–12 months to track progress"
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-[#e0f7f6] transition cursor-pointer"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0BAFA6] to-[#00C9A7] text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-base font-serif">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
