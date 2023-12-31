const express = require('express')
const connectDB = require('./config/db')

const app = express()

//initialize bodyParser
app.use(express.json({ extended: false }))

//connect to MongoDB
connectDB()

//define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/auth', require('./routes/api/auth'))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('API running'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
