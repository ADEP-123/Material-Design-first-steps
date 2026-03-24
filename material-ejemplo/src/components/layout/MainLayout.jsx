import { Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

/**
 * MainLayout — Estructura raíz de la aplicación.
 * Coordina Sidebar (desktop), TopBar y BottomNav (mobile).
 * Expone el área de contenido central como children.
 */
export default function MainLayout({ search, onSearchChange, children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [navIndex, setNavIndex] = useState(1);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      {/* Sidebar visible solo en tablet y desktop */}
      {!isMobile && <Sidebar navIndex={navIndex} onNavChange={setNavIndex} />}

      {/* Columna principal: TopBar + contenido */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <TopBar
          search={search}
          onSearchChange={onSearchChange}
          isMobile={isMobile}
        />

        {/* Área de contenido principal (inyectado desde App) */}
        <Box
          component="main"
          sx={{
            flex: 1,
            display: "flex",
            overflow: "hidden",
            // Deja espacio al fondo para el BottomNav en móvil
            pb: isMobile ? "56px" : 0,
          }}
        >
          {children}
        </Box>
      </Box>

      {/* BottomNav visible solo en móvil */}
      {isMobile && <BottomNav navIndex={navIndex} onNavChange={setNavIndex} />}
    </Box>
  );
}
