const express = require("express");
const isAuth = require("../middlewares/isAuth");
const { upload } = require("../middlewares/multer");
const {
  analyzeResume,
  finishInterview,
  generateQuestions,
  submitAnswer,
  getMyInterview,
  getInterviewReport,
} = require("../controllers/interview_controller");



const interviewRouter = express.Router()

interviewRouter.post("/resume" , isAuth, upload.single("resume") , analyzeResume)
interviewRouter.post("/generate-questions" , isAuth , generateQuestions)
interviewRouter.post("/submit-answer" , isAuth , submitAnswer)
interviewRouter.post("/finish-interview" , isAuth , finishInterview)

interviewRouter.get("/get-interview" , isAuth  , getMyInterview)
interviewRouter.get("/report/:id" , isAuth  , getInterviewReport)

module.exports = interviewRouter;                                                                                                                                        
