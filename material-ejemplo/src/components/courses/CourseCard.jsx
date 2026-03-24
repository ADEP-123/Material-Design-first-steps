import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  Chip,
  LinearProgress,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { getCategoryBg, getCategoryText } from "../../utils/categoryHelpers";

/**
 * CourseCard — Tarjeta individual de curso en el panel de lista.
 * Muestra categoría, estado, título, instructor y barra de progreso.
 * Se resalta visualmente cuando está seleccionada.
 */
export default function CourseCard({ course, selected, onSelect }) {
  const isComplete = course.progress === 100;

  return (
    <Card
      sx={{
        mb: 1.5,
        cursor: "pointer",
        border: selected ? "2px solid" : "1px solid rgba(92,107,192,0.1)",
        borderColor: selected ? "primary.main" : "transparent",
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 6px 20px rgba(92,107,192,0.14)",
        },
      }}
    >
      <CardActionArea onClick={() => onSelect(course)} sx={{ p: 0 }}>
        <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
          {/* Fila superior: categoría + estado */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Chip
              label={course.category}
              size="small"
              sx={{
                bgcolor: getCategoryBg(course.category),
                color: getCategoryText(course.category),
                fontWeight: 600,
                fontSize: 11,
                height: 22,
              }}
            />
            <Chip
              icon={
                isComplete ? (
                  <CheckCircleRoundedIcon sx={{ fontSize: 14 }} />
                ) : (
                  <TrendingUpRoundedIcon sx={{ fontSize: 14 }} />
                )
              }
              label={course.status}
              size="small"
              color={course.statusColor}
              variant={isComplete ? "filled" : "outlined"}
              sx={{ fontWeight: 600, fontSize: 11, height: 22 }}
            />
          </Box>

          {/* Título */}
          <Typography variant="subtitle2" sx={{ mb: 0.5, lineHeight: 1.4 }}>
            {course.title}
          </Typography>

          {/* Instructor */}
          <Typography variant="caption" color="text.secondary">
            {course.instructor}
          </Typography>

          {/* Barra de progreso */}
          <Box sx={{ mt: 1.5 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
            >
              <Typography variant="caption" color="text.secondary">
                Progreso
              </Typography>
              <Typography
                variant="caption"
                fontWeight={700}
                color="primary.main"
              >
                {course.progress}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={course.progress}
              color={isComplete ? "success" : "primary"}
              sx={{
                borderRadius: 4,
                height: 6,
                bgcolor: "rgba(92,107,192,0.1)",
              }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
