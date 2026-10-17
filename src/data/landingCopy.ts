/**
 * The same fake product copy renders in every style demo,
 * so the ONLY thing that changes between views is the visual style.
 */
export const landing = {
  eyebrow: "Design Tools",
  product: "Lumio",
  navLinks: ["Features", "Pricing", "About"],
  heroTitle: "Turn messy ideas into finished designs",
  heroSubtitle:
    "Lumio is the canvas, copilot and export pipeline your team needs — inside one calm workspace.",
  ctaPrimary: "Start free",
  ctaSecondary: "Watch demo",
  featuresHeading: "Everything you need",
  featureCards: [
    {
      title: "Realtime canvas",
      desc: "Sketch, iterate and present together — every change syncs in under 50 ms.",
    },
    {
      title: "AI copilot",
      desc: "Generate layouts, palettes and copy that match your brand from day one.",
    },
    {
      title: "One-click export",
      desc: "Ship pixel-perfect assets for web, iOS and Android with no handoff meetings.",
    },
  ],
  testimonial: {
    quote: "Lumio cut our design cycle in half. It feels like the canvas is reading my mind.",
    name: "Maya Chen",
    role: "Head of Design, Northwind",
  },
  pricingHeading: "Simple pricing",
  pricingNote: "No credit card required · Cancel anytime",
  plans: [
    { name: "Starter", price: "$9", period: "/mo", desc: "For solo makers", cta: "Get started" },
    {
      name: "Pro",
      price: "$19",
      period: "/mo",
      desc: "For freelancers and small studios",
      cta: "Get started",
      popular: true,
    },
    { name: "Team", price: "$49", period: "/mo", desc: "Unlimited editors, SSO and SLAs", cta: "Contact sales" },
  ],
  footerLinks: ["Twitter", "GitHub", "Contact"],
  copyright: "© 2026 Lumio. All rights reserved.",
};

type Plan = {
  name: string;
  price: string;
  period: string;
  desc: string;
  cta: string;
  popular?: boolean;
};
landing.plans = landing.plans as Plan[];
