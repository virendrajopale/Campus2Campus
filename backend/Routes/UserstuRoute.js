const express=require('express');
const router=express.Router();
const { AuthenticateUser, restrictTo } = require('../Middleware/Authentication');

const {handleMyProfile,handleDisplayProfile,handleAddProject,handleUpdateProject,handleDeleteProject,addExp,updateExp,deleteExp,handleUpdateEdu, handleAddEdu, handleDisplayProjects, handleDisplayEducations, deleteEdu, handleDisplayExp}=require('../Controllers/UserStuController')

//router:POST:/profile/myprofile:=>Fetch my profile => Must login as Student
router.get('/profile/myprofile', AuthenticateUser, handleMyProfile);

//router:POST:/profile/myprofile:=>Display profile of user => Must login as Student or Department Admin or Admin
router.get('/profile/display/:id', AuthenticateUser,restrictTo(["TPO_Admin","TPO_Dept_Admin","Student"]), handleDisplayProfile);

//router:POST:/profile/addproject:=>Add new Project => Must login as Student
router.post('/profile/addproject', AuthenticateUser,restrictTo(["Student"]), handleAddProject);

router.get('/profile/displayproject/:id',  AuthenticateUser,restrictTo(["Student"]), handleDisplayProjects)
//router:POST:/profile/updateproject/:id:=>Update Existing Project => Must login as Student
router.put('/profile/updateproject/:id',  AuthenticateUser,restrictTo(["Student"]), handleUpdateProject)

//router:POST:/profile/deleteproject/:id:=>delete Existing Project => Must login as Student
router.delete('/profile/deleteproject/:id', AuthenticateUser,restrictTo(["Student"]), handleDeleteProject)

router.get('/profile/displayeduction/:id',  AuthenticateUser,restrictTo(["Student"]), handleDisplayEducations)
//router:POST:/profile/addeducation=>Add education details => Must login as Student
router.post('/profile/addeducation', AuthenticateUser,restrictTo(["Student"]),handleAddEdu)

//router:POST:/profile/updateeducation/:id:=>Update Existing Education Details => Must login as Student
router.put('/profile/updateeducation/:id', AuthenticateUser,restrictTo(["Student"]), handleUpdateEdu)

//router:POST:/profile/deleteeducation/:id:=>delete Existing educationdetails => Must login as Student
router.delete('/profile/deleteeducation/:id', AuthenticateUser,restrictTo(["Student"]), deleteEdu)

router.get('/profile/displayexperience/:id',  AuthenticateUser,restrictTo(["Student"]), handleDisplayExp)
//router:POST:/profile/addexp => Add experience/Position of responsibility => Must login as Student
router.post('/profile/addexp', AuthenticateUser,restrictTo(["Student"]), addExp)

//router:POST:/profile/updateexp/:id:=>Update Existing Experience => Must login as Student
router.put('/profile/updateexp/:id', AuthenticateUser,restrictTo(["Student"]), updateExp)

//router:POST:/profile/deleteexp/:id:=>Delete Existing Experience => Must login as Student
router.delete('/profile/deleteexp/:id', AuthenticateUser,restrictTo(["Student"]), deleteExp)

module.exports=router;