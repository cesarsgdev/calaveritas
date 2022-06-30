import { updateCalaverita } from "./apiCalls";

export const changeBGColorComplete = (color) => {
  updateCalaverita(id, { properties: { bgColor: color.rgb } });
};
