    import React from "react";
    import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
    import MyPosts from "./MyPosts";
    import {connect} from "react-redux";


    let mapStateToProps = (state) => {
        return {
            posts : state.profile.posts,
            newPostText: state.profile.newPostText
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            addPost: () => {
                dispatch(addPostActionCreator());
            },
            updateNewPostText: (message) => {
                let action = updateNewPostTextActionCreator(message);
                dispatch(action)
            }
        }
    }

        const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

        export default MyPostsContainer