import { assetUrl } from "@/config/site";
import DefaultLayout from "@/layouts/default";

export const insights = [
  {
    title: "Community is critical infrastructure",
    description:
      "Truck drivers already had powerful informal networks. WhatsApp groups and personal relationships were used to find loads, share information about routes and dangers, exchange recommendations, and socialize.",
    implication:
      "The service would not replace this network, but it can help share and organize information that supports drivers. This highlights the importance of features such as link sharing.",
  },
  {
    title: "Experience creates expertise",
    description:
      "Drivers learn which routes, loads, stops, and services are worth choosing through years of experience. Because of this, social validation matters.",
    implication:
      "Every truck is an influencer, their experience guide new arrivals. The service could help share this knowledge between drivers",
  },
  {
    title: "Financial complexity is different on the road",
    description:
      "Drivers handle significant cash flows while often operating with thin margins and unpredictable expenses. Money for the truck and money for home are frequently managed separately.",
    implication:
      "Support with financial security and predictability is paramount for drivers’ peace of mind, underscoring the value of insurance and other safety nets.",
  },
  {
    title: "Predictability is a form of value",
    description:
      "From fuel and tire expenses to finding a return load, many of the most valuable opportunities helped drivers prepare for what might happen next.",
    implication:
      "The service should help drivers anticipate and navigate uncertainty. Features such as route mapping, stop visualization, and other planning tools can support better preparation and help avoid surprises.",
  },
];

export const principles = [
  {
    title: "Belonging",
    quote: "Today I help; tomorrow I might need help.",
    description:
      "Strengthen the sense of community and enable collaboration between drivers.",
  },
  {
    title: "Recognition",
    quote: "I want to be seen and remembered.",
    description:
      "Treat the driver as the most important part of the service, not simply as supply for the logistics system.",
  },
  {
    title: "Transparency",
    quote: "I want to know what it does and how it works.",
    description:
      "Make products, benefits, and decisions easy to understand in practical terms.",
  },
  {
    title: "Autonomy",
    quote: "I'm proud not to have a boss.",
    description:
      "Give drivers the knowledge and tools to make independent decisions.",
  },
  {
    title: "Safety",
    quote: "Travel safely, truck driver.",
    description:
      "Support the physical, financial, and operational safety of the driver, vehicle, and cargo.",
  },
  {
    title: "Predictability",
    quote: "I make the outbound trip thinking about the return.",
    description:
      "Help drivers plan ahead while preparing for the unexpected.",
  },
];

export const ecosystem = [
  {
    title: "Freight",
    description: "Finding relevant loads and improving planning.",
  },
  {
    title: "Fuel",
    description:
      "Helping drivers make more informed and cost-effective decisions.",
  },
  {
    title: "Tires & maintenance",
    description: "Reducing the impact of large, unpredictable expenses.",
  },
  {
    title: "Financial services",
    description:
      "Supporting the unique financial realities of life on the road.",
  },
  {
    title: "Social map & community",
    description: "Making knowledge from the road more accessible.",
  },
  {
    title: "Marketplace services",
    description:
      "Connecting drivers to relevant products and services.",
  },
];

export default function TratoCareCaseStudy() {
  return (
    <DefaultLayout>
      <main className="case-study">
      {/* Hero */}
      <header className="case-study__header">
        <p className="case-study__eyebrow">
          Service Design · Experience Strategy
        </p>

        <h1 className="case-study__title">
          Trato Care
        </h1>

        <p className="case-study__lead">
          Designing an ecosystem around the life of Brazil&apos;s truck drivers.
        </p>

        <div className="case-study__question">
          <p>
            How might we help independent truck drivers navigate the uncertainty
            of life on the road while creating a foundation for a new logistics
            ecosystem?
          </p>
        </div>
      </header>

      <img src={assetUrl("/assets/img/trato_imgs/trato_cover.jpg")} alt="Trato Care Cover" className="mb-6 rounded-lg" />

      {/* Overview */}
      <Section title="Overview">
        <p>
          Trato was a pilot created to help VLI connect truckdrivers with their logistic infrastructure.
          But as the business evolved, an important question emerged:
          <strong>  is this enough to remain competitive in a rapidly digitizing market?</strong>
        </p>

        <p>
          Working across customer research, service design, business strategy,
          and technology, we explored the daily realities of truck drivers and
          translated those insights into a service vision for Trato Care: an
          ecosystem designed to support drivers beyond freight matching.
        </p>
      </Section>

      {/* Challenge */}
      <Section title="The challenge">
        <p>
          Truck drivers are essential to Brazil&apos;s economy, yet their daily
          lives are shaped by uncertainty.
        </p>

        <p>
          Finding the next load is only one part of the job. Drivers also need to
          manage unpredictable costs, plan return trips, maintain their vehicles,
          stay safe on the road, manage complex personal finances, and spend long
          periods away from family and community.
        </p>

        <p>
          Meanwhile, the logistics market was rapidly digitizing. New freight
          platforms were competing for the attention of drivers, often focusing
          on a single transaction: matching a driver with a load.
        </p>

        <p>
          The opportunity was bigger than building another freight app.
        </p>

      </Section>

      {/* Role */}
      <Section title="My role">
        <div className="rounded-lg border border-default-200 p-6">
          <h3 className="font-semibold">Service Design / Experience Strategy</h3>
          <p className="mt-3 text-default-600">
            My work focused on synthesizing customer understanding into strategic
            design direction, including:
          </p>

          <ul className="mt-5 space-y-2 text-default-600">
            <li>— Structuring insights from qualitative research</li>
            <li>— Identifying behavioral patterns, needs, and pain points</li>
            <li>— Defining experience principles and strategic opportunities</li>
            <li>— Translating research into a service vision</li>
            <li>— Connecting the customer journey to propositions across services</li>
            <li>— Supporting the articulation of the ecosystem strategy</li>
          </ul>
          <br/>
          <p>
              Beyond my role as Service Designer I had also to undertake the following responsibilities:
          </p>
          <ul className="mt-5 space-y-2 text-default-600">
            <li>— Mapping user flows</li>
            <li>— Creating wireframes and prototypes</li>
          </ul>
        </div>
      </Section>

      {/* Research */}
      <Section title="Understanding life on the road">
        
        <img src={assetUrl("/assets/img/trato_imgs/Truck1.jpg")} alt="Trato Care Cover" className="mb-6 rounded-lg" />

        <p>
          We conducted in-depth interviews and multi-day diaries with truck
          drivers, exploring their routines, planning, technology use, finances,
          safety, maintenance, health, and relationships.
        </p>

        <p>
          The research revealed something fundamental:
        </p>

        <Quote>
          Uncertainty was not an occasional problem. It was the operating
          condition of a truck driver&apos;s life.
        </Quote>

        <p>
          A driver might not know when the next trip would come, whether a return
          load would be available, how much an unexpected repair would cost, or
          when they would arrive home.
        </p>

      </Section>

      {/* Insights */}
      <Section title="What we learned">
        <div className="space-y-10">
          {insights.map((insight) => (
            <article key={insight.title}>
              <h3 className="text-xl font-semibold">{insight.title}</h3>
              <p className="mt-3 text-default-600">{insight.description}</p>

              <div className="mt-4 border-l-2 border-default-300 pl-4">
                <p className="text-sm font-medium">
                  Design implication
                </p>
                <p className="mt-1 text-default-600">
                  {insight.implication}
                </p>
              </div>
            </article>
          ))}
        </div>
        <img src={assetUrl("/assets/img/trato_imgs/journey_trato.jpg")} alt="Truck's Driver Journey" className="mb-6 rounded-lg" />

      </Section>


      {/* Principles */}
      <Section title="Reframing the opportunity">
        <p>
          We synthesized the research into a set of experience drivers that could
          guide decisions across the ecosystem.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-lg border border-default-200 p-5"
            >
              <h3 className="font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm italic text-default-500">
                “{principle.quote}”
              </p>
              <p className="mt-4 text-sm leading-relaxed text-default-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Strategy */}
      <Section title="From a freight platform to a service ecosystem">
        <p>
          The research led us to a simple strategic shift.
        </p>

        <Quote>
          Freight could be the entry point, but it didn&apos;t have to be the limit
          of the relationship.
        </Quote>

        <p>
          We developed the vision for Trato Care: a service ecosystem that
          recognizes the importance of truck drivers and supports their work,
          planning, community, and quality of life.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {ecosystem.map((item) => (
            <div
              key={item.title}
              className="border-t border-default-200 py-5"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-default-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <Callout>
          Every service needed to contribute to a larger promise: helping drivers
          operate with greater confidence and control.
        </Callout>
        <img src={assetUrl("/assets/img/trato_imgs/journey_trato2.jpg")} alt="Truck's Driver Journey" className="mb-6 rounded-lg" />

      </Section>

      {/* Journey */}
      <Section title="Designing the ecosystem around moments of need">
        <p>
          Rather than thinking of the ecosystem as a list of products, we
          connected services to moments in the driver&apos;s journey.
        </p>

        <div className="mt-8 space-y-6">
          <JourneyMoment
            title="Before the trip"
            description="Plan the route, understand costs, and plan for the journey."
          />
          <JourneyMoment
            title="Finding and managing freight"
            description="Find optimal opportunities, increase confidence in transactions with previously unknown companies."
          />
          <JourneyMoment
            title="On the road"
            description="Access useful information, connect with the community, and adapt better to changing conditions."
          />
          <JourneyMoment
            title="Managing the business"
            description="Understand costs, separate personal and professional finances, and prepare for major expenses."
          />
          <JourneyMoment
            title="When something goes wrong"
            description="Find trusted services and information quickly—especially in unfamiliar places or emergency situations."
          />
        </div>
      </Section>

      {/* Principle */}
      <Section title="A key design principle: work with existing behavior">
        <p>
          One of the clearest lessons from the research was that adoption could
          not be designed in isolation.
        </p>

        <p>
          WhatsApp was already deeply embedded in the driver&apos;s daily life.
          Community recommendations were already a trusted source of information.
          Internet access could also be intermittent.
        </p>

      
        <p>
          To better understand which solutions would integrate most effectively, 
          we presented different service concept options using real-world scenarios. 
          This approach helped us identify which type of service best addressed truck drivers&apos; needs.
        </p>

        <img src={assetUrl("/assets/img/trato_imgs/trato_service_concepts.jpg")} alt="Service Concepts" className="mb-6 rounded-lg" />

        <p>
            Leading the team to create high-fidelity prototypes that brought exactly what the Drivers needed.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <video
            src={assetUrl("/assets/img/trato_imgs/Trato_Fretes_Prototipo.webm")}
            className="h-auto w-full rounded-lg"
            controls
          />
          <video
            src={assetUrl("/assets/img/trato_imgs/Trato_Mapa_Prototipo.webm")}
            className="h-auto w-full rounded-lg"
            controls
          />
          <video
            src={assetUrl("/assets/img/trato_imgs/Trato_Prototipo_Assinatura_Pneu.webm")}
            className="h-auto w-full rounded-lg"
            controls
          />
        </div>

      </Section>

      {/* Outcome */}
      <Section title="Outcome">
        <p>
          Trato was at the time a pilot born from an intrapreneurship program within VLI. The work established a shared strategic foundation for Trato&apos;s
          evolution beyond a single freight-focused proposition.
        </p>

        <ul className="mt-6 space-y-3 text-default-600">
          <li>— A deeper understanding of the truck driver&apos;s end-to-end experience</li>
          <li>— A unifying service vision for Trato Care</li>
          <li>— A portfolio of interconnected service opportunities</li>
          <li>— A rationale for evolving toward an ecosystem model</li>
          <li>— A customer-centered narrative connecting design ambition with business strategy</li>
        </ul>
        <p> 
          This foundation paved the way for Trato to become one the biggest players in it's market.
          <br/>
          According to VLI's website, in the last 5 years:
        </p>
         <ul className="mt-6 space-y-3 text-default-600">
          <li>— 30 clients hired VLI’s multimodal services</li>
          <li>— 13.3 million tons transported via road transport</li>
          <li>— 2.7 million road transport trips scheduled and monitored in Trato</li>
          <li>— 98.9 million tons scheduled at VLI’s terminals and ports</li>
          <li>— 1.4 million tons in road trips orchestrated by Trato</li>
          <li>— Hundreds of millions of reais in revenue through Trato</li>
        </ul>

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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="case-study__callout">
      {children}
    </div>
  );
}

function JourneyMoment({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-2 border-l border-default-300 pl-5 md:grid-cols-[200px_1fr]">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-default-600">{description}</p>
    </div>
  );
}