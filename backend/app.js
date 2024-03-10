import express from 'express';
import userRoutes from './src/routes/userRoute.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1',userRoutes);


export default app;