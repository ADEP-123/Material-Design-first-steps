import { ThemeProvider, CssBaseline, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import theme from "./theme/index";
import { useCourseFilter } from "./hooks/useCourseFilter";

import MainLayout from "./components/layout/MainLayout";
import CourseList from "./components/courses/CourseList";
import CourseDetail from "./components/courses/CourseDetail";

/**
 * App — Componente raíz de EduPanel.
 *
 * Responsabilidades:
 *   1. Proveer el tema MUI con ThemeProvider
 *   2. Conectar el hook useCourseFilter con la UI
 *   3. Orquestar el layout list-detail responsive:
 *      - Móvil: lista O detalle (alternados)
 *      - Desktop: lista + detalle en paralelo
 */
function EduPanelContent() {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const {
    selectedCourse,
    search,
    setSearch,
    showDetail,
    filteredCourses,
    handleSelectCourse,
    handleBackToList,
  } = useCourseFilter();

  return (
    <MainLayout search={search} onSearchChange={setSearch}>
      {/* Panel izquierdo — oculto en móvil cuando se muestra el detalle */}
      {(!isMobile || !showDetail) && (
        <CourseList
          courses={filteredCourses}
          selectedId={selectedCourse?.id}
          search={search}
          onSelect={course => handleSelectCourse(course, isMobile)}
        />
      )}

      {/* Panel derecho — oculto en móvil cuando se muestra la lista */}
      {(!isMobile || showDetail) && (
        <CourseDetail
          course={selectedCourse}
          onBack={handleBackToList}
          isMobile={isMobile}
        />
      )}
    </MainLayout>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EduPanelContent />
    </ThemeProvider>
  );
}
