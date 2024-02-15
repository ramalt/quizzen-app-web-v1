import { Box, Button, Card, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Image } from "@mui/icons-material";
import axios from "axios";
import AutoCompletes from "../components/AutoCompletes";
import { useNavigate } from "react-router-dom";

//TODO: Get From User
const examId = "21C0A29F-D114-4142-BE53-047F1BBA1AF5";
const userId = "f4bcd779-a978-436f-b816-bf806fc0886d";

const NewPost = () => {
  const navigate = useNavigate();

  const [examData, setExamData] = useState({
    subjectId: "",
    topicId: "",
  });

  const [data, setData] = useState({
    title: "",
    description: "",
    examId: examId,
    subjectId: "",
    topicId: "",
    userId: userId,
  });

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      title: value,
    }));
  };

  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios
        .post("http://localhost:5174/api/question", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res)
          navigate(`/question/${res.data.data}`)
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      subjectId: examData.subjectId,
      topicId: examData.topicId,
    }));
  }, [data]);

  return (
    <Box flex={4} p={1}>
      <Card
        sx={{
          textDecoration: "none",
          margin: { xs: "3px", md: "5px" },
          width: { xs: "99%" },
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            width="95%"
            height="auto"
            justifyContent="center"
            display="flex"
            alignItems="center"
            flexDirection={"column"}
          >
            <Typography variant="h6" component={"div"}>
              Yeni
            </Typography>
            <TextField
              multiline
              id="title"
              maxRows={3}
              label="sorunuz"
              placeholder="maksimum 300 karakter."
              onChange={handleTitleChange}
              style={{
                width: "90%",
                marginTop: "1rem",
                marginBottom: "1rem",
                flex: 6,
              }}
            />
            <TextField
              multiline
              id="description"
              rows={10}
              label="açıklama"
              placeholder="maksimum 300 karakter."
              onChange={handleDescriptionChange}
              style={{
                width: "90%",
                marginTop: "1rem",
                marginBottom: "1rem",
                flex: 6,
              }}
            />
            {/* EXAM SUBJECT TOPIC */}
            <AutoCompletes examId={examId} setExamData={setExamData} />

            {/* TODO: UPLOAD IMAGE */}
            <Box alignItems={"flex-start"}>
              <Button
                startIcon={<AddToPhotosIcon />}
                color="inherit"
                size="35px"
              />
              <Image></Image>
              <Image></Image>
              <Image></Image>
              <Image></Image>
            </Box>

            <LoadingButton
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              //   loading={isSending}
              loadingPosition="end"
              variant="contained"
              color="warning"
              sx={{ borderRadius: "20px", marginBottom: "1rem", flex: 1 }}
            >
              <span>Gönder</span>
            </LoadingButton>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default NewPost;
