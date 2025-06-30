// import express from 'express'
// import { addDoctor } from '../controllers/adminController.js'
// import upload from '../middlewares/multer.js'

// const adminRouter = express.Router()

// adminRouter.post('/add-doctor',upload.single('image'),addDoctor)

// export default adminRouter

import express from 'express';
import { addDoctor,allDoctors,loginAdmin,appointmentsAdmin,appointmentCancel,adminDashboard } from '../controllers/adminController.js';  // Ensure this path is correct
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailabilty } from '../controllers/doctorController.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-doctors',authAdmin,allDoctors);
adminRouter.post('/change-availabilty',authAdmin,changeAvailabilty);
adminRouter.get('/appointments', authAdmin, appointmentsAdmin);
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)


export default adminRouter;
 