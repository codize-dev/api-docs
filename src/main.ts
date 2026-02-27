import { createApiReference } from "@scalar/api-reference";
import "@scalar/api-reference/style.css";

createApiReference("#app", {
  url: "https://codize.dev/api/v1/openapi.json",
  agent: {
    disabled: true,
  },
  showDeveloperTools: "never",
  hideClientButton: true,
  hideTestRequestButton: true,
});
