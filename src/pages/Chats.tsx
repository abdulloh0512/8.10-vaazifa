import {
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import ChatItem from "../components/ChatItem";
import List from "@mui/material/List";
import ChatRoom from "./ChatRoom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import UserInfo from "../components/UserInfo";

const Chats = () => {
  return (
    <>
      <CssBaseline />

      <Grid container>
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 330,
              border: 1,
              marginLeft: 1,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search users"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </List>
        </Grid>
        <Grid
          item
          xs={false}
          sm={8}
          md={6}
          component={Paper}
          borderLeft={1}
          borderRadius={0}
          sx={{ height: "100vh" }}
        >
          <ChatRoom />
        </Grid>
        <Grid
          item
          xs={false}
          sm={false}
          md={3}
          component={Paper}
          borderLeft={1}
          borderRadius={0}
          sx={{ height: "100vh" }}
        >
          User Info
          <ChatItem />
          <UserInfo/>
        </Grid>
      </Grid>
    </>
  );
};

export default Chats;
