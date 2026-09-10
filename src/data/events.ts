export type PlaygroundEvent = {
  tag: string;
  window: string;
  title: string;
  partners?: string;
  short: string;
  long: string;
};

export const upcoming: PlaygroundEvent[] = [
  {
    tag: "01",
    window: "August 2026",
    title: "Inter-University Founder Summit",
    partners: "In partnership with McMaster University & the University of Waterloo",
    short:
      "A cross-campus gathering that brings Queen's founders together with builders from McMaster and Waterloo.",
    long: "This August, The Playground joins forces with student builders from McMaster University and the University of Waterloo for a three-school founder summit. Expect hands-on workshops, founder-to-founder networking, and collaborative sessions designed to connect three of Ontario's strongest entrepreneurial communities. It is the fastest way to widen your network beyond a single campus and pressure-test your venture against a broader room.",
  },
  {
    tag: "02",
    window: "Fall 2026",
    title: "Founders' Cottage Retreat",
    short: "An off-grid weekend to reset, build real relationships, and return with sharper conviction.",
    long: "The Cottage Retreat is our deliberate step away from the grind. We take our founders off-grid for a weekend to slow down, build the kind of relationships that outlast any single venture, and do the deeper thinking that a busy semester never allows. Founders leave with a clearer head, a tighter community, and renewed conviction about what they are building.",
  },
  {
    tag: "03",
    window: "Fall 2026",
    title: "Fall Pitch Competition",
    short: "Our flagship showcase, student ventures pitch live for funding and mentorship.",
    long: "The Fall Pitch Competition is The Playground's marquee event of the term. Student ventures take the stage to pitch live in front of a panel of investors, operators, and alumni, competing for funding and mentorship to take their idea to the next stage. It is a real deadline, a real audience, and a real catalyst, exactly the kind of forcing function that turns an idea into a company.",
  },
];

export const archive = [
  { title: "Launch Night", note: "Our first event", photo: "/events/pitchnight.png" },
];
