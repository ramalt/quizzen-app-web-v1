import { Box, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      await axios.get("http://localhost:5174/api/Question").then((response) => {
        setPosts(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.error("API isteği başarısız oldu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box flex={4} p={1}>
      {isLoading ? (
        <LinearProgress color="inherit" />
      ) : (
        posts.map((p) => (
          <PostCard
            id={p.id}
            title={p.title}
            description={p.description}
            images={p.images}
            createdDate={p.createdDate}
            userId={p.user.id}
            userName={p.user.userName}
            userImg={p.user.profileImg}
            examTag={p.tags.exam}
            subjectTag={p.tags.subject}
            topicTag={p.tags.topic}
          />
        ))
      )}
    </Box>
  );
};

export default Feed;
