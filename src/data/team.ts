export type Member = {
  name: string;
  role: string;
  photo: string | null;
};

export type TeamGroup = {
  name: string;
  blurb: string;
  members: Member[];
};

export const teams: TeamGroup[] = [
  {
    name: "Directors",
    blurb: "The two setting the direction and holding the vision.",
    members: [
      { name: "Paolo de Lucia", role: "Director", photo: "paolodelucia.jpg" },
      { name: "Adam Komet", role: "Director", photo: "adamkomet.jpg" },
    ],
  },
  {
    name: "External Relations",
    blurb: "Partnerships, sponsors, and the world beyond campus.",
    members: [
      { name: "Shayan Mardaneh", role: "Director", photo: "shayanmardaneh.jpg" },
    ],
  },
  {
    name: "Investor Relations",
    blurb: "Building the bridges to capital and the people behind it.",
    members: [
      { name: "Jacqueline Seitz", role: "Director", photo: "jacquelineseitz.png" },
      { name: "Emma Lefebvre", role: "Coordinator", photo: "emmalefebvre.png" },
    ],
  },
  {
    name: "Internal Growth",
    blurb: "Developing the people who make The Playground run.",
    members: [
      { name: "Justen Gard", role: "Director of Internal Growth", photo: "justengard.jpg" },
      { name: "Gabriel Codispoti", role: "Coordinator", photo: "gabrielcodispoti.png" },
    ],
  },
  {
    name: "External Growth",
    blurb: "Expanding the network and the pipeline of founders.",
    members: [
      { name: "Simon", role: "Director of External Growth", photo: null },
      { name: "Rosi Kalff", role: "Coordinator", photo: null },
    ],
  },
  {
    name: "Programming",
    blurb: "Designing the events, sessions, and founder experience.",
    members: [
      { name: "Jessica Lavender", role: "Director", photo: "jessicalavender.jpg" },
      { name: "Kevin Valencia", role: "Coordinator", photo: "kevinvalencia.png" },
    ],
  },
  {
    name: "Innovation",
    blurb: "Pushing what The Playground can build and become.",
    members: [
      { name: "Elias Evans", role: "Director", photo: "eliasevans.jpg" },
      { name: "Ezekiel Madruga", role: "Director", photo: "ezekielmadruga.png" },
      { name: "Tanry Wang", role: "Coordinator", photo: "tanrywang.jpg" },
    ],
  },
  {
    name: "Operations",
    blurb: "The logistics engine keeping everything moving.",
    members: [{ name: "Nicholas Bulick", role: "Director", photo: "nicholasbulick.png" }],
  },
  {
    name: "Culture & Community",
    blurb: "Protecting the spirit that makes people want to be here.",
    members: [{ name: "Jordan Brading", role: "Director", photo: "jordanbrading.jpg" }],
  },
];
