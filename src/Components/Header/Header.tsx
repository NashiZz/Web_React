import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Box} from "@mui/system";

function Header() {
  return (
    <Box fontFamily={'Raleway, Arial'} sx={{ flexGrow: 1 ,}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width="100px" src="src\assets\logo.png" alt="" />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 35 }}>
            Frieren Beyond Journey's End
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Story</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Character</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;