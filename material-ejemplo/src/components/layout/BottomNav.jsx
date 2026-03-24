import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { NAV_ITEMS } from "../../data/navigation";

/**
 * BottomNav — Navegación inferior para dispositivos móviles.
 * Se fija al fondo de la pantalla y reemplaza al Sidebar en resoluciones pequeñas.
 */
export default function BottomNav({ navIndex, onNavChange }) {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderTop: "1px solid rgba(92,107,192,0.1)",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={navIndex}
        onChange={(_, v) => onNavChange(v)}
        showLabels
        sx={{ bgcolor: "background.paper" }}
      >
        {NAV_ITEMS.map(item => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={item.icon}
            sx={{ "&.Mui-selected": { color: "primary.main" }, fontSize: 11 }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
