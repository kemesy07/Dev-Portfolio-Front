import React from 'react'
import { AppBar, Toolbar, Box} from '@material-ui/core'
//import { NavLink } from 'react-router-dom';


export function NavBar () {
    return (
        <>
        <Box sx={{ display: 'flex', p: 1 }}>
            <AppBar position="static" className={classes.header}>
               
                <Toolbar>

                    <Box sx={{ flexGrow: 1 }}>
                        <NavLink className={classes.tabs} to="/">Home</NavLink>
                        <NavLink className={classes.tabs} to="/productos">Projects</NavLink>
                        <NavLink className={classes.tabs} to="/ventas">Skills</NavLink>
                        <NavLink className={classes.tabs} to="/usuario">Blog</NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}