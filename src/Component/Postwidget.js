import React from "react";

export function PostWidget({ _id, title, categories, content }) {
  return (
    <div key={_id}>
      <h3>{title}</h3>
      <small>{categories}</small>
      <div>{content}</div>
      <hr />
    </div>
  );
}
