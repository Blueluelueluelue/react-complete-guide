import React from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';

export default class Posts extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        console.log('[Posts.js] componentDidMount');
        console.log('props', this.props);
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => ({
                    ...post,
                    author: 'Poopy'
                }));
                this.setState({ posts: updatedPosts });
            })
            .catch(err => this.setState({ error: true }));
    }

    postSelectedHandler = (id) => {
        console.log('[Posts.js] postSelectedHandler, id:', id);
        this.setState({ selectedPostId: id });
    }
    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }
        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}