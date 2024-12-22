//productId , userID , quantity

export default class postModel {
  constructor(
    postId,
    userId,
    caption,
    imageUrl,
    isArchived = false,
    createdAt = new Date()
    // status = "draft"
  ) {
    this.postId = postId;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
    this.isArchived = isArchived;
    this.createdAt = createdAt;
    // this.status = status;
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
      (i) => i.postId == postId && i.userId == userId
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

  static archivepost(postId, userId, isArchived) {
    const archiveIndex = post.findIndex(
      (i) => i.postId == postId && i.userId == userId
    );
    console.log("archive post", archiveIndex);
    if (archiveIndex !== -1) {
      post[archiveIndex].isArchived = Boolean(isArchived);
      console.log("archived update at index", post[archiveIndex]);
      return post[archiveIndex];
    } else {
      return "not found";
    }
    // console.log("archive", postId, userId, isArchived);
    // const postArchive = new postModel(
    //   postId,
    //   userId,
    //   caption,
    //   imageUrl,
    //   isArchived
    // );
    // postArchive.isArchived = true;
    // post.push(postArchive);
    // console.log("post item", post);
    // return postArchive;
  }

  static getarchiveall() {
    const archivedPosts = post.filter((post) => post.isArchived == true);
    console.log("archhh", archivedPosts);
    return archivedPosts;
  }

  static draftpost(postId, userId, status = "draft") {
    const poststatusIndex = post.findIndex(
      (i) => i.postId == postId && i.userId == userId
    );
    console.log("draft post", poststatusIndex);
    if (poststatusIndex !== -1) {
      post[poststatusIndex].status = status;
      console.log("draft update at index", post[poststatusIndex]);
      return post[poststatusIndex];
    } else {
      return "draft not found";
    }
  }

  static getdraftall() {
    const draftPosts = post.filter((post) => post.status == "draft");
    console.log("draft all", draftPosts);
    return draftPosts;
  }

  static publishpost(postId, userId, status = "publish") {
    const postpublishIndex = post.findIndex(
      (i) => i.postId == postId && i.userId == userId
    );
    console.log("draft post", postpublishIndex);
    if (postpublishIndex !== -1) {
      post[postpublishIndex].status = status;
      console.log("draft update at index", post[postpublishIndex]);
      return post[postpublishIndex];
    } else {
      return "publish not found";
    }
  }

  static getpublishall() {
    const publishAll = post.filter((post) => post.status == "publish");
    console.log("publish all", publishAll);
    return publishAll;
  }

  static sortByrecentDate() {
    return post.sort((a, b) => b.createdAt - a.createdAt);
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
