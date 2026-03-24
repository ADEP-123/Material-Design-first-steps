import { useState, useMemo } from "react";
import { COURSES } from "../data/courses";

/**
 * Hook central de lógica de cursos:
 * - Mantiene el curso seleccionado
 * - Filtra cursos por texto de búsqueda
 * - Gestiona el estado de navegación móvil (mostrar detalle o lista)
 */
export function useCourseFilter() {
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0]);
  const [search, setSearch] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  const filteredCourses = useMemo(
    () =>
      COURSES.filter(
        c =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.category.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  // Al seleccionar un curso en móvil, cambia a la vista de detalle
  const handleSelectCourse = (course, isMobile) => {
    setSelectedCourse(course);
    if (isMobile) setShowDetail(true);
  };

  const handleBackToList = () => setShowDetail(false);

  return {
    selectedCourse,
    search,
    setSearch,
    showDetail,
    filteredCourses,
    handleSelectCourse,
    handleBackToList,
  };
}
