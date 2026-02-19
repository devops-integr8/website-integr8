const testimonials = [
  {
    id: 1,
    quote:
      "To improve a company's workflows, help reduce costs, time, and waste as well as increase productivity, reduce mistakes, and control all the processes of the business in real time. Continuous research and development to provide Clients with updated and valuable Digital Products tailor fit for their unique business processes.",
    title: "Process Improvement and Cost Savings",
  },
  {
    id: 2,
    quote:
      "Support Clients to enable smooth migration and automation. Provide training users and help them become accustomed to computerized systems.",
    title: "Smooth Migration and Training",
  },
  {
    id: 3,
    quote:
      "This involves deploying tools and technologies that enhance the organization&apos;s visibility into where its critical data resides and how it is used. Ideally, these tools should be able to apply protections like encryption, data masking, and redaction of sensitive files, and should automate reporting to streamline audits and adhering to regulatory requirements.",
    title: "Safety and Security",
  },
];

export default function Goals() {
  return (
    <div className="px-16">
      <h3 className="capitalize text-3xl lg:text-4xl text-center font-bold mb-2">
        Our Goals
      </h3>
      <div className="w-full flex flex-row gap-x-4 border">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-1/3 flex flex-col gap-y-4">
            <h4>{testimonial.title}</h4>
            <p>{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
