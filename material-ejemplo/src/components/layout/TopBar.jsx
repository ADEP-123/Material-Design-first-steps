import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Badge,
  Box,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

/**
 * TopBar — Barra superior de la aplicación.
 * Muestra el nombre de la plataforma en móvil, el buscador,
 * notificaciones y el botón de acción principal.
 */
export default function TopBar({ search, onSearchChange, isMobile }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid rgba(92,107,192,0.08)",
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ gap: 2, px: { xs: 2, md: 3 } }}>
        {/* Nombre de la plataforma — solo visible en móvil (el sidebar lo muestra en desktop) */}
        {isMobile && (
          <Typography
            variant="h6"
            color="primary.main"
            fontWeight={700}
            sx={{ mr: 1 }}
          >
            EduPanel
          </Typography>
        )}

        {/* Campo de búsqueda */}
        <TextField
          size="small"
          placeholder="Buscar cursos..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon fontSize="small" color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
            maxWidth: 360,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              bgcolor: "background.default",
              "& fieldset": { border: "none" },
            },
          }}
        />

        <Box sx={{ flex: 1 }} />

        {/* Notificaciones */}
        <IconButton size="small" sx={{ color: "text.secondary" }}>
          <Badge badgeContent={2} color="primary">
            <NotificationsNoneRoundedIcon />
          </Badge>
        </IconButton>

        {/* Acción principal */}
        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          size={isMobile ? "small" : "medium"}
          sx={{
            background: "linear-gradient(135deg, #5C6BC0, #7E57C2)",
            boxShadow: "0 3px 10px rgba(92,107,192,0.35)",
            whiteSpace: "nowrap",
          }}
        >
          {isMobile ? "Nuevo" : "Nuevo curso"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
