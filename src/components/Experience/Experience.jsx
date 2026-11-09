import React from "react";
import Stepper from "./Stepper/Stepper";
import { SectionShell } from "../shared/Section.styled";
import SectionHeading from "../shared/SectionHeading";

const steps = [
  {
    year: 2025,
    label: "Software Engineer",
    subLabel:
      "MisMar, Riyadh, Saudi Arabia, Full-time Remote. From April 2025 to Present",
    description: [
      "Developed complex features that improved system stability and scalability.",
      "Refactored high-impact areas to improve maintainability, performance, and code quality.",
      "Reduced total Firebase cloud database costs by 85%–90%.",
      "Decreased Firebase read operations by 90% and write operations by 40%.",
      "Minimized application memory footprint, CPU usage, and network overhead, boosting overall application speed.",
      "Resolved security vulnerabilities in system dependencies, closing risks across the application.",
      "Replaced legacy components across feature screens with the shared component layer, improving consistency and making later changes straightforward.",
    ],
  },
  {
    year: 2024,
    label: "Frontend Engineer",
    subLabel:
      "CEQUENS, UAE–Egypt, Cairo, Full-time Remote. From November 2024 to April 2025",
    description: [
      "Worked across several squads, mainly in the Console squad on the core end-user product, contributing to feature development and a UI refactor that improved code quality and performance.",
      "Maintained legacy features and implemented new functionality in an internal application used by the operations team.",
      "Contributed to the early-stage development of a new product during its initialization phase.",
    ],
  },
  {
    year: 2024,
    label: "Software Engineer",
    subLabel:
      "STORYME, Ramallah, West Bank, Full-time Remote. From April 2024 to November 2024",
    description: [
      "Developed and delivered key features for a free editor app.",
      "Contributed to storytelling projects with animated visuals and sound.",
    ],
  },
  {
    year: 2022,
    label: "Reserve Officer (Software Engineer)",
    subLabel:
      "Egyptian Armed Forces, Full-time. From May 2022 to April 2024",
    description: [
      "Worked on ERP systems and report generation.",
      "Developed new features and enhancements for the Air Defense Forces main website.",
      "Maintained and enhanced a membership app for El-Nozha Air Defense House covering memberships, activities, and garage management.",
      "Led a team of 3 engineers to build a technical support app serving the whole region.",
      "Migrated apps and databases from local hosting to virtual machines in a larger ecosystem.",
    ],
  },
  {
    year: 2022,
    label: "Frontend Engineer",
    subLabel:
      "Sourcya, Sweden–Egypt, Alexandria, Part-time Remote. From February 2022 to May 2022",
    description: [
      "Developed Fastore Orders, a dashboard for order management and calculations.",
      "Built features for Cisozen, a cybersecurity product with tests, dashboards, and recommendations.",
    ],
  },
  {
    year: 2021,
    label: "Frontend Engineer",
    subLabel:
      "Megadev, Tanta, Egypt, Full-time. From August 2021 to April 2022",
    description: [
      "Developed a medicine market e-commerce platform for warehouses, with real-time inventory management and daily price lists.",
      "Built several landing pages.",
    ],
  },
  {
    year: 2020,
    label: "Frontend Engineer",
    subLabel: "Freelancer",
    description: [
      "Delivered multiple freelance projects on time with a focus on quality.",
      "Built a freelancing platform specialized in cybersecurity.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionShell id="Experience">
      <SectionHeading>Experience</SectionHeading>
      <Stepper steps={steps} />
    </SectionShell>
  );
}
