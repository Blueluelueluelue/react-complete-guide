import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import classes from './Blog.module.css';


class Blog extends Component {
    

    render () {
        return (
            <div className={classes.Blog}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick=submit=true'
                        }}>New Post</Link></li>
                    </ul>
                </nav>
                {/* <Posts /> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;