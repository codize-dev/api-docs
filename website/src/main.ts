import { createApiReference } from "@scalar/api-reference";
import "@scalar/api-reference/style.css";

createApiReference("#app", {
  url: "http://127.0.0.1:3000/api/v1/openapi.json",
  agent: {
    disabled: true,
  },
  showDeveloperTools: "never",
  hideClientButton: true,
  hideTestRequestButton: true,
});
