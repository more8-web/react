import React from "react";
import s from './Post.module.css';
import pic from "./img/images.jpeg";

        const Post = (props) => {

            return (
                            <div className={s.item}>
                                <img src={pic} alt={''}/>
                                {props.message}
                                <div className={s.message}>
                                    <span>Likes {props.likes}</span>
                                </div>
                            </div>
            );
        }

        export default Post;