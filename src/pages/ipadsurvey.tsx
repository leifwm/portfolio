"use client";

import React from "react";
import DefaultLayout from "@/layouts/default";

const frictionAreas = [
  {
    number: "01",
    title: "Hardware performance",
    description:
      "Aging devices were beginning to show limitations around performance and battery life.",
  },
  {
    number: "02",
    title: "Software compatibility",
    description:
      "Large spreadsheets, heavy files, and enterprise software did not always work well in the iPad environment.",
  },
  {
    number: "03",
    title: "Interaction",
    description:
      "Touch wasn't always the most effective way to complete tasks designed around keyboards and traditional desktop interaction.",
  },
  {
    number: "04",
    title: "Context of use",
    description:
      "The device was used across different environments, creating additional needs around speed, presentation, and handling.",
  },
  {
    number: "05",
    title: "Connectivity",
    description:
      "People needed to connect the device to other equipment and peripherals as part of their everyday work.",
  },
];

const recommendations = [
  {
    number: "01",
    title: "Refresh the hardware",
    description:
      "Address the genuine performance and battery limitations created by aging devices.",
  },
  {
    number: "02",
    title: "Expand connectivity",
    description:
      "Support connections to the equipment and ports people need across different work contexts.",
  },
  {
    number: "03",
    title: "Support different ways of working",
    description:
      "Enable more effective interaction through peripherals such as a keyboard and trackpad.",
  },
];

export default function FieldWorkExperienceCaseStudy() {
  return (
    <DefaultLayout>
      <main className="case-study">
      <header className="case-study__header">
        <p className="case-study__eyebrow">
          Research · Service Design · AI-assisted Analysis
        </p>

        <h1 className="case-study__title">
          Looking beyond the device
        </h1>

        <p className="case-study__lead">
          Understanding how technology supports people working in the field.
        </p>

        <div className="case-study__question">
          <p>
            How might we understand what is actually creating friction in the
            field team's work before making a significant technology investment?
          </p>
        </div>

        
      </header>
      <img
          src="/assets/img/ipadsurvey_imgs/survey_stats.png"
          alt="Survey statistics showing 4 weeks research cycle, 205 people invited, and 107 responses collected."
          className="rounded-lg mb-10 "
        />
      <Section title="Overview">
        <p>
          A potential hardware upgrade raised a straightforward question:
          should the company replace the iPads used by its field team?
        </p>

        <p>
          Replacing the equipment represented a significant investment. Before
          making that decision, we needed to understand how well the existing
          devices supported people's day-to-day work—and whether newer hardware
          would actually solve the problems they experienced.
        </p>

        <p>
          AI was used to help analyze and compile the results, accelerating the
          synthesis process and creating more time to focus on interpreting what
          the findings meant.
        </p>


      </Section>

      <Section title="The challenge">
        <p>The original question was simple:</p>

        <Quote>Do we need to replace the iPads?</Quote>

        <p>But technology rarely exists in isolation.</p>

        <p>
          A device can perform well and still create a frustrating experience
          when the software, workflows, connectivity, or physical environment
          around it don't support the work people need to do.
        </p>

        <p>The real challenge became:</p>

        <Quote>
          How might we understand what is actually creating friction in the
          field team's work before making a significant technology investment?
        </Quote>
      </Section>

      <Section title="My role">
        <div className="border border-default-200 p-6 md:p-8">
          <h3 className="text-lg font-semibold">Research & Service Design</h3>

          <p className="mt-4 text-default-600">
            My role focused on turning a broad business question into an
            evidence-based understanding of the field team's experience.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-3 text-sm text-default-600 sm:grid-cols-2">
            <span>— Research design</span>
            <span>— Survey development</span>
            <span>— Quantitative analysis</span>
            <span>— Qualitative research synthesis</span>
            <span>— AI-assisted analysis</span>
            <span>— Insight identification</span>
            <span>— Recommendation development</span>
          </div>
        </div>
      </Section>

      <Section title="Researching under a real decision timeline">
        <p>
          The project needed to provide useful evidence quickly enough to
          support an upcoming investment decision.
        </p>

        <p>
          Over four weeks, the research collected feedback across different
          aspects of the field experience, including satisfaction with the
          equipment, technical issues, software use, work contexts, and unmet
          needs.
        </p>

        <p>
          AI was used as an assistant during the analysis process to help
          compile responses and organize recurring themes across the data.
        </p>

        <Quote>
          The goal wasn't to automate judgment. It was to spend less time
          organizing information and more time understanding what the evidence
          meant.
        </Quote>
      </Section>

      <Section title="The device was valued—even when it wasn't enough">
        
        <div className="space-y-4 text-default-600">
              <p>
                Practicality and portability were important strengths,
                particularly for people working across different locations.
              </p>
              <p>
                But positive satisfaction didn't mean the experience was
                frictionless.
              </p>
              <p>
                Recurring issues with battery life, screen size, performance,
                and applications revealed limitations beyond the device itself.
              </p>
            </div>
        <img
          src="/assets/img/ipadsurvey_imgs/overall_satisfaction.png"
          alt="Survey statistics showing 4 weeks research cycle, 205 people invited, and 107 responses collected."
          className="rounded-lg mb-10 "
        />

        <Quote>
          People didn't dislike the device. They were struggling with parts of
          the experience around it.
        </Quote>
      </Section>

      <Section title="The problem wasn't one thing">
        <p>
          As the responses were analyzed, it became clear that the challenges
          couldn't be explained by hardware alone.
        </p>

        <FrictionAreas />

        <p>
          The same device could support one task effectively while becoming 
          a source of friction in another context. In fact, 45% of respondents 
          reported experiencing some kind of challenge, 
          meaning that <br/>at least <span className="font-bold">one in four</span> field team members 
          faced friction with the equipment.
        </p>

          <img
          src="/assets/img/ipadsurvey_imgs/challenges.png"
          alt="Survey statistics showing 4 weeks research cycle, 205 people invited, and 107 responses collected."
          className="rounded-lg mb-10 "
        />
      </Section>

      <Section title="Looking beyond the device">
        <p>
          The most important shift in the project was a change in perspective.
        </p>

        <p>
          Replacing the hardware could solve some problems, particularly those
          caused by aging devices. But it wouldn't automatically resolve
          software limitations or workflows that required different ways of
          interacting with information.
        </p>

        <div className="my-12 grid gap-8 border-y border-default-200 py-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-default-500">
              Before
            </p>
            <p className="mt-3 text-xl font-medium">
              Which device should we buy?
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-default-500">
              After
            </p>
            <p className="mt-3 text-xl font-medium">
              What does the field team need to work effectively?
            </p>
          </div>
        </div>
      </Section>

      <Section title="From findings to a broader recommendation">
        <p>
          Rather than proposing a single solution, the research pointed toward
          addressing different layers of the experience.
        </p>

        <Recommendations />

        <p>
          Together, these recommendations treated the device as part of a work
          ecosystem rather than assuming that newer hardware was the answer to
          every problem.
        </p>
        <img
          src="/assets/img/ipadsurvey_imgs/conclusion1.png"
          alt=""
          className="rounded-lg"
        />
        <img
          src="/assets/img/ipadsurvey_imgs/conclusion2.png"
          alt=""
          className="rounded-lg mb-10 "
        />
      </Section>

      <Section title="Outcome">
        <p>
          Within four weeks, the project transformed a binary equipment question
          into a more nuanced understanding of the field team's work experience.
        </p>

        <p>
          The research provided evidence that supported a hardware refresh while
          also making visible the limitations that an upgrade alone would not
          solve.
        </p>

        <div className="my-10 grid gap-4 sm:grid-cols-3">
          <OutcomeCard
            title="Hardware"
            description="Performance and battery limitations"
          />
          <OutcomeCard
            title="Connectivity"
            description="Support for additional equipment"
          />
          <OutcomeCard
            title="Interaction"
            description="More effective ways of working"
          />
        </div>

        <p>
          AI-assisted analysis helped accelerate the compilation and synthesis
          of the research, supporting a faster path from feedback to actionable
          findings.
        </p>

        <Quote>
          It wasn't only about deciding whether to replace the iPads. It was
          about understanding what people needed to work effectively.
        </Quote>
      </Section>

      
      </main>
    </DefaultLayout>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="case-study__section">
      <p className="case-study__section-title">
        {title}
      </p>
      <div className="case-study__section-content">
        {children}
      </div>
    </section>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="case-study__quote">
      {children}
    </blockquote>
  );
}

function FrictionAreas() {
  return (
    <div className="my-12 border-y border-default-200">
      {frictionAreas.map((area) => (
        <article
          key={area.number}
          className="grid gap-4 border-b border-default-200 py-7 last:border-b-0 md:grid-cols-[72px_0.8fr_1.4fr]"
        >
          <span className="text-sm font-medium text-default-400">
            {area.number}
          </span>
          <h3 className="font-semibold">{area.title}</h3>
          <p className="text-default-600">{area.description}</p>
        </article>
      ))}
    </div>
  );
}

function Recommendations() {
  return (
    <div className="my-12">
      {recommendations.map((recommendation) => (
        <article
          key={recommendation.number}
          className="grid gap-4 border-t border-default-200 py-7 md:grid-cols-[72px_0.8fr_1.4fr]"
        >
          <span className="text-sm font-medium text-default-400">
            {recommendation.number}
          </span>
          <h3 className="font-semibold">{recommendation.title}</h3>
          <p className="text-default-600">{recommendation.description}</p>
        </article>
      ))}
    </div>
  );
}

function OutcomeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-default-200 p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-default-600">
        {description}
      </p>
    </div>
  );
}