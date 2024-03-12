import express from 'express';
import userRoutes from './src/routes/userRoute.js';
import appointmentRoutes from './src/routes/appointmentRoute.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1',userRoutes);
app.use('/api/v1',appointmentRoutes);


export default app;