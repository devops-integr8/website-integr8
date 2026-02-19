const members = [
  {
    name: "Paul Andrew Santamaria",
    role: "President",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Mikko Crizaldo",
    role: "IT Director",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Anjomarc Topacio",
    role: "IT Director",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Jeshua Mark Bay",
    role: "Software Improvement Engineer",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Randel Crusem",
    role: "Operations Manager",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Irish Mae Dela Rea",
    role: "QA Engineer",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Ric Christian Bilote",
    role: "Assistant Operations Manager",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Arjay Capili",
    role: "Assistant Operations Manager",
    avatar: "https://placehold.co/400?text=Image+here",
  },
];

const devOps = [
  {
    name: "Paul Andrew Santamaria",
    role: "President",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Mikko Crizaldo",
    role: "IT Director",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Anjomarc Topacio",
    role: "IT Director",
    avatar: "https://placehold.co/400?text=Image+here",
  },
];

const researchDevelopment = [
  {
    name: "Jason Castillon",
    role: "Development Engineer 2",
    avatar: "https://placehold.co/400?text=Image+here",
  },
];

const salesMarketing = [
  {
    name: "Zennavie Barongrong",
    role: "Sales Manager",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Jackie Lou Cadlum",
    role: "Assistant Team Leader",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Mark Jhordan Hayag",
    role: "Sales Associate",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "Lourence Alec Indon",
    role: "Sales Associate",
    avatar: "https://placehold.co/400?text=Image+here",
  },
  {
    name: "King Emaru Alfaro",
    role: "Sales Associate",
    avatar: "https://placehold.co/400?text=Image+here",
  },
];

export default function TeamSection() {
  return (
    <section className="">
      <div className="mx-auto px-8 lg:px-16">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">
          Our team
        </h2>

        <div>
          <h3 className="mb-6 text-lg font-medium">Board of Directors</h3>
          <div className="grid grid-cols-1 gap-4 border-t py-6 md:grid-cols-3">
            {members.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Dev Ops</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {devOps.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Research & Development</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {researchDevelopment.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Sales & Marketing</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-5"
          >
            {salesMarketing.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
