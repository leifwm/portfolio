import { Navbar } from "@/components/navbar";
import { ContactCard } from "@/components/contactcard";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-[1920px]  grow bg-background">
        {children}
      </main>
      <footer className="flex w-full flex-col items-center justify-center border-t border-foreground/50 bg-background p-2">
        <ContactCard />

        <p className="text-muted text-xs">Leif Westerstahl Magalhães 2026</p>
      </footer>
    </div>
  );
}
