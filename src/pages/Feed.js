import { Box, LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/post/postSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Box flex={4} p={1}>
      {loading ? (
        <LinearProgress color="inherit" />
      ) : (
        posts.map((p) => (
          <PostCard
            key={p.id}
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
