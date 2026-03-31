"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Shield, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Über uns",
          id: "about",
        },
        {
          name: "Leistungen",
          id: "features",
        },
        {
          name: "Erfolge",
          id: "metrics",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="EG Closing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="EG Closing: Exzellenz in jedem Abschluss."
      description="Wir revolutionieren Ihren Vertrieb durch festangestellte High-Performer und exzellent geschulte externe Setzer und Closer. Maximieren Sie Ihre Abschlussrate."
      tag="Agentur für Vertriebsexzellenz"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grey-haired-senior-manager-handshaking-greeting-businesswoman_74855-9937.jpg?_wi=1",
          imageAlt: "Luxuriöse Vertriebsumgebung",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grey-haired-senior-manager-handshaking-greeting-businesswoman_74855-9937.jpg?_wi=2",
          imageAlt: "Professionelles Closing Team",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grey-haired-senior-manager-handshaking-greeting-businesswoman_74855-9937.jpg?_wi=3",
          imageAlt: "Vertriebsstrategie Meeting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grey-haired-senior-manager-handshaking-greeting-businesswoman_74855-9937.jpg?_wi=4",
          imageAlt: "High-Tech Verhandlungsraum",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grey-haired-senior-manager-handshaking-greeting-businesswoman_74855-9937.jpg?_wi=5",
          imageAlt: "Erfolgreicher Vertragsabschluss",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Top-Rated Closing Agency"
      tagIcon={Sparkles}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Ihr Partner für Skalierbarkeit"
      description="Mit unserem hybriden Ansatz – festangestellte Profis kombiniert mit einem selektierten Pool externer Spezialisten – garantieren wir maximale Schlagzahl bei höchster Qualität."
      tag="Über EG Closing"
      bulletPoints={[
        {
          title: "Festangestellte Closer",
          description: "Höchste Qualitätsstandards und interne Kontrolle.",
        },
        {
          title: "Externes Profi-Netzwerk",
          description: "Skalierbarkeit auf Abruf für kurzfristige Volumina.",
        },
        {
          title: "Full-Service Setting",
          description: "Vom ersten Call bis zum Unterschriften-reif-Status.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/sales-representative-meeting-with-his-manager_1098-2009.jpg?_wi=1"
      imageAlt="Vertriebsexpertise"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "High-Ticket Setting",
          description: "Wir qualifizieren Leads vor, bis sie closing-bereit sind.",
          icon: Zap,
        },
        {
          title: "Closing Operations",
          description: "Abschlussorientierte Kommunikation auf Augenhöhe.",
          icon: Shield,
        },
        {
          title: "Sales Performance Consulting",
          description: "Optimierung Ihrer internen Vertriebskanäle.",
          icon: Award,
        },
      ]}
      title="Unsere Vertriebs-Expertise"
      description="Präzise abgestimmte Prozesse, die aus Interessenten langfristige Partner machen."
      tag="Leistungsspektrum"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Ergebnisse, die zählen"
      tag="Performance Fakten"
      metrics={[
        {
          id: "m1",
          value: "150+",
          description: "Erfolgreiche Closings monatlich",
        },
        {
          id: "m2",
          value: "40%",
          description: "Steigerung der Conversion-Rate",
        },
        {
          id: "m3",
          value: "24/7",
          description: "Vertriebs-Support",
        },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Max Schmidt",
          date: "10.05.2024",
          title: "CEO",
          quote: "Die Zusammenarbeit mit EG Closing hat unsere Abschlussquoten massiv nach oben skaliert.",
          tag: "Kunde",
          avatarSrc: "http://img.b2bpic.net/free-photo/friendly-successful-business-lady-wearing-formal-suit-glasses-standing-with-arms-folded-smiling_74855-9932.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/grey-haired-senior-manager-handshaking-greeting-businesswoman_74855-9937.jpg?_wi=6",
          imageAlt: "luxury office corporate sales meeting",
        },
        {
          id: "2",
          name: "Sarah Müller",
          date: "12.06.2024",
          title: "Founder",
          quote: "Professionell, schnell und absolut ergebnisorientiert.",
          tag: "Kunde",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-black-man-wool-suit_613910-16027.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/sales-representative-meeting-with-his-manager_1098-2009.jpg?_wi=2",
          imageAlt: "professional sales agency consultant",
        },
        {
          id: "3",
          name: "Dirk Jansen",
          date: "05.07.2024",
          title: "Direktor",
          quote: "Endlich ein Partner, der versteht, wie man High-Ticket-Produkte verkauft.",
          tag: "Kunde",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-successful-businesswoman-suit-cross-arms-chest-smile-look-confident-stan_1258-118782.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-doing-ok-sign-while-holding-growth-chart_23-2148780644.jpg",
          imageAlt: "business sales growth graph analytics",
        },
        {
          id: "4",
          name: "Elena Weber",
          date: "20.08.2024",
          title: "COO",
          quote: "Die externe Unterstützung durch EG war der Wendepunkt für unser Wachstum.",
          tag: "Kunde",
          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-senior-business-man-relaxing_1262-2369.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/data-privacy-concept-with-wooden-blocks-with-words-lock-it-side-view_176474-10410.jpg",
          imageAlt: "secure sales closing concept",
        },
        {
          id: "5",
          name: "Lukas Meyer",
          date: "15.09.2024",
          title: "Owner",
          quote: "Ein unersetzliches Asset für unsere Skalierung.",
          tag: "Kunde",
          avatarSrc: "http://img.b2bpic.net/free-photo/friendly-successful-business-lady-wearing-formal-suit-glasses-standing-with-arms-folded-smiling_74855-9932.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/people-working-call-center_23-2149288217.jpg",
          imageAlt: "professional sales headset clean",
        },
      ]}
      title="Was unsere Partner sagen"
      description="Die besten im Markt setzen auf unsere Closing-Dienstleistung."
      tag="Referenzen"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Kontakt"
      title="Starten Sie Ihr Wachstum"
      description="Vereinbaren Sie ein kostenloses Erstgespräch."
      imageSrc="http://img.b2bpic.net/free-photo/woman-working-with-laptop-coffee-shop_53876-15993.jpg"
      mediaPosition="right"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Unternehmen",
          items: [
            {
              label: "Über uns",
              href: "#about",
            },
            {
              label: "Kontakt",
              href: "#contact",
            },
          ],
        },
        {
          title: "Rechtliches",
          items: [
            {
              label: "Impressum",
              href: "#",
            },
            {
              label: "Datenschutz",
              href: "#",
            },
          ],
        },
      ]}
      logoText="EG Closing"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
