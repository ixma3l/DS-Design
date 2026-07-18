import type { Preview } from "@storybook/react-vite";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    layout: "centered",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          "Introducción",
          "Fundamentos",
          "Componentes",
          [
            "Acciones",
            "Formularios",
            "Navegación",
            "Contenedores",
            "Retroalimentación",
          ],
        ],
      },
    },

    backgrounds: {
      options: {
        light: {
          name: "Claro",
          value: "#ffffff",
        },
        dark: {
          name: "Oscuro",
          value: "#0f172a",
        },
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
