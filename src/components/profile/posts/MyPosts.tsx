import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./post/Post";

export const MyPosts = () => {
    type postsDataPropsType = {
        id: number
        message: string
        likesCounter: number
    }
    let postsData = [
        {id: 1, message: "hi", likesCounter: 12},
        {id: 2, message: "Yo", likesCounter: 1}
    ]

    return (
        <div className={classes.profile}>
            <div>
                <div>
                    <h3>my Posts</h3>
                </div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>

                </div>
            </div>
            <div>
                <Post message={postsData[0].message} likeCounter={postsData[0].likesCounter}/>
                <Post message={postsData[1].message} likeCounter={postsData[1].likesCounter}/>
            </div>
        </div>
    );
}

