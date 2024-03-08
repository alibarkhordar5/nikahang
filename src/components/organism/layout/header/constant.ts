export type HeaderItemType = {
  title: string;
  link: string;
  subRoutes?: { title: string; link: string }[];
  imageUrl?: string;
};

export const pages: HeaderItemType[] = [
  {
    title: "courses",
    link: "/courses",
    subRoutes: [
      { title: "courses.persian", link: "/courses/persian" },
      { title: "courses.foreign", link: "/courses/foreign" },
      { title: "courses.kids", link: "/courses/kids" },
    ],
  },
  { title: "teachers", link: "/teachers" },
  {
    title: "instruments",
    link: "/instruments",
    subRoutes: [
      { title: "instruments.piano", link: "/blog/piano" },
      { title: "instruments.guitar", link: "/blog/guitar" },
      { title: "instruments.violin", link: "/blog/violin" },
      { title: "instruments.setar", link: "/blog/setar" },
      { title: "instruments.dulcimer", link: "/blog/dulcimer" },
      { title: "instruments.xylophone", link: "/blog/xylophone" },
      {
        title: "instruments.electricGuitar",
        link: "/blog/electricGuitar",
      },
    ],
    imageUrl: "/images/instruments/black-guitar.jpeg",
  },
  { title: "gallery", link: "/gallery" },
  { title: "podcasts", link: "/podcasts" },
  { title: "blog", link: "/blog" },
  { title: "about", link: "/aboutUs" },
  { title: "contactUs", link: "/contactUs" },
];
