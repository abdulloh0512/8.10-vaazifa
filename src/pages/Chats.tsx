import { CssBaseline, Grid,  Paper } from "@mui/material";
import ChatItem from "../components/ChatItem";
import List from "@mui/material/List";


const Chats = () => {
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sm={4} md={3}>
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
          Chat Room
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
          Chat Room
        </Grid>
      </Grid>
    </>
  );
};

export default Chats;
