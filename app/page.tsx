import Image from "next/image";
import Link from "next/link";
import { Arrow, BookDemo, Lotus, SectionHeading } from "./components/ui";
import { Header } from "./components/header";

const programs = [
  { name: "Geeta Sparks", subtitle: "LITTLE LESSONS. LIFELONG WISDOM.", image: "/card1.png", alt: "A child with folded hands and an open Bhagavad Gita", description: "Big life lessons, made little. Discover the Bhagavad Gita through stories, shlokas, and everyday moments.", themes: ["Stories & shlokas", "Kindness & wisdom", "Life values"], href: "https://vatoto.live/bhagavad-geeta/", className: "geeta" },
  { name: "Chalisa Champs", subtitle: "SMALL VOICES. GROWING CONFIDENCE.", image: "/middle3.png", alt: "A child praying beside books of Indian scripture", description: "Find courage in every verse. Explore the Hanuman Chalisa through joyful chanting, meaning, and stories.", themes: ["Chanting & meaning", "Courage & devotion", "Mindful learning"], href: "https://vatoto.live/hanuman-chalisa/", className: "chalisa" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="hero-backdrop">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-sun" aria-hidden="true" /> ROOTED IN CULTURE. MADE FOR CHILDHOOD.</p>
            <h1 id="hero-title">Little learners.<br /> <span>Timeless wisdom.</span></h1>
            <p className="hero-description">A joyful connection to our roots. Live, interactive classes that bring Indian stories, shlokas, and values into your child&apos;s everyday life.</p>
            <div className="hero-actions"><BookDemo /><a className="text-link" href="#programs">Explore Programs <Arrow /></a></div>
            <div className="hero-note"><span className="check" aria-hidden="true">✓</span> A little curiosity is all they need. The first class is on us.</div>
          </div>
          <div className="hero-visual">
            <div className="hero-halo" aria-hidden="true" />
            <div className="hero-photo"><Image src="/middle4.png" alt="Two children enjoying an online lesson together at home" fill sizes="(max-width: 760px) 90vw, 46vw" preload /></div>
            <span className="image-flower" aria-hidden="true"><Lotus /></span>
            <div className="photo-caption"><span className="caption-icon"><Lotus /></span><div>Rooted in values.<br /><strong>Growing with joy.</strong></div></div>
            <span className="hero-image-note">A world of wisdom. Right at home.</span>
          </div>
        </section>
        </div>

        <div className="learning-strip"><div className="container learning-strip-inner"><span><span className="live-dot" /> Live, teacher-led classes</span><i /><span>Thoughtfully designed for ages 4–16</span><i /><span>Indian roots. Global families.</span></div></div>

        <section className="section container" id="programs" aria-labelledby="programs-title">
          <div className="section-top"><SectionHeading label="OUR PROGRAMS" id="programs-title" title="Ancient wisdom. Fresh beginnings." description="Two meaningful paths. A lifetime of discovery." /><span className="section-aside">Small steps to a deeper connection <span aria-hidden="true">↘</span></span></div>
          <div className="program-grid">{programs.map((program) => <article className={`program-card ${program.className}`} key={program.name}>
            <div className="program-image"><Image src={program.image} alt={program.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 250px" /></div>
            <div className="program-content"><p className="program-kicker">{program.subtitle}</p><h3>{program.name}</h3><p>{program.description}</p><ul className="program-themes">{program.themes.map(theme => <li key={theme}>{theme}</li>)}</ul><a className="text-link" href={program.href}>Explore Program <Arrow /></a></div>
          </article>)}</div>
        </section>

        <section className="why-section" id="why-vatoto" aria-labelledby="why-title"><div className="container why-layout">
          <div className="why-intro"><p className="eyebrow">THE VATOTO WAY</p><h2 id="why-title">More than learning.<br /><em>A sense of belonging.</em></h2><p>Not just verses to remember, but values to live by. A warm space for children to ask, discover, and grow.</p><a className="text-link" href="https://vatoto.live/about-us/">Get to know us <Arrow /></a></div>
          <div className="benefits">{[
            ["01", "Real teachers. Real connection.", "Live, interactive sessions with caring teachers who make every question feel welcome."],
            ["02", "Little minds, thoughtfully nurtured.", "Age-wise stories, activities, and conversations that meet your child where they are."],
            ["03", "Our culture, wherever you call home.", "A meaningful connection to Indian traditions, shared with families around the world."],
          ].map(([number, title, description]) => <div className="benefit" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
        </div></section>

        <section className="section container journey" id="how-it-works" aria-labelledby="journey-title"><SectionHeading label="A SIMPLE START" id="journey-title" title="Every journey begins with a little spark." description="We make the first step easy. You bring the curiosity." /><div className="journey-grid">{[
          ["01", "Book a free demo", "Meet a teacher, experience a live class, and see your child's curiosity come to life."],
          ["02", "Find their learning path", "Discover the right program and level, with a little guidance from our team."],
          ["03", "Let the journey unfold", "Build confidence, discover meaningful stories, and grow with every class."],
        ].map(([number, title, description]) => <div className="journey-step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div></section>

        <section className="container final-cta" aria-labelledby="cta-title"><div className="cta-lotus" aria-hidden="true"><Lotus /></div><p className="eyebrow">GIVE THEM ROOTS. WATCH THEM GROW.</p><h2 id="cta-title">A little learning today.<br />A lifelong connection tomorrow.</h2><p>Let your child experience the joy of learning with Vatoto.</p><BookDemo /><span className="cta-note">One free class. A world of possibility.</span></section>
      </main>
      <footer className="footer container"><div className="footer-top"><div><Link className="brand" href="/" aria-label="Vatoto home"><span className="brand-mark">v</span>vatoto<span className="brand-live">.live</span></Link><p>Modern learning. Timeless Indian wisdom.</p></div><nav aria-label="Footer navigation"><a href="#programs">Our Programs</a><a href="https://vatoto.live/faq/">FAQs</a><a href="mailto:learn@vatoto.live">Get in Touch <Arrow /></a></nav></div><div className="footer-bottom"><span>© 2026 Vatoto.live. All rights reserved.</span><div><a href="https://vatoto.live/privacy-policy/">Privacy Policy</a><a href="https://vatoto.live/terms-of-use/">Terms of Use</a><a href="https://vatoto.live/child-safety-policy/">Child Safety</a></div><span>Made for curious little minds.</span></div></footer>
    </>
  );
}
