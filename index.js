const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./db')
const port = 5000
app.use(express.json())

// Schema

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isAvailable: {
    type: Boolean,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    rate: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
});


const Product = mongoose.model("product", productSchema);



app.get('/',(req,res)=>{res.send('helloo....')})

app.get('/pro',(req,res)=>{res.json({messgae:"wohoooo i got json data"})})



app.post('/api/products', async(req,res)=>{
    const product = await new Product(req.body);
    await product.save()
    res.send(product)
})


app.get('/api/products',async(req,res)=>{
    const products = await Product.find({})
     res.status(200).json(products)
})


app.get('/api/product/:id',async(req,res)=>{
    const data = await  Product.findById(req.params.id);
              res.status(200).json(data)
})




app.listen(port,()=>{console.log('server is running on port',port)})