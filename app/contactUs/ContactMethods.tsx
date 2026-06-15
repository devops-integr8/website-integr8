"use client";

import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function ContactMethods() {
  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      line1: "gr8softwaresolutions",
      line2: "@integr8.com.ph",
      link: "",
    },
    {
      icon: Phone,
      title: "Call Sales",
      line1: "Ms. Jackie Cadlum",
      line2: "+639171205043",
      link: "",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      line1: "General Trias,",
      line2: "Cavite, Philippines",
      link: "Get Directions",
    },

  ];

  const salesContacts = [
    {
      name: "Ms. Jackie Cadlum",
      position: "Asst. Team Leader - Sales",
      number: "+639171205043",
    },
    {
      name: "Mr. Lourence Indon",
      position: "Sales Associate",
      number: "+639241642718",
    },
    {
      name: "Mr. Jhordan Hayag",
      position: "Sales Associate",
      number: "+639241642722",
    },
    {
      name: "Mr. Joemari Galisim",
      position: "Sales Associate",
      number: "+639241642717",
    },
    {
      name: "Ms. Patricia Queriado",
      position: "Sales Associate",
      number: "+639241642719",
    },
    {
      name: "Mr. King Alfaro",
      position: "Sales Associate",
      number: "+639925149799",
    },
  ];

  return (
    <section className="h-full w-full px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-[#004A80] text-6xl font-bold mb-3">
            Get In Touch
          </h2>

          <p className="text-[#526173] text-lg">
            Contact our team and discover how GR8 ERP can
            support your business operations.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-12">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[28px]
                  border border-[#004A80]
                  shadow-[0_10px_35px_rgba(0,74,128,0.08)]
                  p-10
                  min-h-[280px]
                  flex
                  flex-col
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#EEF4FF] flex items-center justify-center mb-6">
                  <Icon
                    size={26}
                    className="text-[#1A3BCC]"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#004A80] mb-4">
                  {card.title}
                </h3>

                <p className="text-[#526173] mb-2">
                  {card.line1}
                </p>

                <p className="text-[#526173]">
                  {card.line2}
                </p>

                {card.link && (
                  <button className="mt-auto pt-8 flex items-center gap-2 text-[#1A3BCC] font-semibold hover:gap-3 transition-all">
                    {card.link}
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Sales Contacts */}
        <div className="bg-[#F8FBFF] rounded-[32px] border border-[#004A80] p-10">
          <h2 className="text-3xl font-bold text-[#004A80] mb-2">
         Contacts
          </h2>

          <p className="text-[#526173] mb-8">
            Connect directly with our sales team for inquiries,
            product demonstrations, and consultations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesContacts.map((person) => (
              <div
                key={person.number}
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-[#E8EEF8]
                  p-6
                  shadow-sm
                "
              >
                <h3 className="font-bold text-lg text-[#004A80]">
                  {person.name}
                </h3>

                <p className="text-sm text-[#6B7280] mb-4">
                  {person.position}
                </p>

                <div className="flex items-center gap-2">
                  <Phone
                    size={16}
                    className="text-[#1A3BCC]"
                  />

                  <p className="font-semibold text-[#1A3BCC]">
                    {person.number}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Address */}
        <div className="mt-12 bg-white rounded-[32px] border border-[#004A80] p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-[#004A80] mb-4">
            Office Address
          </h2>

          <p className="text-[#526173] text-lg leading-relaxed max-w-3xl">
            Unit 2A9-2A11 The M Hub, Governor's Drive,
            General Trias, Cavite, Philippines
          </p>
        </div>
      </div>
    </section>
  );
}