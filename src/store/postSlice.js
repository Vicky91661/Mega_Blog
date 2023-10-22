import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            title:"", 
            slug:"", 
            content:"", 
            featuredImage:"", 
            status:"", 
            userId:""
        },
    ]
}

export const postSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addPost: (state, action) => {
            const post = {
                title: action.payload.title,
                slug: action.payload.slug,
                content: action.payload.content,
                featuredImage: action.payload.featuredImage,
                status: action.payload.status,
                userId: action.payload.userId
            }
            state.posts.push(post)
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.slug !== action.payload)
        },
        updatePost: (state, action) => {
            state.posts = state.posts.map((post) => post.slug === action.payload.slug ? action.payload : todo.message)
        }
    }
})

export const { addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;