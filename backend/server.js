import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from  './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import path from 'path'
import {
    notFound,
    errorHandler
} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json()) // body parsing


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/uploads', uploadRoutes)

//Create a static folder

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('API is running');
	});
}

// Error Middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold)
})