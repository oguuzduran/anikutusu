import express, { response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import memoryRouter from './routers/memoryRouter.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: '20mb' }));
app.use(cors());

app.use('/memories', memoryRouter);

app.listen(process.env.PORT, () => {
	mongoose
		.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		})
		.then(() => console.log('connected to db'))
		.catch((err) => console.log(`hata ${err}`));
});
