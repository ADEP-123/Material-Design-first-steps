import { Box, Typography } from "@mui/material";
import CourseCard from "./CourseCard";
import EmptyState from "./EmptyState";

/**
 * CourseList — Panel izquierdo del layout list-detail.
 * Renderiza el encabezado de sección, la lista de tarjetas y el estado vacío.
 */
export default function CourseList({ courses, selectedId, onSelect, search }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "100%", md: "380px" },
        flexShrink: 0,
        borderRight: { md: "1px solid rgba(92,107,192,0.1)" },
        overflowY: "auto",
        p: { xs: 2, md: 2.5 },
      }}
    >
      {/* Encabezado de sección */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h6">Mis Cursos</Typography>
          <Typography variant="caption" color="text.secondary">
            {courses.length} curso{courses.length !== 1 ? "s" : ""} encontrado
            {courses.length !== 1 ? "s" : ""}
          </Typography>
        </Box>
      </Box>

      {/* Lista de cursos o estado vacío */}
      {courses.length === 0 ? (
        <EmptyState query={search} />
      ) : (
        courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            selected={selectedId === course.id}
            onSelect={onSelect}
          />
        ))
      )}
    </Box>
  );
}
