import classes from "./Post.module.css";
import React from "react";


type FromMyPostsType = {
    message: string
    likeCounter: number
}

export const Post = (props: FromMyPostsType) => {
    return (
        <div>
            <div className={classes.item}>
                <img
                    src="https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4"/>
                {props.message}
                <div>
                    <span>Like: {props.likeCounter}</span>
                </div>

            </div>
        </div>);
}