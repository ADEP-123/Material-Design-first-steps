const AVATAR_COLORS = ["#5C6BC0", "#7E57C2", "#26A69A", "#F57C00", "#EC407A"];

// Genera un color de avatar determinista basado en el nombre del instructor
export const getAvatarColor = (name = "") =>
  AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
