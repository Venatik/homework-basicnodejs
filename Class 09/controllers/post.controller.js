import PostModel from "../models/posts.model.js";

export default class PostController {
    static async getPosts(req, res) {
        try {
            const posts = await PostModel.getAll();
            res.send(posts);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getPost(req, res) {
        try {
            const post = await PostModel.getById(req.params.id);
            res.send(post);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async createPost(req, res) {
        try {
            const postBody = req.body;
            const post = await PostModel.create(postBody);
            res.status(201).send(post);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async updatePost(req, res) {
        try {
            const postBody = req.body;
            const post = await PostModel.update(req.params.id, postBody);
            res.send(post);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deletePost(req, res) {
        try {
            await PostModel.delete(req.params.id);
            res.status(200).send({ message: "Post deleted" });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}