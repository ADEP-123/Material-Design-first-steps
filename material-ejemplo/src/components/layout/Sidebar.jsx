import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Paper,
  LinearProgress,
} from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { NAV_ITEMS } from "../../data/navigation";

const SIDEBAR_WIDTH = 240;

/**
 * Sidebar — Panel de navegación lateral para tablet y desktop.
 * Contiene el logo, los ítems de navegación y la tarjeta de usuario.
 * Se oculta automáticamente en mobile (el componente padre lo controla con isMobile).
 */
export default function Sidebar({ navIndex, onNavChange }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
          bgcolor: "background.paper",
          pt: 1,
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{ px: 3, py: 2.5, display: "flex", alignItems: "center", gap: 1.5 }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 2,
            background: "linear-gradient(135deg, #5C6BC0, #7E57C2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SchoolRoundedIcon sx={{ color: "#fff", fontSize: 20 }} />
        </Box>
        <Typography variant="h6" color="primary.main">
          EduPanel
        </Typography>
      </Box>

      <Divider sx={{ mx: 2, mb: 1 }} />

      {/* Ítems de navegación */}
      <List sx={{ px: 1.5 }}>
        {NAV_ITEMS.map((item, i) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={navIndex === i}
              onClick={() => onNavChange(i)}
              sx={{
                borderRadius: 2.5,
                "&.Mui-selected": {
                  bgcolor: "rgba(92,107,192,0.12)",
                  color: "primary.main",
                  "& .MuiListItemIcon-root": { color: "primary.main" },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: navIndex === i ? 700 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Tarjeta de progreso del usuario */}
      <Box sx={{ mt: "auto", p: 2 }}>
        <Paper
          elevation={0}
          sx={{ p: 2, borderRadius: 3, bgcolor: "rgba(92,107,192,0.07)" }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}
          >
            <Avatar
              sx={{ bgcolor: "#5C6BC0", width: 34, height: 34, fontSize: 14 }}
            >
              JD
            </Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize={13}>
                Juan Dev
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Pro Plan
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" color="text.secondary">
            3 de 5 cursos activos
          </Typography>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{
              mt: 0.5,
              borderRadius: 4,
              height: 5,
              bgcolor: "rgba(92,107,192,0.15)",
            }}
          />
        </Paper>
      </Box>
    </Drawer>
  );
}
