// like.model.js

let likes = [];

// Function to generate a unique ID for likes
function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Function to find likes by postId
export function findLikesByPostId(postId) {
  console.log("likes", postId);
  return likes.filter((like) => like.postId == postId);
}

// Function to find a like by postId and userId
export function findLike(postId, userId) {
  console.log("find like", postId, userId);
  return likes.find((like) => like.postId == postId && like.userId == userId);
}

// Function to add a like
export function addLike(postId, userId) {
  const postID = Number(postId);
  const like = { id: generateId(), postId: postID, userId };
  console.log("like add", like);
  likes.push(like);
  return like;
}

// Function to remove a like
export function removeLike(postId, userId) {
  likes = likes.filter(
    (like) => !(like.postId == postId && like.userId == userId)
  );
  console.log("like remove", likes);
}
// please explain this

export function getallikes() {
  console.log("lijkes model", likes);
  return likes;
}
