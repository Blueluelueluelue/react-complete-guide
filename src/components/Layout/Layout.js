import React, { Fragment } from 'react';
import classes from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
    <Fragment>
        <Toolbar />
        <Sidedrawer />
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>{props.children}</main>
    </Fragment>
)

export default Layout;