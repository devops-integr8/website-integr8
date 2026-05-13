"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const industries = [
  "Production/Manufacturing",
  "Lending",
  "Construction",
  "HOA",
  "Manpower Agency",
  "Cooperatives",
  "Lease Management",
  "Trading",
  "Real Estate",
  "Commissary",
  "Restaurant",
  "E-Commerce",
  "Brokerage",
  "Importation",
  "Service Providers",
  "Other",
];

const inputClass =
  "w-full rounded-lg bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-black/40 focus:ring-2 focus:ring-white/60 transition";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    industry: "",
    customIndustry: "",
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [emailError, setEmailError] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.name === "email") setEmailError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectIndustry = (value: string) => {
    setForm((prev) => ({ ...prev, industry: value, customIndustry: "" }));
    setDropdownOpen(false);
  };

  const handleSubmit = async () => {
    const industryValue =
      form.industry === "Other" ? form.customIndustry : form.industry;

    if (
      !form.name ||
      !form.company ||
      !form.email ||
      !industryValue ||
      !form.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // ✅ Email validation lives here, inside handleSubmit
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");

    setStatus("sending");

    try {
      const res = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          industry: industryValue,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          company: "",
          email: "",
          industry: "",
          customIndustry: "",
          message: "",
        });
      } else {
        console.error("API error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/contact-us/Contactsbg2.jpg')" }}
    >
      {/* Form Card */}
      <div
        className="w-full max-w-xl rounded-lg px-10 py-12"
        style={{ background: "linear-gradient(to bottom, #0437f2, #02208c)" }}
      >
        {/* Heading */}
        <h2 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">
          We&apos;d Love To Hear From You
        </h2>

        {/* Subtitle */}
        <p className="text-white font-normal text-sm text-center mb-8">
          Let&apos;s talk about your business needs
        </p>

        {/* Fields */}
        <div className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your name*"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="company"
            type="text"
            placeholder="Your company name*"
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="email"
            type="email"
            placeholder="Your company email*"
            value={form.email}
            onChange={handleChange}
            className={`${inputClass} ${emailError ? "ring-2 ring-red-400" : ""}`}
          />
          {emailError && (
            <p className="text-red-300 text-xs -mt-2 ml-1">{emailError}</p>
          )}

          {/* Custom Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`w-full rounded-lg bg-white px-4 py-3 text-sm text-left flex items-center justify-between outline-none focus:ring-2 focus:ring-white/60 transition cursor-pointer ${
                form.industry ? "text-black" : "text-black/40"
              }`}
            >
              <span>{form.industry || "Select your type of industry*"}</span>
              <ChevronDown
                className={`w-4 h-4 text-black/50 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <ul className="absolute top-full left-0 w-full mt-1 bg-white rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto border border-gray-100">
                {industries.map((industry) => (
                  <li
                    key={industry}
                    onClick={() => handleSelectIndustry(industry)}
                    className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-blue-50 transition ${
                      form.industry === industry
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-black"
                    }`}
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Custom industry input when "Other" is selected */}
          {form.industry === "Other" && (
            <input
              name="customIndustry"
              type="text"
              placeholder="Please specify your industry*"
              value={form.customIndustry}
              onChange={handleChange}
              className={inputClass}
            />
          )}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Share your inquiries/concerns*"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Status messages */}
        {status === "success" && (
          <p className="text-green-300 text-sm text-center mt-4">
            ✅ Inquiry sent successfully
          </p>
        )}
        {status === "error" && (
          <p className="text-red-300 text-sm text-center mt-4">
            ❌ Something went wrong. Please check your SMTP settings in
            .env.local.
          </p>
        )}

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="bg-white text-[#0437f2] font-bold text-sm px-10 py-3 rounded-lg hover:bg-blue-50 transition disabled:opacity-60 cursor-pointer"
          >
            {status === "sending" ? "SENDING..." : "SEND INQUIRY"}
          </button>
        </div>
      </div>
    </section>
  );
}
