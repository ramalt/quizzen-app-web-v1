import { Autocomplete, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AutoCompletes = ({ onChange, examId, setExamData }) => {
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState([]);

  const [subjectValue, setSubjectValue] = useState(subjects[0]);
  const [topicValue, setTopicValue] = useState(topics[0]);

  const handleSubjectSelect = async (newValue) => {
    setSubjectValue(newValue);

    if (newValue != null) await fetchTopics(newValue.id);

    console.log("subject Id: " + newValue.id);
  };

  const handleTopicSelect = (newValue) => {
    setTopicValue(newValue);

    //TODO:Submit Exam Datas here
    setExamData({
      subjectId: subjectValue.id,
      topicId: newValue.id,
    });

    console.log("topic Id: " + newValue.id);

    
  };

  const fetchExamSubjects = async () => {
    await axios
      .get(`http://localhost:5174/api/Exam/subject?e=${examId}`)
      .then((res) => {
        const mapped = res.data.map((subject) => ({
          label: subject.name,
          id: subject.id,
        }));

        setSubjects(() => [...mapped]);
      });
  };

  const fetchTopics = async (subId) => {
    try {
      await axios
        .get(`http://localhost:5174/api/Exam/topic?s=${subId}`)
        .then((res) => {
          const mapped = res.data.map((topic) => ({
            label: topic.name,
            id: topic.id,
          }));

          setTopics(() => [...mapped]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExamSubjects();
  }, [examId]);

  return (
    <Stack direction={"row"}>
      <Autocomplete
        value={subjectValue}
        onChange={(event, newValue) => {
          handleSubjectSelect(newValue);
        }}
        id="subject"
        options={subjects}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Ders" />}
      />

      <Autocomplete
        disablePortal
        // disabled={topics && true}
        value={topicValue}
        onChange={(event, newValue) => {
          handleTopicSelect(newValue);
        }}
        id="topic"
        options={topics}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField {...params} label="Konu" onChange={onChange} />
        )}
      />
    </Stack>
  );
};

export default AutoCompletes;
