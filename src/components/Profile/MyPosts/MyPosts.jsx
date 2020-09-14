import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


        const MyPosts = (props) => {
            let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likes}/>);
            let newPostElement = React.createRef();

            let onAddPost = () => {
                    props.addPost();
            }

            let onPostChange = () => {
                let message = newPostElement.current.value;
                    props.updateNewPostText(message);
                }


            return (
                    <div className={s.postBlock}>
                        <h3>My posts</h3>
                        <div>
                            <div>
                                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                            </div>
                            <div>
                                <button onClick={onAddPost}>Add post</button>
                                <button>Remove</button>
                            </div>
                        </div>
                        <div className={s.likeBlock}>
                            {postsElements}
                        </div>
                    </div>
            );
        }

        export default MyPosts;