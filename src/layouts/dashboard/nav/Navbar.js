import * as React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

// Matrial ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// configuration
import navConfiguration from './configurationNavbar';


export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {navConfiguration.map((item, index) => {
        if (item.children.length !== 0) {
          return <NavItemLavel key={index} item={item} open={open} handleClick={handleClick} />;
        }

        return <NavItem key={index} item={item} />;
      })}

    </List>
  );
}

//----------------------------------------------------------

function NavItem({ item, obj }) {
  const { title, path, icon } = item;

  return (
    <ListItemButton component={RouterLink} to={path} sx={{...obj}} >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
}

function NavItemWithoutIcon({ item, obj }) {
  const { title, path, icon } = item;

  return (
    <ListItemButton component={RouterLink} to={path} sx={{...obj}} >
      <ListItemText primary={title} />
    </ListItemButton>
  );
}

function NavItemLavel({ item, open, handleClick }) {
  const { title, path, icon, children } = item;

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
          { Navloop(children, {pl: 10, py: 0, }) }
        </List>
      </Collapse>
    </>
  );
}

const Navloop = (listConfig, obj) => {
  const list = listConfig.map((item, index) => {
    return <NavItemWithoutIcon key={index} item={item} obj={obj} />
  })
  return list;
}