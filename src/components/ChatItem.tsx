import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemButton, Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatItem = () => {
  return (
    <>
      <ListItem sx={{ cursor: "pointer" }}>
        <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon fontSize="large" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Telegram User" secondary="April 1, 2024" />
        </ListItemButton>
      </ListItem>
      <Divider></Divider>
    </>
  );
};

export default ChatItem;
