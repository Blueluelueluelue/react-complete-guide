import React, { Component } from 'react';

import classes from './FullPost.module.css';
import axios from '../../axios';

class FullPost extends Component {
    state = { post: null }

    componentDidUpdate(prevProps, prevState) {
        console.log('[FullPost.js] componentDidUpdate');
        if (prevProps.id !== this.props.id) {
            axios.get(`/posts/${this.props.id}`)
            .then(({ data: post }) => {
                console.log(post);
                this.setState({ post });
            })
            .catch(err => console.log(err));
        }
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if (this.state.post) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;