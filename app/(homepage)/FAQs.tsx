"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export default function FAQs() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      question: "How are Integr8 products priced?",
      answer:
        "Integr8 uses a flexible, subscription-based pricing model. Plans vary based on the modules you choose, the number of users, and your deployment type. We offer tailored quotes for enterprise clients. Contact our sales team for a customized proposal.",
    },
    {
      id: "item-2",
      question: "Who is Integr8 designed for?",
      answer:
        "Integr8 is built to scale with your business. Whether you're a small startup, a growing mid-market company, or a large enterprise, our modular platform adapts to your operational complexity, team size, and industry requirements.",
    },
    {
      id: "item-3",
      question: "Is there a free trial available?",
      answer:
        "Yes. Integr8 offers a free demo and a trial period so you can explore the platform before committing. Our onboarding team will walk you through the features most relevant to your business during the trial.",
    },
    {
      id: "item-4",
      question: "What products does Integr8 offer?",
      answer:
        "Integr8 has four main products: Accounting (financial reporting, budgeting, tax compliance), Payroll and HRIS (automated salary processing, government contributions, leave management), Point of Sale (multi-terminal sales, inventory sync, receipts), and ERP (end-to-end business process integration across departments). You can use them individually or as a unified system.",
    },
    {
      id: "item-5",
      question: "What after-sales service does Integr8 offer?",
      answer:
        "All Integr8 customers receive access to our dedicated support team via email, live chat, and phone. Enterprise clients are assigned a dedicated account manager and receive priority support with guaranteed response times.",
    },
    {
      id: "item-6",
      question: "Can I purchase only one module?",
      answer:
        "You can start with a single module and expand over time. Integr8 is designed to be modular — you only pay for what you use. When you're ready to grow, adding modules is seamless and your existing data carries over automatically.",
    },
    {
      id: "item-7",
      question: "How does Integr8 handle data security and compliance?",
      answer:
        "Integr8 employs enterprise-grade security measures including end-to-end encryption, role-based access control, and regular security audits. Our platform is built with compliance in mind, supporting local tax regulations, payroll laws, and data protection standards relevant to your region.",
    },
    {
      id: "item-8",
      question: "Can Integr8 products be tailored for a specific industry?",
      answer:
        "Yes. Integr8 offers industry-tailored configurations. Each configuration comes pre-built with relevant workflows, reports, and compliance settings for that specific industry.",
    },
    {
      id: "item-9",
      question: "How long does it take to get started with Integr8?",
      answer:
        "Most businesses are up and running within a few days for standard deployments. Complex enterprise setups with custom configurations and data migration may take a few weeks. Our implementation team provides hands-on support throughout the entire onboarding process.",
    },
    {
      id: "item-10",
      question: "Are Integr8 products cloud-based or on-premise?",
      answer:
        "Integr8 is available as both a cloud-hosted SaaS solution and an on-premise deployment, giving your business the flexibility to choose based on your IT infrastructure and data governance requirements.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-28">
              <h2 className="text-4xl text-[#0818a8] font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can't find what you're looking for? Contact our{" "}
                <Link
                  href="/contactUs"
                  className="text-[#0818a8] font-medium hover:underline"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6"></div>
                      <span className="text-base text-[#0818a8]">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base text-black/60">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
