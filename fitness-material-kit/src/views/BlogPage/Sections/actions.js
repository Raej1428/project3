import BlogSection from "./BlogSection";

export function addPost(post) {
  return {
    type: 'ADD_POST',
    data: post
  }
}