import "./Header.css";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import {MdDashboard} from "react-icons/md"
import {FiChevronDown} from "react-icons/fi"
import {useNavigate} from "react-router-dom"
import { logout } from "../../../Redux/actions/userAction";
export default function AccountMenu() {
  const[names,setnames]=useState()
      const history=useNavigate()
  const [anchorEl, setAnchorEl] =useState(null);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose=()=>{
      setAnchorEl(null);
  }
  const account = () => {
    setAnchorEl(null);
    history("/account")
  };
  function logoutUser() {
      dispatch(logout());
      alert("Logout Successfully");
    }
    function myorders(){
      history("/orders")
    }
    const myadmindash=()=>{
      history("/admin/dashboard")
    }
  useEffect(()=>{
    if(user){
      let x=user.name.split(" ")
      setnames(x[0])
    }
  },[user])
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title={user.email}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
          </IconButton>
        </Tooltip>
        <h3 onClick={handleClick} className="names">{names}</h3>
        <h3 onClick={handleClick}><FiChevronDown style={{color:"black"}}/></h3>
       
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 200,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={account}>
        <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          /> My account
        </MenuItem>
        <Divider />
        {user.role=="admin" && <MenuItem  onClick={myadmindash}>
          <ListItemIcon>
            <MdDashboard fontSize="small" />
          </ListItemIcon>
         Admin Dashboard
        </MenuItem>}
        <MenuItem  onClick={myorders}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Orders
        </MenuItem>
        <MenuItem onClick={logoutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
