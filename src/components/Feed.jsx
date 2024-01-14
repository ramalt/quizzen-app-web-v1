import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5174/api/Question");
        setPosts(response.data);
      } catch (error) {
        console.error("API isteği başarısız oldu:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box flex={4} p={1}>
      {posts.map((p) => (
        <PostCard
          id={p.id}
          title={p.title}
          description={p.description}
          images = {p.images}
          createdDate={p.createdDate}
          userId={p.user.id}
          userName={p.user.userName}
          userImg={p.user.profileImg}
          examTag={p.tags.exam}
          subjectTag={p.tags.subject}
          topicTag={p.tags.topic}
        />
      ))}
    </Box>
  );
};

export default Feed;
