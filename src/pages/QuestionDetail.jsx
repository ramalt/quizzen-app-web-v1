import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Chip,
  LinearProgress,
  Skeleton,
  Stack,
} from "@mui/material";
import { Favorite, FavoriteBorder, LocalDining } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";



const QuestionDetail = () => {
  const { questionId } = useParams();
  const [post, setPost] = useState();
  const [answers, setAnswers] = useState();

  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      await axios
        .get(`http://localhost:5174/api/Question/${questionId}`)
        .then((postResponse) => {
          setPost(postResponse.data);
        });

      await axios
        .get(`http://localhost:5174/api/Answer?questionId=${questionId}`)
        .then((answersResponse) => {
          setAnswers(answersResponse.data);
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
        <Box>
          <Card sx={{ textDecoration: "none", margin: "5px" }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                  src={post.user.profileImg}
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.user.fullName}
              subheader={new Date(post.createdDate).toLocaleTimeString()}
              component={"a"}
              href={`user/${post.user.id}`}
              sx={{ textDecoration: "none", color: "text.primary" }}
            />
            <Box sx={{ textDecoration: "none" }}>
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  {post.title}
                </Typography>
              </CardContent>

              <Stack direction={"column"} gap={1}>
                {post.images.length > 0 &&
                  post.images.map((img, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      height="194"
                      image={img.url}
                      alt={`Image ${index + 1}`}
                    />
                  ))}
              </Stack>

              <CardContent>
                <Typography paragraph color={"text.primary"}>
                  {post.description}
                </Typography>
              </CardContent>

              <Stack direction={"row"} gap={1} margin={1}>
                <Chip
                  label={"#" + post.tags.exam}
                  size="small"
                  color="warning"
                />
                <Chip
                  label={"#" + post.tags.subject}
                  size="small"
                  color="secondary"
                />
                <Chip
                  label={"#" + post.tags.topic}
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Box>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="error" />}
                />
              </IconButton>
              <Typography variant="p" color="text.secondary" fontSize={12}>
                <Link style={{ textDecoration: "none", color: "gray" }}>
                  23 beğenme
                </Link>
              </Typography>
            </CardActions>
          </Card>

          <Box margin={"1rem"}>
            <Stack direction={"row-reverse"}>
              <Button
                disabled={false}
                size="large"
                variant="contained"
                color="warning"
                startIcon={<CreateIcon />}
                sx={{
                  borderRadius: "30px",
                  position: "fixed",
                  bottom: "45px",
                  
                }}
              >
                Yaz
              </Button>
            </Stack>
          </Box>

          {/* ANSWERS */}

          {answers?.map((p) => (
            <Card sx={{ textDecoration: "none", margin: "5px" }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    src={p.user.profileImg}
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={p.user.fullName}
                subheader={new Date(p.createdDate).toLocaleTimeString()}
                component={"a"}
                href={`user/${p.user.id}`}
                sx={{ textDecoration: "none", color: "text.primary" }}
              />
              <Stack direction={"row"} p={1}>
                <CardContent>{p.text}</CardContent>
                {/* <CardMedia
              key="1"
              component="img"
              height="194"
              image="img.com/img.jpg"
              sizes="small"
            />*/}
              </Stack>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite color="error" />}
                  />
                </IconButton>
                <Typography variant="p" color="text.secondary" fontSize={12}>
                  <Link style={{ textDecoration: "none", color: "gray" }}>
                    23 beğenme
                  </Link>
                </Typography>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default QuestionDetail;
