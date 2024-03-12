import express from "express";
import {
  createAppointment,
  deleteAppointment,
  getAppointment,
  getAppointmentById,
  updateAppointment,
} from "../controllers/appointmentController";

const router = express.Router();

router.get("/appointment", getAppointment);
router.get("/appointment/:id", getAppointmentById);
router.delete("/appointment/:id", deleteAppointment);
router.put("/appointment/:id", updateAppointment);
router.post("/appointment/create", createAppointment);

export default router;
