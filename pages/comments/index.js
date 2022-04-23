/* eslint-disable */
import { useState } from "react";
function comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data.comments);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setComments(data.comments);
  };

  const deleteComment = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setComments(data.comments);
  };

  return (
    <div>
      <button onClick={fetchComments}>load comments</button>
      <br />

      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id}. {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit comment</button>
    </div>
  );
}

export default comments;
