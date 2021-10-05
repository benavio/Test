import React from "react";
import {MyPosts} from "./posts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {addPost, profilePageType} from "../../redux/state";
// import {state} from "../../redux/state";



export const Profile = (props: profilePageType ) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} addPost={addPost}/>
        </div>);
}
