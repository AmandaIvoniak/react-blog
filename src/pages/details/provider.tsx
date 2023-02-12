import { useState } from "react";
import api from "../../services/api";

export function Blog() {
  const [posts, setPosts] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);
  async function requestPosts(idPost: any): Promise<any[]> {
    try {
      const { data } = await api
        .get(`/posts/${idPost}`);
      // .catch((error) => {
      //   // setErrorMessage(error?.response?.data);
      // });
      return await data;
    } catch (err) {
      return [];
    }
  }
  async function requestComments(idPost: any): Promise<any[]> {
    try {
      const { data } = await api
        .get(`/posts/${idPost}/comments`);
      return await data;
    } catch (err) {
      return [];
    }
  }

  async function getPosts(idPost: any) {
    const [itens] = await Promise.all([requestPosts(idPost)]);
    setPosts(itens);
  }

  async function getComments(idPost: any) {
    const [itens] = await Promise.all([requestComments(idPost)]);
    setComments(itens);
  }

  async function addComment(addComment: any) {
    console.log(addComment);
    
    try {
      await api
        .post(`/posts/${addComment.postId}/comments`, addComment);
    } catch (err) {
      //
    }
  }

  async function updateComment(updateComment: any) {
    try {
      await api
        .put(`/comments/${updateComment.id}`, updateComment)
    } catch (err) {
      //
    }
  }
  return {
    posts,
    comments,
    getPosts,
    getComments,
    addComment,
    updateComment,
  };
}
