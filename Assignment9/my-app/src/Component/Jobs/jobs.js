import React from "react";
import { Container, Card, Row, Col, Button, Navbar } from "react-bootstrap";
import Headerbar from "../Headerbar/headerbar";

import InfoCard from "../Card/card";
import job1 from "../../images/google-job.png";
import job2 from "../../images/microsoft-job.png";
import job3 from "../../images/meta-job.png";

const data = [
  {
    key: 1,
    title: "Google",
    subtitle: "Web Designer",
    description:
      'About the job At Google, we follow a simple but vital premise: "Focus on the user and all else will follow." Google’s UX Engineers are versatile and passionate about taking on new problems to drive progress and vision for design teams. They’re comfortable wearing many hats and get excited about working across discipline lines to develop products and prototypes that bring new ideas to life. Google User Experience (UX) is made up of multi-disciplinary teams of UX Designers, Researchers, Writers, Content Strategists, Program Managers, and Engineers: we care deeply about the people who use our products. The UX team plays an integral part in gathering insights about the attitudes, emotions, and behaviors of people who use our products to inspire and inform design. We collaborate closely with each other and with engineering and product management to create industry-leading products that deliver value for the people who use them, and for Google’s businesses. As a UX Engineer, you\'ll work as part of a UX team in a challenging, fast-paced environment. You’ll demonstrate your creativity, analytical skills, and knowledge of user facing technologies to create prototypes that identify the best product experiences, launch innovative features, build tools that accelerate UX teams, bridge between design and engineering discussions, and enable efficient, high quality execution. The web is what you make of it and our team is helping the world make more of the web. From open-source pros to user-experience extraordinaires, we develop products that help users connect, communicate and collaborate with others. Our consumer products and cloud platforms are giving millions of users at homes, businesses, universities and nonprofits around the world the tools that shape their web experience -- and changing the way they think about computing. The US base salary range for this full-time position is $118,000-$172,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target for new hire salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process. Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google.',
    buttonLabel: "Apply",
    imageUrl: job1,
  },
  {
    key: 2,
    title: "Microsoft",
    subtitle: "Software Engineer - II (Front End)",
    description:
      "Job description We are Microsoft Search in Bing and, as a team, we have a foot in both the consumer and enterprise worlds. This unique space challenges us to innovate and find new ways to meet the expectations of consumers, while respecting the compliance needs of enterprise. Together, we build engaging and modern experiences for information workers using industry-standard tech, mostly TypeScript, and React and Redux for rendering. To help us achieve our goals and partner with stakeholders in design, research, PM, and data science to influence the future of search in the enterprise, we seek an experienced frontend developer. In this role, you will have the opportunity to collaborate with teams across Microsoft and the world to develop innovative search solutions for Enterprises. You will be part of a passionate and growing team who takes pride in their work, and cares about their colleagues. If you are someone who takes ownership of your projects and thrives in a dynamic environment, we would love to consider your application for this role. Responsibilities Build engaging and modern experiences for information workers using TypeScript, React and Redux coded against REST APIs Invest in the growth of an inclusive and capable by mentoring and training team members within the team and across the org Expand our platform from client to server and native rendering Constantly improve our live site with frontend monitoring and automation Build accessible experiences sensitive to the needs of all users Modularize components for use across Microsoft 365 Qualifications Required Qualifications: 4 years of client-side web development experience in TypeScript, JavaScript, React/Redux or similar technologies Experience developing in HTML/CSS 4 years of professional software engineering experience Salary Range: $80K -- $100K Minimum Qualification Software DevelopmentEstimated Salary: $20 to $28 per hour based on qualifications",
    buttonLabel: "Apply",
    imageUrl: job2,
  },
  {
    key: 3,
    title: "Meta",
    subtitle: "Front End Engineer",
    description:
      "Front End Engineer Responsibilities Develop, design, create, modify, and/or test mobile and desktop web software applications or systems. Architect efficient and reusable front-end systems that drive complex web applications. Implement features and user interfaces to optimize performance of user-facing products. Collaborate with Product Designers, Product Managers, and Software Engineers to deliver compelling user-facing products. Identify and resolve performance and scalability issues. Work on problems of diverse scope where analysis of data requires evaluation of identifiable factors. Demonstrate good judgment in selecting methods and techniques for obtaining solutions. Minimum Qualifications Requires a Master's degree in Computer Science, Engineering, Information Systems, Analytics, Mathematics, Physics, Applied Sciences, or a related field and three years of work experience in the job offered or a computer-related occupation. Requires three years of experience in the following: Building mobile and desktop web applications using JavaScript, including asynchronous programming, closures, types, and ES6 HTML or CSS including layout, specificity, cross browser compatibility, and accessibility Browser APIs and optimizing front end performance of web-based applications Front end development of mobile and desktop applications using React, Vue, or Angular Debugging or benchmarking Writing code for User Interface components Building tools, linting and formatting of the codebase",
    buttonLabel: "Apply",
    imageUrl: job3,
  },
];

export default function Jobs() {
  return (
    <>
      <Headerbar />
      <div style={{ display: "flex" }}>
        {data.map((i) => (
          <InfoCard key={i.key} {...i} />
        ))}
      </div>
    </>
  );
}
