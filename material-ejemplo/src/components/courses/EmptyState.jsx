import { Box, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

/**
 * EmptyState — Mensaje cuando la búsqueda no encuentra resultados.
 * Principio MD3: estados vacíos deben ser claros y orientativos.
 */
export default function EmptyState({ query }) {
  return (
    <Box sx={{ textAlign: "center", py: 6, color: "text.secondary" }}>
      <SearchRoundedIcon sx={{ fontSize: 40, opacity: 0.3, mb: 1 }} />
      <Typography variant="body2">
        Sin resultados para &ldquo;{query}&rdquo;
      </Typography>
    </Box>
  );
}
