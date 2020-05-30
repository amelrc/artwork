export const data = {
  painting: {
    series: [
      { id: 1, serie: "inedito", text: "inedito" },
      { id: 2, serie: "b/w", text: "lorem ipsum" }
    ],
    inedito: [
      {
        id: 1,
        image: "string",
        title: "single",
        technique: "technique",
        sold: true,
        overview: "overview"
      }
    ],
    bw: [
      {
        id: 1,
        image: "string",
        name: "b/w",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 2,
        image: "string",
        name: "single",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 3,
        image: "string",
        name: "single",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 4,
        image: "string",
        name: "single",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 5,
        image: "string",
        name: "single",
        technique: "technique",
        sold: true,
        overview: "overview"
      }
    ],
    sunya: [
      {
        id: 1,
        image: "string",
        name: "b/w",
        technique: "technique",
        sold: true,
        overview: "overview"
      }
    ]
  },
  drawing: {
    series: [{ id: 1, serie: "untitled", text: "inedito" }],

    untitled: [
      {
        id: 6,
        image: "string",
        name: "single",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 7,
        image: "string",
        title: "title",
        technique: "technique",
        sold: true,
        overview: "overview"
      }
    ]
  },

  cutpaper: {
    series: [{ id: 1, serie: "sunya", text: "inedito" }],
    sunya: [
      {
        id: 1,
        image: "string",
        title: "title",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 1,
        image: "string",
        title: "title",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 1,
        image: "string",
        title: "title",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 1,
        image: "string",
        title: "title",
        technique: "technique",
        sold: true,
        overview: "overview"
      },
      {
        id: 1,
        image: "string",
        title: "title",
        technique: "technique",
        sold: true,
        overview: "overview"
      }
    ]
  },

  design: {
    series: [
      { id: 1, serie: "architectural", text: "inedito" },
      { id: 1, serie: "sketches" }
    ]
  },
  lamps: [
    {
      id: 1,
      image: "string",
      title: "title",
      technique: "technique",
      sold: true,
      overview: "overview"
    },
    {
      id: 1,
      image: "string",
      title: "title",
      technique: "technique",
      sold: true,
      overview: "overview"
    },
    {
      id: 1,
      image: "string",
      title: "title",
      technique: "technique",
      sold: true,
      overview: "overview"
    }
  ],
  sketches: [
    {
      id: 1,
      image: "string"
    }
  ],

  about: {
    contact: {
      email: "email",
      phone: "phone"
    },
    me: { intro: "heading", sub: "sub", body: "body" }
  },
  bio: {
    about: "me",
    exhibitions: {
      title: "title",
      year: 2000,
      location: "location"
    }
  }
};
console.log(data.painting.series.map(s => s.id));
