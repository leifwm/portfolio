import DefaultLayout from "@/layouts/default";
import { Separator } from "@heroui/react";

const capabilities = [
  "Service design",
  "User research",
  "Experience strategy",
  "Digital products",
];

export default function AboutPage() {
  return (
    <DefaultLayout>
      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <section className="grid gap-12 border-b border-default-200 pb-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-20 md:pb-24">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-default-500">
              About
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">
              Designing better relationships between people and organizations.
            </h1>
          </div>
          <p className="max-w-md text-xl leading-relaxed text-default-600">
            I am Leif Westerstahl Magalhães a Service Designer with over a decade of experience working at the intersection of research, strategy, and design.
          </p>
        </section>

        <section className="grid gap-10 border-b border-default-200 py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-24">
          <h2 className="text-sm font-black uppercase tracking-widest text-default-500">
            How I work
          </h2>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-default-700">
            <h3 className="text-sm font-medium uppercase tracking-widest text-default-500">
                From insight to action
            </h3>
            <p>
             I enjoy moving from research into synthesis, helping teams make 
             sense of complexity and translating insights into opportunities, 
             strategies, and tangible initiatives.
            </p>
          
            <p>
              I'm particularly interested in the moments where research 
              changes the conversation: when <span className="font-bold">evidence challenges assumptions</span>, 
              reveals a new perspective, or helps an organization see a system differently.
            </p>

            <Separator/>

            <h3 className="text-sm font-medium uppercase tracking-widest text-default-500">
                Designing for the whole system
            </h3>
            <p>
             A product is part of a service. A service is part of an organization. 
             And an experience is shaped by everything that happens around it.
            </p>
            <p>
             That systems perspective is at the center of how I approach service design. 
             The goal isn't always to design something new. 
              Sometimes the most valuable outcome is helping a team understand <span className="font-bold">what to change and why.</span>
            </p>

            <Separator/>

            <h3 className="text-sm font-medium uppercase tracking-widest text-default-500">
                Leading through collaboration  
            </h3>
            <p className="font-bold">
             One person changes nothing.
            </p>
            <p>
             A significant part of my work has involved leading designers, 
             guiding research, facilitating workshops, and bringing together people
              from different disciplines around complex problems. 
             My approach to leadership is collaborative: creating clarity, 
             making space for different perspectives, and helping teams turn 
             uncertainty into progress.
            </p>
            <p>
              I'm comfortable moving between the strategic and the practical—facilitating a conversation about the future while also helping a team figure out what needs to happen next.
            </p>

            <Separator/>

            <h3 className="text-sm font-medium uppercase tracking-widest text-default-500">
                What's next? 
            </h3>
            <p className="font-bold">
             I'm a nerd, I like knowing about tech.
            </p>
            <p>
             Recently, I've been exploring how AI can augment research and design 
             practice not to replace human judgment, but to help teams spend less time 
             on repetitive tasks and more time understanding problems, exploring possibilities, 
             and making informed decisions.
            </p>
            <p>
              Alongside my design practice, I've been expanding my 
              front-end skills and experimenting with React and modern web technologies (e.g. this site) . For me, being able to move a little closer to the medium I'm designing for is another way of learning and collaborating more effectively.
            </p>
            
          </div>
        </section>

        <section className="grid gap-10 py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-24">
          <h2 className="text-sm font-medium uppercase tracking-widest text-default-500">
            Areas of practice
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="border-t border-default-200 py-5 text-xl font-medium"
              >
                {capability}
              </div>
            ))}
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}