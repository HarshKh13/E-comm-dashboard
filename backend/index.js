const express = require('express');
const app = express();
const cors = require('cors');
require('./database/config');
const User = require('./database/users');
const Product = require('./database/products');
app.use(cors());
app.use(express.json());

app.get('/',(req,resp)=>{
    resp.send('server is running');
});

app.post('/register',async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
});

app.post('/login',async (req,resp)=>{
    let user = await User.findOne(req.body);
    if(user) resp.send(user);
    else resp.send({result:'No user found'});
});

app.post('/add-product',async (req,resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
});

app.get('/products',async (req,resp)=>{
    let products = await Product.find();
    if(products.length>0) resp.send(products);
    else resp.send({result:'No product found'})
});

app.delete('/product/:id',async (req,resp)=>{
    let result = await Product.deleteOne({_id:req.params.id});
    resp.send(result);
});

app.get('/search/:key',async (req,resp)=>{
    let result = await Product.find({
        '$or':[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
        ]
    })
    resp.send(result);
})
app.listen(5000);