import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {postsDataType} from "../../../redux/state";

// export type PropsType = {
//     message: string,
//     likesCounter: number,
// }

export type PropsType = {
    postsData: Array<postsDataType>
    addPost: (message: string) => void
}


export const MyPosts = (props: PropsType) => {

    let postsElements = props.postsData.map((p) => <Post message={p.message} likeCounter={p.likesCounter}/>
    )

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
        }
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={classes.profile}>
            <div>
                <div>
                    <h3>my Posts</h3>
                </div>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>

                </div>
            </div>

            {postsElements}
        </div>
    );
}

