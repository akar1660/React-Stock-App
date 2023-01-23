import React from 'react'
import {List, ListItemText, ListItemIcon, ListItemButton} from '@mui/material';


const menu = [
  {title: 'Dashboard', icon: , path: '/stock/dashboard' },
  {title: 'Products', icon: , path: '/stock/products' },
  {title: 'Transactions', icon: , path: '/stock/transactions' },
  {title: 'Firms', icon: , path: '/stock/firms' },
  {title: 'Brands', icon: , path: '/stock/brands' },
  {title: 'Categories', icon: , path: '/stock/categories' },
]

const SideMenu = () => {

  const admin = sessionStorage.getItem("admin") === 'true'; 

  return (
    <List component="nav" sx{{backgroundColor: 'darkslategray', color:'white', height:'100%'}}>
    {admin && <ListItemButton to="https://anthonycw6.pythonanywhere.com/admin/" target = "true">
      <ListItemIcon>
        <DashboardIcon/>
        <ListItemText primary="Admin Panel"/>
      </ListItemIcon>
    </ListItemButton>}

    </List>
  )
}

export default SideMenu