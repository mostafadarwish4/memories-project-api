import express from 'express';
import {createPost,
        getPosts,
        getPost,
        likePost,
        updatePost,
        deletePost,
        } from '../controllers/posts.js'

const router=express.Router();

router.get('/posts',getPosts);
router.get('/posts/:id',getPost);
router.post('/posts',createPost);
router.patch('/posts/:id',updatePost);
router.patch('/posts/:id/likePost',likePost);
router.delete('/posts/:id',deletePost);

export default router;