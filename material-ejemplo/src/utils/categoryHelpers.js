import { CATEGORY_COLORS } from "../theme/palette";

// Retorna el color de fondo del chip según la categoría del curso
export const getCategoryBg = category =>
  CATEGORY_COLORS[category]?.bg ?? "#F5F5F5";

// Retorna el color de texto del chip según la categoría del curso
export const getCategoryText = category =>
  CATEGORY_COLORS[category]?.text ?? "#555555";
