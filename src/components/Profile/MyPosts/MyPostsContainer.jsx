import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

        const MyPostsContainer = (props) => {
            let state = props.store.getState();

            let addPost = () => {
                props.store.dispatch(addPostActionCreator());
            }

            let onPostChange = (message) => {
                let action = updateNewPostTextActionCreator(message);
                props.store.dispatch(action)
                }


            return (
                <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={state.profile.posts}
                            newPostText={state.profile.newPostText}
                />
            );
        }

        export default MyPostsContainer;