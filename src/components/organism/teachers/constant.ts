enum SocialMedia {
  Instagram = "Instagram",
  Youtube = "Youtube",
  Facebook = "Facebook",
}

export type TeacherType = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  classes: { class: string; time: string }[];
  info: {
    social: { link: string; type: SocialMedia }[];
    instruments: { name: string }[];
  };
};

export const teachers: Array<TeacherType> = [
  {
    id: "1",
    name: "teacher1.name",
    role: "teacher1.role",
    avatar: "/images/teachers/teacher1.jpg",
    classes: [
      { class: "teacher1.class1.name", time: "teacher1.class1.time" },
      { class: "teacher1.class2.name", time: "teacher1.class2.time" },
    ],
    info: {
      social: [
        {
          link: "https://instagram.com",
          type: SocialMedia.Instagram,
        },
      ],
      instruments: [{ name: "piano" }, { name: "violin" }, { name: "guitar" }],
    },
  },
  {
    id: "2",
    name: "teacher2.name",
    role: "teacher2.role",
    avatar: "/images/teachers/teacher2.jpg",
    classes: [
      { class: "teacher1.class1.name", time: "teacher1.class1.time" },
      { class: "teacher1.class2.name", time: "teacher1.class2.time" },
    ],
    info: {
      social: [
        { link: "https://youtube.com", type: SocialMedia.Youtube },
        {
          link: "https://instagram.com",
          type: SocialMedia.Instagram,
        },
      ],
      instruments: [{ name: "piano" }, { name: "violin" }, { name: "guitar" }],
    },
  },
  {
    id: "3",
    name: "teacher3.name",
    role: "teacher3.role",
    avatar: "/images/teachers/teacher3.jpg",
    classes: [
      { class: "teacher1.class1.name", time: "teacher1.class1.time" },
      { class: "teacher1.class2.name", time: "teacher1.class2.time" },
    ],
    info: {
      social: [
        { link: "https://youtube.com", type: SocialMedia.Youtube },
        {
          link: "https://instagram.com",
          type: SocialMedia.Instagram,
        },
      ],
      instruments: [{ name: "piano" }, { name: "violin" }, { name: "guitar" }],
    },
  },
  {
    id: "4",
    name: "teacher4.name",
    role: "teacher4.role",
    avatar: "/images/teachers/teacher4.jpg",
    classes: [
      { class: "teacher1.class1.name", time: "teacher1.class1.time" },
      { class: "teacher1.class2.name", time: "teacher1.class2.time" },
    ],
    info: {
      social: [
        { link: "https://youtube.com", type: SocialMedia.Youtube },
        {
          link: "https://instagram.com",
          type: SocialMedia.Instagram,
        },
      ],
      instruments: [{ name: "violin" }, { name: "guitar" }],
    },
  },
  {
    id: "5",
    name: "teacher5.name",
    role: "teacher5.role",
    avatar: "/images/teachers/teacher5.jpg",
    classes: [
      { class: "teacher1.class1.name", time: "teacher1.class1.time" },
      { class: "teacher1.class2.name", time: "teacher1.class2.time" },
    ],
    info: {
      social: [
        { link: "https://youtube.com", type: SocialMedia.Youtube },
        {
          link: "https://instagram.com",
          type: SocialMedia.Instagram,
        },
      ],
      instruments: [{ name: "piano" }],
    },
  },
  {
    id: "6",
    name: "teacher6.name",
    role: "teacher6.role",
    avatar: "/images/teachers/teacher6.jpg",
    classes: [
      { class: "teacher1.class1.name", time: "teacher1.class1.time" },
      { class: "teacher1.class2.name", time: "teacher1.class2.time" },
    ],
    info: {
      social: [
        { link: "https://youtube.com", type: SocialMedia.Youtube },
        {
          link: "https://instagram.com",
          type: SocialMedia.Instagram,
        },
        {
          link: "https://facebook.com",
          type: SocialMedia.Facebook,
        },
      ],
      instruments: [{ name: "piano" }, { name: "violin" }, { name: "guitar" }],
    },
  },
];

export const breadCrumbs = [
  { title: "breadCrumbs.home", link: "/" },
  { title: "teachers.breadCrumbs.main" },
];

export const passTeacherData = (id: string) => {
  const index = teachers.findIndex((teacher) => teacher.id === id);
  return teachers[index];
};
