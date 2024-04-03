import * as React from "react";
import { Input as BaseInput, InputProps } from "@mui/base/Input";
import { styled } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Input = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

const ChatRoom = () => {
  return (
    <>
      <div className="div">
        <ListItem sx={{ cursor: "pointer" }}>
          <ListItemButton>
            <ListItemText
              primary="Telegram User"
              secondary="last seen 4 hour ago"
            />
            <SearchIcon sx={{ marginRight: 2 }} />
            <CallIcon  sx={{ marginRight: 2 }}/>
            <MoreVertIcon />
          </ListItemButton>
        </ListItem>
      </div>
      <Box>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
      </Box>
      <Box>
        <Input aria-label="Demo input" placeholder="Type something…" />
        <SendIcon className="img" />
      </Box>
    </>
  );
};

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputElement = styled("input")(
  ({ theme }) => `
  width: 620px;
  margin-left: 10px;
  font-family: 'IBM Plex Sans', sans-serif;
  position: absolute;
  bottom: 10px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

export default ChatRoom;
