import {
  Box,
  Typography,
  Chip,
  LinearProgress,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { getAvatarColor } from "../../utils/avatarHelpers";
import { getCategoryBg, getCategoryText } from "../../utils/categoryHelpers";

/**
 * CourseDetail — Panel derecho del layout list-detail.
 * Muestra toda la información del curso seleccionado:
 * cabecera con gradiente, descripción, progreso, instructor, tags y acciones.
 * Si no hay curso seleccionado, muestra un placeholder.
 */
export default function CourseDetail({ course, onBack, isMobile }) {
  if (!course) return <Placeholder />;

  const isComplete = course.progress === 100;

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Botón de regreso — solo visible en móvil */}
      {isMobile && (
        <Box sx={{ px: 2, pt: 2 }}>
          <Button
            variant="text"
            size="small"
            onClick={onBack}
            sx={{ color: "primary.main", pl: 0 }}
          >
            ← Volver a cursos
          </Button>
        </Box>
      )}

      <Box sx={{ p: { xs: 2, md: 3 } }}>
        {/* Cabecera con gradiente */}
        <Box
          sx={{
            borderRadius: 3,
            p: 3,
            mb: 3,
            background: "linear-gradient(135deg, #5C6BC0 0%, #7E57C2 100%)",
            color: "#fff",
          }}
        >
          <Chip
            label={course.category}
            size="small"
            sx={{
              bgcolor: "rgba(255,255,255,0.25)",
              color: "#fff",
              fontWeight: 600,
              mb: 1.5,
            }}
          />
          <Typography variant="h5" sx={{ mb: 1, lineHeight: 1.3 }}>
            {course.title}
          </Typography>

          {/* Metadatos del curso */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTimeRoundedIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{course.duration}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <StarRoundedIcon sx={{ fontSize: 16, color: "#FFD54F" }} />
              <Typography variant="caption">
                {course.rating} · {course.enrolled.toLocaleString()} alumnos
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FolderRoundedIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">
                {course.lessons} lecciones
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Descripción */}
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Descripción
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.8 }}
        >
          {course.description}
        </Typography>

        {/* Progreso */}
        <Paper
          elevation={0}
          sx={{ p: 2.5, borderRadius: 3, bgcolor: "background.default", mb: 3 }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="subtitle2">Tu progreso</Typography>
            <Typography variant="subtitle2" color="primary.main">
              {course.progress}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={course.progress}
            color={isComplete ? "success" : "primary"}
            sx={{ borderRadius: 4, height: 8, bgcolor: "rgba(92,107,192,0.1)" }}
          />
          {isComplete && (
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}
            >
              <CheckCircleRoundedIcon color="success" sx={{ fontSize: 18 }} />
              <Typography
                variant="caption"
                color="success.main"
                fontWeight={600}
              >
                ¡Curso completado!
              </Typography>
            </Box>
          )}
        </Paper>

        {/* Instructor */}
        <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
          Instructor
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <Avatar
            sx={{
              bgcolor: getAvatarColor(course.instructor),
              width: 48,
              height: 48,
              fontWeight: 700,
            }}
          >
            {course.instructor[0]}
          </Avatar>
          <Box>
            <Typography variant="subtitle2">{course.instructor}</Typography>
            <Typography variant="caption" color="text.secondary">
              Instructor certificado
            </Typography>
          </Box>
        </Box>

        {/* Tecnologías / Tags */}
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Tecnologías
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
          {course.tags.map(tag => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              size="small"
              sx={{
                borderColor: "primary.light",
                color: "primary.dark",
                fontWeight: 600,
              }}
            />
          ))}
        </Box>

        {/* Botones de acción */}
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Button
            variant="contained"
            startIcon={<PlayArrowRoundedIcon />}
            sx={{
              flex: 1,
              py: 1.5,
              background: "linear-gradient(135deg, #5C6BC0 0%, #7E57C2 100%)",
              boxShadow: "0 4px 14px rgba(92,107,192,0.4)",
            }}
          >
            {isComplete ? "Revisar" : "Continuar"}
          </Button>
          <Button
            variant="outlined"
            startIcon={<FolderRoundedIcon />}
            sx={{
              flex: 1,
              py: 1.5,
              borderColor: "primary.main",
              color: "primary.main",
            }}
          >
            Ver recursos
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

// Estado vacío cuando no hay curso seleccionado
function Placeholder() {
  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        py: 8,
      }}
    >
      <SchoolRoundedIcon sx={{ fontSize: 64, opacity: 0.2 }} />
      <Typography variant="subtitle1" color="text.secondary">
        Selecciona un curso para ver su detalle
      </Typography>
    </Box>
  );
}
