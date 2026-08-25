"use client";

import React from "react";
import { assetUrl } from "@/config/site";

const studentMindsets = [
  {
    title: "Enthusiast",
    description:
      "Understands what they want to study and is in college to learn and grow both professionally and personally. Has a personal desire to specialize in specific subjects.",
    position: "top-left",
  },
  {
    title: "Pratical",
    description:
      "Is pursuing an undergraduate degree with the goal of external rewards—such as employment, promotions, résumé building, recognition, among others. Not necessarily interested in the learning itself, but in what can be gained from it.",
    position: "top-right",
  },
  {
    title: "Instinctive",
    description:
      "Has only a superficial understanding of what pursuing a degree means and why to pursue it. Enrolls based on instinct, but may show disinterest in initiatives that are not aligned with their initial expectations.",
    position: "bottom-left",
  },
  {
    title: "Apathetic",
    description:
      "Will pursue a degree due to social pressure, whether from family obligation or a ‘social contract.’ For many, after graduating from high school, college seems to be the natural next step—even if they don’t really know why.",
    position: "bottom-left",
  },
];

const experienceLayers = [
  {
    number: "01",
    title: "Maintain tranquility",
    description:
      "Remove unnecessary friction and create a reliable foundation so students can focus on studying and building their lives.",
  },
  {
    number: "02",
    title: "Enhance development",
    description:
      "Create a stronger and more consistent learning experience that helps students develop academically and personally.",
  },
  {
    number: "03",
    title: "Guide their path",
    description:
      "Offer differentiated services and support that respond to students' contexts, ambitions, and evolving needs.",
  },
  {
    number: "04",
    title: "Foster community",
    description:
      "Create stronger connections between students, alumni, institutions, and the broader educational ecosystem.",
  },
];

const serviceAreas = [
  {
    title: "Academic experience",
    description:
      "A more coherent foundation for navigating academic life and accessing essential information.",
  },
  {
    title: "Student support",
    description:
      "Simpler, more transparent ways for students to resolve problems and access help.",
  },
  {
    title: "Personalized journeys",
    description:
      "Experiences that can adapt to different student contexts and moments in their journey.",
  },
  {
    title: "Career & employability",
    description:
      "Services that help students connect their education with professional opportunities.",
  },
  {
    title: "Community",
    description:
      "Stronger connections between students, organizations, alumni, and shared interests.",
  },
  {
    title: "Beyond the classroom",
    description:
      "Events, innovation, extracurricular activities, and experiences that expand the value of university.",
  },
];

const prioritizationCriteria = [
  {
    title: "Value for the student",
    description: "How meaningfully could this improve the student experience?",
  },
  {
    title: "Value for the business",
    description: "How does this contribute to strategic and organizational goals?",
  },
  {
    title: "Technical complexity",
    description: "What technological effort and dependencies are required?",
  },
  {
    title: "Operational complexity",
    description: "What changes to processes and teams are needed?",
  },
  {
    title: "Business-model complexity",
    description: "What new capabilities or ways of operating would this require?",
  },
];

export default function SerDigitalCaseStudy() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Hero */}
      <header className="mb-24 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-default-500">
          Service Design · Experience Strategy
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Ser Digital
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-default-600 md:text-2xl">
          Designing a connected university experience beyond the classroom.
        </p>

        <div className="mt-10 border-l-2 border-foreground pl-6">
          <p className="text-lg leading-relaxed md:text-xl">
            How might we transform a university experience from a collection of
            disconnected services into a meaningful relationship that supports
            students throughout their journey?
          </p>
        </div>
      </header>

      {/* Overview */}
      <Section title="Overview">
        <p>
          Ser Digital explored how the university experience could evolve around
          students' changing needs, connecting customer experience, technology,
          innovation, and organizational transformation.
        </p>

        <p>
          This was not a project about designing a single product. The challenge
          was to define how an entire ecosystem of services could work together
          to create a more coherent and meaningful relationship with students.
        </p>
      </Section>

      {/* Challenge */}
      <Section title="The challenge">
        <p>
          A student's university experience is much bigger than attending
          classes.
        </p>

        <Quote>
          But the services supporting that experience don't always feel like one
          connected journey.
        </Quote>

        <p>
          Students navigate academic, administrative, financial, professional,
          and social aspects of university throughout their lives as students.
          Each of these moments can involve different processes, teams, and
          channels.
        </p>

        <p>
          The challenge was to move beyond isolated improvements and establish a
          coherent experience strategy that could guide future services and
          investments across the ecosystem.
        </p>
      </Section>

      {/* Role */}
      <Section title="My role">
        <div className="rounded-lg border border-default-200 p-6">
          <h3 className="font-semibold">Service Design / Experience Strategy</h3>

          <p className="mt-3 text-default-600">
            My work contributed to translating research and strategic direction
            into a coherent vision for the future student experience.
          </p>

          <div className="mt-6 grid gap-2 text-default-600 sm:grid-cols-2">
            <span>— Research synthesis</span>
            <span>— Student segmentation</span>
            <span>— Experience strategy</span>
            <span>— Opportunity definition</span>
            <span>— Service ecosystem design</span>
            <span>— Initiative prioritization</span>
          </div>
        </div>
      </Section>

      {/* Student understanding */}
      <Section title="Students don't all experience university in the same way">
        <p>
          A key part of the work was recognizing that the student population
          could not be treated as a single audience.
        </p>

        <p>
          Students arrive with different motivations, levels of direction, and
          expectations about what university should help them achieve.
        </p>

        <StudentMindsetMatrix />

        <p>
          This gave us a more useful lens for thinking about experience design:
          rather than asking what a generic student needs, we could consider how
          different relationships with education might require different kinds of
          support.
        </p>
        <img src={assetUrl("/assets/img/serdigital_imgs/personas.png")} alt="Student Personas" className="mb-6 rounded-lg" />
      </Section>

      {/* Strategy */}
      <Section title="From individual needs to an experience strategy">
        <p>
          The research and strategic work were synthesized into four
          progressively broader layers of value.
        </p>

        <p>
          Together, they created a framework for thinking about the evolution of
          the student experience—from making essential interactions work better
          to building a broader sense of connection and belonging.
        </p>

        <ExperienceStrategy />

        <Quote>
          A great experience starts by solving today's problems, but creates
          value by helping people move toward what's next.
        </Quote>
      </Section>

      {/* Ecosystem */}
      <Section title="Turning strategy into services">
        <p>
          The strategy was designed to guide a portfolio of initiatives rather
          than prescribe a single solution.
        </p>

        <p>
          Foundational improvements could make everyday university life easier,
          while new services could expand the relationship into areas such as
          career, community, development, and life beyond the classroom.
        </p>
        <ServiceEcosystem />
        <img src={assetUrl("/assets/img/serdigital_imgs/journey_to_be.jpg")} alt="Student Personas" className="mb-6 rounded-lg"/>
      </Section>

      {/* Example */}
      <Section title="Building a stronger foundation first">
        <p>
          Experience transformation needed to begin with the basics. Before
          introducing new forms of value, students needed a simpler and more
          reliable way to manage their everyday university lives.
        </p>

        <p>
          This included opportunities to create more unified access to academic
          information, simplify service requests, improve support, and evolve
          the mobile and digital experience.
        </p>

        <Callout>
          The goal wasn't simply to add more digital channels. It was to make
          the existing experience feel more coherent.
        </Callout>
        <img src={assetUrl("/assets/img/serdigital_imgs/roadmap.jpg")} alt="Student Personas" className="mb-6 rounded-lg"/>
      </Section>

      {/* Prioritization */}
      <Section title="Prioritizing transformation">
        <p>
          A large experience vision creates a large opportunity space. Not every
          initiative can happen at once.
        </p>

        <p>
          To help move from strategy to action, initiatives were evaluated across
          multiple dimensions of value and complexity.
        </p>

        <PrioritizationFramework />

        <p>
          This helped distinguish foundational initiatives from longer-term
          opportunities and created a clearer path for implementation.
        </p>
        <img src={assetUrl("/assets/img/serdigital_imgs/priority_matrix.jpg")} alt="Student Personas" className="mb-6 rounded-lg"/>

      </Section>

      {/* Transformation */}
      <Section title="Designing the transformation, not just the destination">
        <p>
          A new experience cannot be created through interfaces and services
          alone.
        </p>

        <Quote>
          The organization around the experience has to evolve too.
        </Quote>

        <p>
          The transformation connected experience initiatives with broader
          enablers such as customer experience, technology, innovation, culture,
          leadership, and new ways of working.
        </p>

        <p>
          This was an important part of the project's perspective: meaningful
          service transformation requires the capabilities to sustain the
          experience after it is designed.
        </p>
      </Section>

      {/* Outcome */}
      <Section title="Outcome">
        <p>
          The project established a strategic framework and roadmap for evolving
          the student experience across the university ecosystem.
        </p>

        <ul className="space-y-3 text-default-600">
          <li>— Created a shared vision for the future student experience</li>
          <li>— Connected different student needs to experience opportunities</li>
          <li>— Defined a portfolio of services across the university ecosystem</li>
          <li>— Connected individual initiatives to broader experience goals</li>
          <li>— Established criteria for prioritizing transformation</li>
          <li>
            — Connected experience design with technology, innovation, culture,
            and implementation
          </li>
        </ul>
      </Section>

      {/* Reflection */}
      <section className="pt-8">
        <hr className="mb-12 border-default-200" />

        <p className="text-sm font-medium uppercase tracking-widest text-default-500">
          Reflection
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Designing an experience at ecosystem scale means designing
          relationships, not individual touchpoints.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-default-600">
          <p>
            A university can improve a portal, an app, or a customer-service
            process individually. But a meaningful student experience emerges
            from how those things connect—and whether they collectively help
            someone achieve what they came to university for.
          </p>

          <p>
            This project reinforced the importance of connecting strategy with
            implementation. A vision becomes useful when it helps people make
            decisions about what to improve, what to build, and what needs to
            change around the experience.
          </p>
        </div>

        <div className="mt-12 border-l-2 border-foreground py-2 pl-6">
          <p className="text-xl font-medium leading-relaxed">
            The value of service design at scale isn't just imagining a better
            experience. It's creating a shared path toward making that
            experience possible.
          </p>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable sections                                                           */
/* -------------------------------------------------------------------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-default-500">
        {title}
      </p>

      <div className="space-y-6 text-lg leading-relaxed text-default-700">
        {children}
      </div>
    </section>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-2 border-foreground pl-6 text-xl font-medium leading-relaxed md:text-2xl">
      {children}
    </blockquote>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 rounded-lg bg-default-100 px-6 py-5 text-lg font-medium">
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Student mindset matrix                                                      */
/* -------------------------------------------------------------------------- */

function StudentMindsetMatrix() {
  return (
    <figure className="my-12">
      <figcaption className="mb-8">
        <p className="text-sm font-medium uppercase tracking-widest text-default-500">
          Student mindsets
        </p>
        <p className="mt-2 text-default-600">
          Different motivations and levels of direction create different
          relationships with the university experience.
        </p>
      </figcaption>

      <div className="hidden grid-cols-[64px_1fr] grid-rows-[1fr_52px] md:grid">
        {/* Vertical axis */}
        <div className="relative border-r border-default-300">
          <span className="absolute  top-2 -translate-x-1/2 text-right whitespace-nowrap text-xs font-medium uppercase tracking-widest text-default-500">
            Defined
          </span>

          <span className="absolute bottom-2  -translate-x-1/2 text-right whitespace-nowrap text-xs font-medium uppercase tracking-widest text-default-500">
            Exploratory
          </span>

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-sm font-medium text-default-600">
            Objective
          </span>
        </div>

        {/* Matrix */}
        <div className="grid min-h-120 grid-cols-2 grid-rows-2">
          <MindsetCell
            title="Enthusiast"
            description={studentMindsets[0].description}
            className="border-b border-r"
          />
          <MindsetCell
            title="Practical"
            description={studentMindsets[1].description}
            className="border-b"
          />
          <MindsetCell
            title="Instinctive"
            description={studentMindsets[3].description}
            className="border-r"
          />
          <MindsetCell
            title="Apathetic"
            description={studentMindsets[2].description}
          />
        </div>

        <div />

        {/* Horizontal axis */}
        <div className="relative border-t border-default-300">
          <span className="absolute left-0 top-4 text-xs font-medium uppercase tracking-widest text-default-500">
            Intrinsic
          </span>

          <span className="absolute right-0 top-4 text-xs font-medium uppercase tracking-widest text-default-500">
            Extrinsic
          </span>

          <span className="absolute left-1/2 top-4 -translate-x-1/2 text-sm font-medium text-default-600">
           Motivation
          </span>
        </div>
      </div>

      {/* Mobile */}
      <div className="grid gap-4 md:hidden">
        {studentMindsets.map((mindset) => (
          <div
            key={mindset.title}
            className="rounded-lg border border-default-200 p-5"
          >
            <h4 className="font-semibold">{mindset.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-default-600">
              {mindset.description}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}

function MindsetCell({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center p-6 border-default-300 ${className}`}
    >
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-default-600">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Experience strategy                                                         */
/* -------------------------------------------------------------------------- */

function ExperienceStrategy() {
  return (
    <div className="my-12 border-y border-default-200">
      {experienceLayers.map((layer) => (
        <div
          key={layer.number}
          className="grid gap-4 border-b border-default-200 py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.5fr]"
        >
          <span className="text-sm font-medium text-default-400">
            {layer.number}
          </span>

          <h3 className="font-semibold">{layer.title}</h3>

          <p className="text-default-600">{layer.description}</p>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Service ecosystem                                                           */
/* -------------------------------------------------------------------------- */

function ServiceEcosystem() {
  return (
    <div className="my-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {serviceAreas.map((area) => (
          <article
            key={area.title}
            className="border-t border-default-200 py-5"
          >
            <h3 className="font-medium">{area.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-default-600">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Prioritization                                                              */
/* -------------------------------------------------------------------------- */

function PrioritizationFramework() {
  return (
    <figure className="my-12 rounded-lg border border-default-200 p-6 md:p-8">
      <figcaption>
        <p className="text-sm font-medium uppercase tracking-widest text-default-500">
          Prioritization framework
        </p>
        <h3 className="mt-2 text-xl font-semibold">
          Balancing value with the complexity of making change happen
        </h3>
      </figcaption>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {prioritizationCriteria.map((criterion) => (
          <div key={criterion.title}>
            <h4 className="font-medium">{criterion.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-default-600">
              {criterion.description}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}