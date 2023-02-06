import swaggerDefinition from "./swagger.json";
import { customCss } from "./theme/customCss";

export const definitions = {
  swaggerDefinition,
  apis: [`./src/**/*.yaml`],
};

export const options = { customCss };
