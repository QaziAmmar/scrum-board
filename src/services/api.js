export function loadLists() {
  return [
    {
      id: "1",
      title: "TO Do",
      creatable: true,
      cards: [
        {
          id: "1",
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#7159c1"],
          user:
            "https://www.gravatar.com/avatar/1b1d06d4c8ecfa1032fa7a297c4ae62c",
        },
        {
          id: "2",
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: ["#7159c1"],
          user:
            "https://www.gravatar.com/avatar/1b1d06d4c8ecfa1032fa7a297c4ae62c",
        },
        {
          id: "3",
          content: "Estudar módulo 03 de React Native",
          labels: ["#7159c1"],
          user:
            "https://www.gravatar.com/avatar/1b1d06d4c8ecfa1032fa7a297c4ae62c",
        },
        {
          id: "4",
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#54e1f7"],
          user:
            "https://www.gravatar.com/avatar/1b1d06d4c8ecfa1032fa7a297c4ae62c",
        },
        {
          id: "5",
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user:
            "https://www.gravatar.com/avatar/1b1d06d4c8ecfa1032fa7a297c4ae62c",
        },
      ],
    },
    {
      id: "2",
      title: "In Progress",
      creatable: false,
      cards: [
        {
          id: "6",
          content: "Recriando clone do Pipefy",
          labels: [],
          user:
            "https://www.gravatar.com/avatar/1b1d06d4c8ecfa1032fa7a297c4ae62c",
        },
      ],
    },
    {
      id: "3",
      title: "Done",
      creatable: false,
      cards: [
        {
          id: "7",
          content: "Gravar sobre Geolocalização e mapas com React Native",
          labels: ["#7159c1"],
          user:
            "https://www.gravatar.com/avatar/1b1d06d4c8ecfa1032fa7a297c4ae62c",
        },
        {
          id: "8",
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user:
            "https://www.gravatar.com/avatar/1b1d06d4c8ecfa1032fa7a297c4ae62c",
        },
        {
          id: "9",
          content: "Ajustes na biblioteca unform",
          labels: [],
        },
      ],
    },

  ];
}
