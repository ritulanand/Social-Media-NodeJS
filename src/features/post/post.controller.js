import postModel from "./post.model.js";
export class postItemsController {
  add(req, res) {
    const { caption, imageUrl } = req.query;
    console.log("req query", req.query);
    console.log("reqbody", req.body);
    const userID = req.userID;
    console.log("req id ", userID);
    const postId = Number(req.query.postId);
    var result = postModel.add(postId, userID, caption, imageUrl);
    console.log("post add", result);
    res.status(200).send("Post is updated");
  }

  getAll(req, res) {
    const items = postModel.getall();
    console.log("get all posts", items);
    return res.status(200).send(items);
  }
  get(req, res) {
    const userID = req.params.id;
    const items = postModel.get(userID);
    console.log("get", items);
    return res.status(200).send(items);
  }
  getbyuser(req, res) {
    const postID = req.params.id;
    console.log("post id", postID);
    const items = postModel.getpost(postID);
    console.log("get by user id", items);
    if (!items || items == null) {
      return res.status(400).send("Uff sorry , Post Not Found !!");
    } else {
      return res.status(200).send(items);
    }
  }
  update(req, res) {
    const postId = req.params.id;
    const { userId, caption, imageUrl } = req.body;
    console.log("update", req.body);
    const item = postModel.updatepost(postId, userId, caption, imageUrl);
    console.log("update", item);
    if (item === "not found") {
      return res.status(400).send("Uff sorry, Post Not Found !!");
    } else {
      return res.status(200).send(item);
    }
  }
  delete(req, res) {
    const userID = req.userID;
    const postItemId = req.params.id;
    console.log("user id post id in controller", userID, postItemId);
    const error = postModel.delete(postItemId, userID);
    console.log("deleted", error);
    if (error) {
      return res.status(404).send(error);
    }
    return res.status(200).send("Post is removed");
  }

  filterByCaption(req, res) {
    console.log("req query", req.query);
    const { caption } = req.query;
    console.log("caption", caption);
    const updatedPost = postModel.filtercaption(caption);
    console.log("updated fiklter", updatedPost);
    if (updatedPost) {
      return res.send(updatedPost);
    } else {
      return res.status(404).send("something wenet wrong");
    }
  }

  postArchved(req, res) {
    console.log("query archive", req.query);
    const { isArchived } = req.query;
    const postId = Number(req.query.postId);
    const userID = req.userID;
    console.log("req ar", postId, userID);
    var resarchive = postModel.archivepost(postId, userID, isArchived);
    console.log("post archived", resarchive);
    // res.status(200).send("Post is archived");
    if (resarchive === "not found") {
      return res.status(404).send("post is not archived");
    } else {
      return res.status(200).send("post is archived");
    }
  }

  getarchiveposts(req, res) {
    const itemsarhive = postModel.getarchiveall();
    console.log("get all posts", itemsarhive);
    return res.status(200).send(itemsarhive);
  }

  postdraft(req, res) {
    console.log("query archive staus", req.query);
    const { status } = req.query;
    const postId = Number(req.query.postId);
    const userID = req.userID;
    console.log("req status", postId, userID);
    var repoststatus = postModel.draftpost(postId, userID, status);
    console.log("status post", repoststatus);
    // res.status(200).send("Post is archived");
    if (repoststatus === "draft not found") {
      return res.status(404).send("post is not draft");
    } else {
      return res.status(200).send("post is draft");
    }
  }

  getdraftposts(req, res) {
    const itemsdraft = postModel.getdraftall();
    console.log("get all draft posts", itemsdraft);
    return res.status(200).send(itemsdraft);
  }

  postPublished(req, res) {
    console.log("query  publish", req.query);
    const { status } = req.query;
    const postId = Number(req.query.postId);
    const userID = req.userID;
    console.log("req status", postId, userID);
    var repostpublish = postModel.publishpost(postId, userID, status);
    console.log("status post", repostpublish);
    // res.status(200).send("Post is archived");
    if (repostpublish === "publish not found") {
      return res.status(404).send("post is not publish");
    } else {
      return res.status(200).send("post is publish");
    }
  }

  getPublishposts(req, res) {
    const itemspublished = postModel.getpublishall();
    console.log("get all publish posts", itemspublished);
    return res.status(200).send(itemspublished);
  }

  getByCreated(req, res) {
    const itembysorted = postModel.sortByrecentDate();
    console.log("sort", itembysorted);
    return res.status(200).send(itembysorted);
  }
}
