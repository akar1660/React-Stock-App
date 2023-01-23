import React from 'react'
import MuiDrawer from '@mui/material/Drawer';
import  { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import SideMenu from './SideMenu';

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop)=> prop !== 'open'})((theme) => ({})) 

const SideBar = () => {
  return (
    <div>SideBar</div>
  )
}

export default SideBar