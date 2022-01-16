import Post from '../models/post.js';
 export const getPosts=async(req,res)=>{
    try {
        const posts=await Post.find();
        res.status(201).send(posts.map(post=>post._doc))
    } catch (e) {
        res.status(500).send({message:e.message})
    }
}
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost=async(req,res)=>{
    const newPost=new Post(req.body)
    try {
       const response=await newPost.save()
       res.status(201).send(response._doc)
    } catch (e) {
        res.status(501).send({message:e.message})
    }
}
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        const updatedPost = { ...post, _id: id };
        await Post.findByIdAndUpdate(id, updatedPost, { new: true });
        res.status(201).json(updatedPost);
    } catch (error) {
        console.log(error.message)
    } 
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    const updatedPost = await Post.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    res.status(201).json(updatePost);
}
