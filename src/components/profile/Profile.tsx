import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./posts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>);
}

