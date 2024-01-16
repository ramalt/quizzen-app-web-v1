import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SendIcon from "@mui/icons-material/Send";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

const AnswerPopup = ({ title, questionId, open, setOpenPopup, onClose }) => {
  const [isSending, setSending] = useState(false);

  const [data, setData] = useState({
    text: "",
    questionId: questionId,
    userId: "a24cbde1-b289-4ca3-a86b-36236f94eada", //TODO: get real userId from cookie
  });

  const handleInputChange = (e) => {
    setData({ ...data, text: e.target.value });
  };

  const handleSendAnswer = async () => {
    setSending(true);

    try {
      await axios.post("http://localhost:5174/api/Answer", data).then((res) => {
        setSending(false);
        setOpenPopup(false);
      });
    } catch (error) {
      console.error("api POST request error: " + error);
      setSending(false);
      setOpenPopup(false);
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={true}
      open={open}
      onClose={handleClose}
      // TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={handleClose}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            sx={{ ml: 2, flex: 1, display: { xs: "none" } }}
            component="div"
          >
            Cevaplıyorsun:
          </Typography>
          <Typography
            sx={{ ml: 2, flex: 7 }}
            component="div"
            color={"gray"}
            fontSize={12}
          >
            <SubdirectoryArrowRightIcon htmlColor="gray" fontSize="12" />
            {title.length > 70 ? +title.slice(0, 80) + "..." : title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          width="95%"
          height="auto"
          justifyContent="center"
          display="flex"
          alignItems="center"
          flexDirection={"column"}
        >
          <TextField
            multiline
            id="outlined-multiline-flexible"
            maxRows={15}
            rows={10}
            label="Cevabınız"
            placeholder="maksimum 300 karakter."
            onChange={handleInputChange}
            style={{
              width: "90%",
              marginTop: "1rem",
              marginBottom: "1rem",
              flex: 6,
            }}
          />

          {/* TODO: UPLOAD IMAGE */}
          <Box alignItems={"flex-start"}>
            <Button
              startIcon={<AddToPhotosIcon />}
              color="inherit"
              size="35px"
            />
          </Box>

          <LoadingButton
            endIcon={<SendIcon />}
            onClick={handleSendAnswer}
            loading={isSending}
            loadingPosition="end"
            variant="contained"
            color="warning"
            sx={{ borderRadius: "20px", marginBottom: "1rem", flex: 1 }}
          >
            <span>Gönder</span>
          </LoadingButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default AnswerPopup;
