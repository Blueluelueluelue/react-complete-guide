import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

import axios from '../../axios';


class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        console.log('[Blog.js] componentDidMount');
        axios.get('/posts')
            .then(res => {
                console.log(res);
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => ({
                    ...post,
                    author: 'Poopy'
                }));
                this.setState({ posts: updatedPosts });
            })
            .catch(err => this.setState({ error: true }));
    }

    postSelectHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                <Post 
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    click={() => this.postSelectHandler(post.id)}
                    />
            ));
            console.log(posts)
        }
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className={classes.Posts}>
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;