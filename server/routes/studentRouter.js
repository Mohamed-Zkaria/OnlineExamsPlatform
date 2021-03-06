const { Router } = require('express');
const {
  getExamByCode,
  studentStartExam,
  authenticate,
  sendAnswers,
  getExamData,
  register,
  login,
  getExamRules,
  myEnrolledExams,
  getProfile,
  getExamScore,
  changePassword,
  resetPassword,
  updateProfie,
  verify,
} = require('../controllers/StudentController');

const router = new Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticate, getProfile);

router.get('/examData', authenticate, getExamData);
router.get('/examRules/:id', authenticate, getExamRules);
router.post('/exams/:id/answers/', authenticate, sendAnswers);
router.get('/exams/:id/score/', authenticate, getExamScore);

router.post('/enroll', authenticate, getExamByCode);

router.patch('/startExam/:id', authenticate, studentStartExam);

router.get('/myEnrolledExams', authenticate, myEnrolledExams);
router.post('/verify', authenticate, verify);

router.put('/changePassword', changePassword);
router.put('/resetPassword', resetPassword);
router.put('/updateProfie', authenticate, updateProfie);

module.exports = router;
