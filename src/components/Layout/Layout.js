import React, { Fragment, Component } from 'react';
import classes from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    toggleSideDrawerHandler = () => {
        this.setState((prevState) => { 
            return {showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
                <Sidedrawer close={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <div>Toolbar, Sidedrawer, Backdrop</div>
                <main className={classes.Content}>{this.props.children}</main>
            </Fragment>
        );
    }
}

export default Layout;