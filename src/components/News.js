import React from "react";

function News(props) {
  return (
    <div className="news">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <a href={props.url}> Read More</a>
    </div>
  );
}

export default News;
