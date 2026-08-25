import { VulnerableBusinessesChart } from "../../assets/img/pertinho_imgs/VulnerableBusinessesChart";
import { BusinessSegmentationMatrix } from "../../assets/img/pertinho_imgs/BusinessSegmentationMatrix";
import traditionalSellerImage from "../../assets/img/pertinho_imgs/Persona_TraditionalSeller.JPG";
import entrepreneurImage from "../../assets/img/pertinho_imgs/Persona_Entrepreneur.JPG";
import establishedBusinessImage from "../../assets/img/pertinho_imgs/Persona_EstablishedBusiness.JPG";
import fluxoCadastroImage from "../../assets/img/pertinho_imgs/fluxo_cadastro.jpg";
import roadmapImage from "../../assets/img/pertinho_imgs/roadmap.jpg";

const audienceTypes = [
  {
    title: "The traditional seller",
    description:
      "A business owner with a simple physical operation and limited digital experience.",
    opportunity:
      "They needed an accessible bridge from physical commerce to digital commerce.",
    img: traditionalSellerImage,
  },
  {
    title: "The digital entrepreneur",
    description:
      "A business already comfortable operating through social platforms and messaging.",
    opportunity:
      "Their opportunity was less about digital adoption and more about making their operation easier to scale.",
    img: entrepreneurImage,
  },
  {
    title: "The established physical business",
    description:
      "A business with an existing physical infrastructure and customer base but limited experience selling online.",
    opportunity:
      "They needed support that made digital transformation feel manageable rather than overwhelming.",
    img: establishedBusinessImage,
  },
];

const insights = [
  {
    title: "Existing tools were already the infrastructure",
    description:
      "WhatsApp was already widely used to communicate with customers, while Instagram and word of mouth played an important role in generating demand.",
    implication:
      "Integrate with familiar behaviors instead of forcing business owners into unfamiliar workflows.",
  },
  {
    title: "Delivery was an operational problem, not just a feature",
    description:
      "As businesses moved toward remote orders, delivery quickly became one of their biggest challenges. Owners had to coordinate couriers, manage costs, or deliver products themselves.",
    implication:
      "Consider the economics and logistics behind delivery—not simply provide a button labelled “delivery.”",
  },
  {
    title: "Visibility and demand were different problems",
    description:
      "While food businesses continued to have underlying demand, businesses selling non-essential products often faced a more fundamental challenge: customers simply weren't looking for them.",
    implication:
      "Respond to the nature of each business's challenge, not just its industry category.",
  },
  {
    title: "Digital transformation created operational complexity",
    description:
      "Moving to WhatsApp and delivery created new work. Owners suddenly had to manage orders, inventory, production, communication, payments, and logistics at the same time.",
    implication:
      "Helping a business sell online also means helping it manage the work created by selling online.",
  },
];

const serviceOpportunities = [
  {
    title: "Customer communication",
    description:
      "Support businesses in managing conversations and sharing products with customers.",
  },
  {
    title: "Digital order management",
    description:
      "Make it easier to organize the new workflows created by remote selling.",
  },
  {
    title: "Flexible delivery",
    description:
      "Help businesses access delivery options without adding unnecessary operational burden.",
  },
  {
    title: "Local visibility",
    description:
      "Help customers discover businesses in their neighborhood.",
  },
  {
    title: "Practical guidance",
    description:
      "Provide accessible knowledge for businesses adapting to digital tools and new ways of operating.",
  },
  {
    title: "Business ecosystem",
    description:
      "Create opportunities to connect businesses with suppliers and other relevant services.",
  },
];

export default function PertinhoDeCasaCaseStudy() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Hero */}
      <header className="mb-24 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-default-500">
          Service Design · User Research
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Pertinho de Casa
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-default-600 md:text-2xl">
          Helping small businesses adapt when their customers disappeared.
        </p>

        <div className="mt-10 border-l-2 border-foreground pl-6">
          <p className="text-lg leading-relaxed md:text-xl">
            How might we help small businesses continue operating when the
            COVID-19 pandemic suddenly removed their primary way of reaching
            customers?
          </p>
        </div>
      </header>

      {/* Overview */}
      <Section title="Overview">
        <p>
          In early 2020, the arrival of COVID-19 rapidly transformed everyday
          life in Brazil. Physical businesses lost foot traffic almost overnight,
          while many small entrepreneurs had to figure out new ways of selling,
          communicating, and delivering their products with little time to
          prepare.
        </p>

        <p>
          Our team explored how a digital service could help small businesses
          adapt to this new reality.
        </p>

        <p>
          Through market analysis and interviews with business owners, we
          developed a clearer understanding of the challenges they were facing
          and the opportunities for a platform designed around local commerce,
          existing digital behaviors, and practical support.
        </p>
      </Section>

      {/* Challenge */}
      <Section title="The challenge">
        <p>
          For many small businesses, the pandemic wasn't simply a drop in
          demand.
        </p>

        <Quote>
          It was the sudden disappearance of their entire operating model.
        </Quote>

        <p>
          Restaurants could no longer rely on their dining rooms. Street vendors
          lost pedestrian traffic. Small retailers lost the customers walking
          past their stores. Businesses that had never sold online suddenly
          needed to communicate with customers, take orders remotely, organize
          payments, and solve delivery logistics.
        </p>

        <p>
          The challenge was made more complex by the diversity of small
          businesses themselves. Some already operated through Instagram and
          WhatsApp, while others had little experience with digital tools.
        </p>

        <p>We needed to understand:</p>

        <ul className="space-y-2 text-default-600">
          <li>— Which businesses were being affected most?</li>
          <li>— Who could benefit from a new service first?</li>
          <li>— What were business owners already doing to adapt?</li>
          <li>— Where were existing tools failing them?</li>
          <li>
            — How could a new platform provide meaningful help without adding
            another layer of complexity?
          </li>
        </ul>
      </Section>

      {/* Role */}
      <Section title="My role">
        <div className="rounded-lg border border-default-200 p-6">
          <h3 className="font-semibold">Service Design / User Research</h3>

          <p className="mt-3 text-default-600">
            My work focused on understanding the rapidly changing needs of small
            business owners and translating research into strategic direction for
            the service.
          </p>

          <ul className="mt-5 space-y-2 text-default-600">
            <li>— Market and audience analysis</li>
            <li>— Target audience segmentation</li>
            <li>— Qualitative interviews with business owners</li>
            <li>— Persona development</li>
            <li>— Mapping impacts, needs, and emerging behaviors</li>
            <li>— Validating the service proposition</li>
            <li>— Identifying opportunities for the platform</li>
          </ul>
        </div>
      </Section>

      {/* Audience */}
      <Section title="Starting with the people most affected">
        <p>
          The scale of the problem was enormous. Small businesses across many
          sectors were affected by the crisis, but a platform could not
          effectively serve everyone in the same way from day one.
        </p>
          <VulnerableBusinessesChart />
        <p>
          We analyzed vulnerable categories of small businesses and explored
          where the service could have both meaningful social impact and a
          realistic path to adoption.
        </p>

        <p>
          The initial focus became food and beverage businesses—including street
          markets, restaurants, bars, produce sellers, and prepared food
          businesses.
        </p>

        <Callout>
          Starting with a category that still had active demand could help the
          service build an initial user base before expanding into other sectors.
        </Callout>

        <p>
          This gave the service a focused starting point while leaving room for a
          broader vision of supporting local businesses across different
          categories.
        </p>
      </Section>

      {/* Segmentation */}
      <Section title="One audience, very different realities">
        <p>
          A key insight from the research was that{" "}
          <strong>“small business owner” was too broad to be a useful design
          segment.</strong>
        </p>

        <p>
          Two characteristics emerged as particularly important for understanding
          different needs.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-default-200 p-6">
            <h3 className="font-semibold">Physical structure</h3>
            <p className="mt-3 text-default-600">
              Businesses ranged from informal street vendors and market stalls
              to Instagram-native businesses and established physical stores.
            </p>
          </div>

          <div className="rounded-lg border border-default-200 p-6">
            <h3 className="font-semibold">Digital maturity</h3>
            <p className="mt-3 text-default-600">
              Some owners were already comfortable using digital tools and
              online commerce. Others had little experience using technology for
              business.
            </p>
          </div>
        </div>

        <p className="mt-8">
          By combining these dimensions, we could identify distinct patterns of
          need rather than treating every business as the same.
        </p>
        <BusinessSegmentationMatrix />
      </Section>

      {/* Personas */}
      <Section title="Three different starting points">
        <div className="space-y-10">
          {audienceTypes.map((type) => (
            <article key={type.title}>
              <h3 className="text-xl font-semibold">{type.title}</h3>

              <p className="mt-3 text-default-600">{type.description}</p>

              <div className="mt-4 border-l-2 border-default-300 pl-4">
                <p className="text-sm font-medium">Opportunity</p>
                <p className="mt-1 text-default-600">{type.opportunity}</p>
              </div>
              <img src={type.img} alt={type.title} className="mt-3 rounded-lg" />
            </article>
          ))}
        </div>
      </Section>

      {/* Research */}
      <Section title="Understanding adaptation in real time">
        <p>
          We interviewed small business owners as they were actively responding
          to the crisis.
        </p>

        <p>
          The strongest finding was that{" "}
          <strong>business owners were not waiting for a perfect solution.</strong>
        </p>

        <Quote>They were already improvising.</Quote>

        <p>
          Businesses that had never delivered products began making deliveries
          themselves or hiring motorcycle couriers. Product catalogs were
          assembled into simple documents and sent through WhatsApp. Social media
          and word of mouth became even more important.
        </p>

        <p>This changed our perspective on the opportunity.</p>

        <Quote>How do we digitize these businesses?</Quote>

        <p>became:</p>

        <Quote>
          How can we support the solutions they are already creating for
          themselves?
        </Quote>
      </Section>

      {/* Insights */}
      <Section title="What we learned">
        <div className="space-y-10">
          {insights.map((insight) => (
            <article key={insight.title}>
              <h3 className="text-xl font-semibold">{insight.title}</h3>

              <p className="mt-3 text-default-600">
                {insight.description}
              </p>

              <div className="mt-4 border-l-2 border-default-300 pl-4">
                <p className="text-sm font-medium">Design implication</p>
                <p className="mt-1 text-default-600">
                  {insight.implication}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Validation */}
      <Section title="Validating the opportunity">
        <p>
          We tested the emerging value proposition with participants. Many
          business owners saw potential in the platform, particularly around
          delivery logistics.
        </p>

        <p>
          At the same time, the research revealed an important tension: some
          were reluctant to become dependent on another platform, especially when
          they believed the crisis might be temporary.
        </p>

        <Callout>
          Helpfulness alone doesn't guarantee adoption.
        </Callout>

        <p>
          For a service to be trusted, it also needed to respect the independence
          of small business owners.
        </p>
      </Section>


      {/* Strategy */}
      <Section title="Designing for resilience, not dependency">
        
        <img src={fluxoCadastroImage} className="mt-3 rounded-lg"  alt="User flow diagram showing the steps for a business owner to register and set up their profile on the platform." />

        <p>
          The project began as a response to an immediate crisis, but the
          research suggested a broader principle.
        </p>

        <p>
          Small business owners didn't necessarily want another company
          controlling their relationship with customers. They wanted help doing
          what they already did—better.
        </p>

        <Quote>
          The opportunity was to strengthen small businesses rather than replace
          them.
        </Quote>

        <p>
          This shifted the strategic opportunity away from simply building
          another marketplace and toward a service that could provide practical
          support across the small business ecosystem.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {serviceOpportunities.map((item) => (
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
      </Section>

      {/* Principle */}
      <Section title="A platform designed around needs">
        <p>The service strategy was guided by a simple principle:</p>

        <Quote>
          Meet businesses where they are, then help them take the next step.
        </Quote>

        <p>
          For some, that next step might be receiving orders through WhatsApp.
          For others, it could be organizing deliveries. For a more digitally
          mature business, it might mean reaching new customers or improving
          operational efficiency.
        </p>

        <p>
          This created a more flexible vision of the service—one that could
          support businesses with different levels of maturity rather than
          defining a single “correct” path to digital transformation.
        </p>
        <img src={roadmapImage} className="mt-3 rounded-lg"  alt="Roadmap illustrating the strategic direction for the platform's development." />

      </Section>
    

      {/* Outcome */}
      <Section title="Outcome">
        <p>
          The research created a foundation for defining the platform's initial
          audience and service proposition.
        </p>

        <ul className="mt-6 space-y-3 text-default-600">
          <li>— Identified an initial segment with a realistic path to adoption</li>
          <li>— Developed a framework for segmenting businesses beyond industry</li>
          <li>
            — Connected physical structure and digital maturity to different
            service needs
          </li>
          <li>— Identified delivery and operational support as critical needs</li>
          <li>— Validated interest in the emerging value proposition</li>
          <li>
            — Identified future opportunities around education, suppliers, and
            business support
          </li>
          <p>
            It started only in São Paulo (2020) and now (2026) it's present in all <span className="font-semibold">27 brazilian states</span> with <span className="font-semibold">17k business registered.</span>
          </p>
        </ul>
      </Section>

      {/* Reflection */}
      <section className="pt-8">
        <hr className="mb-12 border-default-200" />

        <p className="text-sm font-medium uppercase tracking-widest text-default-500">
          Reflection
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          People are often already designing their own solutions before we
          arrive.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-default-600">
          <p>
            When we spoke with business owners, they weren't passive recipients
            waiting for innovation. They were experimenting, improvising, and
            using whatever resources they had available.
          </p>

          <p>
            The role of service design wasn't to erase those behaviors and
            replace them with a perfect system. It was to understand what was
            already working—and where the system could make their efforts easier,
            safer, and more sustainable.
          </p>
        </div>

        <div className="mt-12 border-l-2 border-foreground py-2 pl-6">
          <p className="text-xl font-medium leading-relaxed">
            The best response to disruption isn't always to create a completely
            new behavior. Sometimes it's to strengthen the resilience that people
            are already building for themselves.
          </p>
        </div>
      </section>
    </main>
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
    <section className="mb-24">
      <p className="mb-4 text-[30px] font-light tracking-widest text-default-500">
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