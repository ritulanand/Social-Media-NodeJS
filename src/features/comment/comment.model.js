//productId , userID , quantity
export default class commentModel {
  constructor(postId, userID, content, id) {
    this.postId = postId;
    this.userID = userID;
    this.content = content;
    this.id = id;
  }
  static getAllComment(userID, postID) {
    return comment.filter((i) => i.postId == postID);
  }
  static add(postId, userID, content) {
    const item = new commentModel(postId, userID, content);
    console.log("item", item);
    item.id = comment.length + 1;
    comment.push(item);
    console.log("comments", comment);
    return item;
  }

  static updatecomment(postId, userID, content, commentId) {
    const itemIndex = comment.findIndex((i) => i.id == commentId);
    console.log("update", itemIndex);
    if (itemIndex !== -1) {
      comment[itemIndex].postId = postId;
      comment[itemIndex].userID = userID;
      comment[itemIndex].content = content;
      comment[itemIndex].id = commentId;

      return comment[itemIndex];
    } else {
      return "not found";
    }
  }
  static delete(commentId, userID) {
    const commentIndex = comment.findIndex((i) => i.id == commentId);
    console.log("commennt delet", commentIndex);
    if (commentIndex == -1) {
      return "Item not found";
    } else {
      comment.splice(commentIndex, 1);
    }
  }
}
let comment = [
  new commentModel(1, 1, "that's very good thing for all students", 1),
  new commentModel(1, 2, "ohh wow nice", 2),
  new commentModel(2, 1, "that's amazing", 3),
  new commentModel(2, 3, "eqewqweqw", 4),
];
