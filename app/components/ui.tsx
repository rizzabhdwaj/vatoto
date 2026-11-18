export function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
}

export function Lotus() {
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M32 48C16 37 22 21 32 10c10 11 16 27 0 38Z" /><path d="M32 48C13 49 7 35 7 23c14 1 24 9 25 25Zm0 0c19 1 25-13 25-25-14 1-24 9-25 25Z" /><path d="M32 49C18 55 6 47 3 37m29 12c14 6 26-2 29-12M20 57h24" /></svg>;
}

export function BookDemo() {
  return <a className="button" href="https://vatoto.live/book-a-demo/">Book a Free Demo <Arrow /></a>;
}

export function SectionHeading({ label, title, description, id }: { label: string; title: string; description: string; id: string }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2 id={id}>{title}</h2><p>{description}</p></div>;
}
