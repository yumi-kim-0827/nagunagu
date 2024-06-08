import axios from "axios";

// [API POST] name
export const postName = async (name) => {
  try {
    const responses = await axios.post(
      "https://openmind-api.vercel.app/0827/subjects/",
      {
        name: name,
        team: "string",
      }
    );
    return responses;
  } catch (error) {}
};

// [API POST] input
export const postInput = async ({ input, param }) => {
  try {
    const responses = await axios.post(
      `https://openmind-api.vercel.app/0827/subjects/${param}/questions/`,
      {
        subjectId: 0,
        content: input,
        like: 32,
        dislike: 33,
        team: "string",
        answer: {
          content: "string",
          isRejected: true,
        },
      }
    );
    return responses;
  } catch (error) {
    console.log(error);
  }
};
// [API GET] 해당 SUBJECT ID의 리스트 조회
export const getInput = async (param) => {
  try {
    const responses = await axios.get(
      `https://openmind-api.vercel.app/0827/subjects/${param}/questions/`
    );
    return responses.data;
  } catch (error) {
    console.log(error);
  }
};
// [API GET] 해당 SUBJECT ID 이름 조회
export const getSubjectId = async (param) => {
  try {
    const responses = await axios.get(
      `https://openmind-api.vercel.app/0827/subjects/${param}/`
    );
    return responses.data;
  } catch (error) {
    console.log(error);
  }
};
