import { createApiReference } from "@scalar/api-reference";
import "@scalar/api-reference/style.css";

const baseUrl = import.meta.env.DEV
  ? "http://127.0.0.1:3000"
  : "https://codize.dev";

createApiReference("#app", {
  url: new URL("/api/v1/openapi.json", baseUrl).href,
  agent: {
    disabled: true,
  },
  showDeveloperTools: "never",
  hideClientButton: true,
  hideTestRequestButton: true,
  hideDownloadButton: true,
});
