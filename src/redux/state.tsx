export type postsDataType = {
    id: number,
    message: string,
    likesCounter: number
}
export type messagesDataType = {
    id: number,
    message: string
}
export type dialogsDataType = {
    id: number,
    name: string
}
export type profilePageType = {
    postsData: Array<postsDataType>
}
export type messagePageType = {
    messagesData: Array<messagesDataType>
    dialogsData: Array<dialogsDataType>
}
export type StateType = {
    profilePage: profilePageType
    messagePage: messagePageType
}


let state: StateType = {

    profilePage: {
        postsData: [
            {id: 1, message: "hi", likesCounter: 12},
            {id: 2, message: "Yo", likesCounter: 1}
        ]
    },
    messagePage: {
        messagesData: [
            {id: 1, message: "hi"},
            {id: 2, message: "we"}
        ],
        dialogsData: [
            {id: 1, name: "Andrew"},
            {id: 2, name: "Dima"}
        ]
    }
}


export const addPost = (postText: string) => {
    const newPost: postsDataType = {
        id: 5,
        message: postText,
        likesCounter: 0
    }
    state.profilePage.postsData.push(newPost)
}


export default state;