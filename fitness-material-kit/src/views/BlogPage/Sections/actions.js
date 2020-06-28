export function addPost(post) {
  console.log(post);
  return {
    type: 'ADD_POST',
    data: post
  }
}