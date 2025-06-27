const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://bji43268:bji12@cluster0.vw35d1d.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{console.log('db is connected')}).catch((err)=>{console.log('db is not connected',err)})