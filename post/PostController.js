const postService = require('../Post/PostService');

async function createPost(req,res,next){
    try{
        let post = await postService.createPost(req.body);
        res.status(200).json({
            "message": "Post created successfully",
            post
        });
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    createPost
}