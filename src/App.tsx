import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [topics, setTopics] = useState([]);
  const [posts, setPosts] = useState([]);
  const [discussions, setDiscussions] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/topics")
      .then((response) => response.json())
      .then((data) => {
        setTopics(data);
      })
      .catch((err) => {
        setError("Error fetching topics");
      });

    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError("Error fetching posts");
      });

    fetch("http://localhost:4000/discussions")
      .then((response) => response.json())
      .then((data) => {
        setDiscussions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching discussions");
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the first render

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Topics List</h1>
      <ul>
        {topics.map((topic) => (
          <>
            <li key={topic.id}>{topic.name}</li>
            <ul>
              {discussions
                .filter((discussion) => discussion.topic_id === topic.id)
                .map((discussion) => (
                  <>
                    <li key={discussion.id}>{discussion.title}</li>
                    <ul>
                      {posts
                        .filter((post) => post.discussion_id === discussion.id)
                        .map((post) => (
                          <li key={post.id}>{post.content}</li>
                        ))}
                    </ul>
                  </>
                ))}
            </ul>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;
