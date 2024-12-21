//productId , userID , quantity

export default class postModel {
  constructor(postId, userId, caption, imageUrl) {
    this.postId = postId;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
    // this.id=id;
  }
  static add(postId, userId, caption, imageUrl) {
    console.log("add", postId, caption, imageUrl);
    const postItem = new postModel(postId, userId, caption, imageUrl);
    postItem.id = post.length + 1;
    post.push(postItem);
    console.log("post item", post);
    return postItem;
  }
  static updatepost(postId, userId, caption, imageUrl) {
    const itemIndex = post.findIndex(
      (i) => i.postId == postId || i.userId == userId
    );
    console.log("update post", itemIndex);
    if (itemIndex !== -1) {
      post[itemIndex].caption = caption;
      post[itemIndex].imageUrl = imageUrl;
      console.log("post update at index", post[itemIndex]);
      return post[itemIndex];
    } else {
      return "not found";
    }
  }
  static getall() {
    return post;
  }
  static getpost(postID) {
    console.log("postID get", postID);
    return post.find((i) => i.postId === Number(postID));
  }
  static get(userID) {
    console.log("userID get", userID);
    return post.filter((i) => i.userId == userID);
  }
  static delete(postItemId, userID) {
    console.log("post id userid", postItemId, userID);
    const postItemIndex = post.findIndex(
      (i) => i.id == postItemId && i.userId == userID
    );
    console.log("dele", postItemIndex);
    if (postItemIndex == -1) {
      return "Item not found";
    } else {
      post.splice(postItemIndex, 1);
    }
  }

  static filtercaption(caption) {
    console.log("caption model", caption);
    return post.filter((c) => c.caption === caption);
  }
}

// let post = [
//   new postModel(
//     1,
//     2,
//     "This is my 1st post",
//     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAP//Z"
//   ),
//   new postModel(
//     2,
//     1,
//     "this is new post",
//     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2RP//Z"
//   ),
//   new postModel(
//     3,
//     3,
//     "this is new post",
//     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2RP//Z"
//   ),
// ];

let post = [
  new postModel(
    1,
    2,
    "This is my 1st post",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAP//Z"
  ),
  new postModel(
    2,
    1,
    "this is new post",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2RP//Z"
  ),
  new postModel(
    3,
    3,
    "this is new post",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2RP//Z"
  ),
];
