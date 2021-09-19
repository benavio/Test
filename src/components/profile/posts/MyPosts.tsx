import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./post/Post";

export const MyPosts = () => {
    let postsData = [
        {id: 1, message: "hi", likesCounter: 12},
        {id: 2, message: "Yo", likesCounter: 1}
    ]

    let postsElements = postsData.map( p => <Post message={p.message} likeCounter={p.likesCounter} /> )

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
                {postsElements}
            </div>
        </div>
    );
}

