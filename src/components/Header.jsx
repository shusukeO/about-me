import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'center',
        background: "#8bc34a"
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Link href="/about-me/" variant="h5" color="inherit" underline="none">
                    <HomeIcon />
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header
