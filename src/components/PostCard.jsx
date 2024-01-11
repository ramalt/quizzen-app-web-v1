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
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, Checkbox, Stack } from "@mui/material";
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

export default function PostCard({ key, id, title, description, createdDate }) {
  const [expanded, setExpanded] = React.useState(false);
  let postUrl = `http://localhost:3000/${id}`;

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
            src="https://i.scdn.co/image/ab67616d0000b273d64517a4059310eeb0a889c3"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={createdDate}
        component={"a"}
        href="#profile"
        sx={{ textDecoration: "none", color: "text.primary" }}
      />
      <Box component={"a"} href={postUrl} sx={{ textDecoration: "none" }}>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <Stack direction={"row"} gap={1}>
          <CardMedia
            component="img"
            height="194"
            image="https://i.pinimg.com/550x/e7/55/09/e75509d701d000df3c2accb5816d2a02.jpg"
            alt="Paella dish"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://i.pinimg.com/236x/bf/e6/86/bfe68610b2a537611b214434ac6ba86e.jpg"
            alt="Paella dish"
          />
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
