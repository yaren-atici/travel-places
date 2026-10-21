import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Browse",
    text: "See all places as cards with their region, rating and budget.",
  },
  {
    number: "02",
    title: "Read",
    text: "Open a place to read its story and see what you should not miss.",
  },
  {
    number: "03",
    title: "Plan",
    text: "Check the best time to visit and how much the trip may cost.",
  },
];

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Intro + polaroid photo */}
      <section className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            About
          </p>
          <h1 className="mt-2 font-display text-4xl text-sea sm:text-5xl">
            A guide that starts at home
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Travel Places is a single page application that presents interesting
            places to visit in Turkey, from ancient cities to turquoise lagoons.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            I chose to begin with Manisa because it is my hometown. Most people
            know Cappadocia or Istanbul, but only a few have heard of Sardis or
            the volcanic landscape of Kula.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-sm rotate-2 bg-white p-3 pb-5 shadow-xl transition duration-300 hover:rotate-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/places/spil.jpg"
              alt="Spil Mountain in Manisa"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center font-display text-lg text-sea">
            Spil Mountain, Manisa
          </figcaption>
        </figure>
      </section>

      {/* Steps */}
      <section className="mt-24">
        <h2 className="font-display text-3xl text-sea">How to use it</h2>
        <ol className="mt-8 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="border-t-2 border-sea pt-5">
              <span className="font-display text-5xl text-terracotta">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Built with + signature */}
      <section className="mt-24 flex flex-col gap-8 border-t border-sea/15 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">Built with</p>
          <p className="mt-2 text-lg text-ink">{technologies.join(" / ")}</p>
        </div>
        <div className="sm:text-right">
          <p className="text-xs uppercase tracking-widest text-muted">Created by</p>
          <p className="mt-1 font-display text-3xl text-sea">Yaren Atıcı</p>
        </div>
      </section>

      <Link
        href="/places"
        className="mt-12 inline-block rounded-full bg-terracotta px-6 py-3 font-medium text-white transition hover:bg-sea"
      >
        Start exploring →
      </Link>
    </main>
  );
}