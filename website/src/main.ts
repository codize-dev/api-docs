import { createApiReference } from "@scalar/api-reference";
import "@scalar/api-reference/style.css";
import openapi from "./openapi.json";

createApiReference("#app", {
  content: openapi,
  agent: {
    disabled: true,
  },
  showDeveloperTools: "never",
  hideClientButton: true,
  hideTestRequestButton: true,
});
