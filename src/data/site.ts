export const site = {
  email: "theplaygroundvc@outlook.com",
  instagram: "@theplaygroundvc",
  instagramUrl: "https://www.instagram.com/theplaygroundvc/",
  linkedinUrl: "https://www.linkedin.com/company/theplaygroundvc/",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/join", label: "Join as Founder" },
  { to: "/contact", label: "Contact" },
];

export const contactLinks = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Instagram", value: site.instagram, href: site.instagramUrl },
  { label: "LinkedIn", value: "The Playground", href: site.linkedinUrl },
];
