import InfoIcon from "@mui/icons-material/Info";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Switch } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PanToolIcon from "@mui/icons-material/PanTool";
import { red } from "@mui/material/colors";

const UserInfo = () => {
  return (
    <>
      <hr />
      <div className="info">
        <InfoIcon className="infoImg" />
        <div className="infos">
          <span>
            <h4 className="nomer">+998 99 999 99 99</h4>
            <p className="bio">Mobile</p>
          </span>
          <span>
            <h4 className="biography">Code yozish bu hayot.</h4>
            <p className="bio">Bio</p>
          </span>
          <span>
            <h4 className="user">@abdulloh_coder</h4>
            <p className="bio">Username</p>
          </span>
        </div>
      </div>
      <br />
      <hr />
      <div className="notif">
        <NotificationsIcon />
        <h4>Notifications</h4>
        <Switch />
      </div>
      <br />
      <hr />
      <div className="box">
        <span className="tools">
          <EditIcon className="icon" />
          <h4>Edit contact</h4>
        </span>
        <span className="tools">
          <DeleteIcon className="icon" />
          <h4>Delete contact</h4>
        </span>
        <span className="tools">
          <PanToolIcon className="icon red" sx={{ color: red }} />
          <h4 className="red">Block user</h4>
        </span>
      </div>
    </>
  );
};

export default UserInfo;
