export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sea/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          <span className="font-display text-base text-sea">
            Travel<span className="text-terracotta">.</span>Places
          </span>{" "}
          – Discover Turkey
        </p>
        <p>Made with Next.js & Tailwind CSS · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}