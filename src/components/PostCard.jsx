import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { indigo, red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, Checkbox, Chip, Stack } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({
  id,
  title,
  description,
  images,
  createdDate,
  userId,
  userName,
  userImg,
  examTag,
  subjectTag,
  topicTag,
}) {
  const [expanded, setExpanded] = React.useState(false);
  let postUrl = `http://localhost:3000/${userId}`;

  const StyledCard = styled(Card)({});

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ textDecoration: "none", margin: "5px" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={userImg}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={new Date(createdDate).toLocaleTimeString()}
        component={"a"}
        href={`http://localhost:3000/${userId}`}
        sx={{ textDecoration: "none", color: "text.primary" }}
      />
      <Box
        component={"a"}
        href={`http://localhost:3000/${id}`}
        sx={{ textDecoration: "none" }}
      >
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </CardContent>

        <Stack direction={"row"} gap={1}>
          {images.length > 0 &&
            images.map((img, index) => (
              <CardMedia
                key={index}
                component="img"
                height="194"
                image={img.url}
                alt={`Image ${index + 1}`}
              />
            ))}
        </Stack>

        <Stack direction={"row"} gap={1} margin={1}>
          <Chip label={"#" + examTag} size="small" color="warning" />
          <Chip label={"#" + subjectTag} size="small" color="secondary" />
          <Chip label={"#" + topicTag} size="small" variant="outlined" />
        </Stack>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color={"text.primary"}>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
