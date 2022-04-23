import { comments } from "../../../data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ comments: comments });
  } else if (req.method === "POST") {
    const { comment } = req.body;
    comments.push({ id: Date.now(), text: comment });
    res.status(201).json({ comments: comments });
  }
}
