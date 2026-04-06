"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Paul Andrew Santa Maria",
    position: "President",
    department: "President",
    image: "/images/our-team/PaulAndrewSantamaria.png",
  },
  {
    id: 2,
    name: "Mikko Crizaldo",
    position: "IT Director",
    department: "IT Directors",
    image: "/images/our-team/Crizaldo.png",
  },
  {
    id: 3,
    name: "Anjomarc Topacio",
    position: "IT Director",
    department: "IT Directors",
    image: "/images/our-team/Topacio.png",
  },
  {
    id: 4,
    name: "Randel Crusem",
    position: "Operations Manager",
    department: "Operations",
    image: "/images/our-team/Crusem.png",
  },
  {
    id: 5,
    name: "Ric Christian Billote",
    position: "Asst. Operations Manager",
    department: "Operations",
    image: "/images/our-team/Billote.png",
  },
  {
    id: 6,
    name: "Arjay Capili",
    position: "Asst. Operations Manager",
    department: "Operations",
    image: "/images/our-team/Capili.png",
  },
  {
    id: 7,
    name: "Rico Salazar",
    position: "Lead Dev Ops Engineer",
    department: "Dev Ops",
    image: "/images/our-team/Salazar.png",
  },
  {
    id: 8,
    name: "Zennavie Barongrong",
    position: "Sales Manager",
    department: "Sales & Marketing",
    image: "/images/our-team/Barongrong.png",
  },
  {
    id: 9,
    name: "Jackie Lou Cadlum",
    position: "Asst. Team Leader - Sales",
    department: "Sales & Marketing",
    image: "/images/our-team/Cadlum.png",
  },
  {
    id: 10,
    name: "Mark Jhordan Hayag",
    position: "Sales Associate",
    department: "Sales & Marketing",
    image: "/images/our-team/Hayag.png",
  },
  {
    id: 11,
    name: "Lourence Alec Indon",
    position: "Sales Associate",
    department: "Sales & Marketing",
    image: "/images/our-team/Indon.png",
  },
  {
    id: 12,
    name: "King Emaru Alfaro",
    position: "Sales Associate",
    department: "Sales & Marketing",
    image: "/images/our-team/Alfaro.png",
  },
  {
    id: 13,
    name: "Joemari Galisim",
    position: "Sales Associate",
    department: "Sales & Marketing",
    image: "/images/our-team/Galisim.png",
  },
];

type TeamMember = {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
};

const departments = [
  "President",
  "IT Directors",
  "Dev Ops",
  "Operations",
  "Sales & Marketing",
];

export default function OurTeam() {
  const [activeFilter, setActiveFilter] = useState("President");
  const [tappedId, setTappedId] = useState<number | null>(null);

  const filteredMembers = teamMembers.filter(
    (member) => member.department === activeFilter,
  );

  function TeamMemberCard({ member }: { member: TeamMember }) {
    const isTapped = tappedId === member.id;

    const handleTap = () => {
      if (window.matchMedia("(hover: none)").matches) {
        setTappedId(isTapped ? null : member.id);
      }
    };

    return (
      <div
        className="group relative overflow-hidden rounded-xl shadow-md shadow-2xl shadow-black/50 cursor-pointer"
        onClick={handleTap}
      >
        {/* --- THE PHOTO --- */}
        <div className="aspect-[3/4] w-full">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* DESKTOP HOVER OVERLAY (CSS only, hidden on mobile) */}
        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#0437f2]/80 via-blue-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex-col justify-end p-4 pointer-events-none">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <p className="text-white font-bold text-lg leading-tight">
              {member.name}
            </p>
            <p className="text-blue-200 font-bold text-sm mt-1">
              {member.position}
            </p>
          </div>
        </div>

        {/* --- MOBILE TAP OVERLAY --- */}
        <motion.div
          className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0437f2]/80 via-blue-700/20 to-transparent flex flex-col justify-end p-4"
          initial={{ y: "100%" }}
          animate={{ y: isTapped ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white font-bold text-lg leading-tight">
            {member.name}
          </p>
          <p className="text-blue-200 font-bold text-sm mt-1">
            {member.position}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-10 tracking-wide uppercase"
          style={{
            textShadow:
              "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
          }}
        >
          Our Team
        </h2>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center mb-12 px-2">
          <div className="inline-flex bg-gradient-to-b from-[#0437f2] to-[#224d9a] rounded-full p-2 px-3 gap-2 flex-wrap justify-center shadow-md shadow-2xl shadow-black/50">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={`
                  px-4 py-2 sm:min-w-[140px] lg:min-w-[180px] rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap
                  ${activeFilter === dept ? "bg-white text-blue-900 shadow" : "text-white hover:bg-white/20"}
                `}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* TEAM CARDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
