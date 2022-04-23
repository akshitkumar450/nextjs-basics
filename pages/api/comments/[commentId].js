import { comments } from "../../../data";

// handling dynamic api route
// http://localhost:3000/api/comments/2
// http://localhost:3000/api/comments/3

export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = comments.find((comment) => comment.id === +commentId);
    res.status(200).json({ comment });
  } else if (req.method === "DELETE") {
    const commentAfterDelete = comments.filter(
      (comment) => comment.id !== +commentId
    );
    console.log(comments);
    res.status(200).json({ comments: commentAfterDelete });
  }
}
