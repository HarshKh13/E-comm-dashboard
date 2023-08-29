const express = require('express');
const app = express();
const base_path = '/components/html/base.html';
const static_folder_path = 'components/static';
const signup_path = '/components/html/Signup.html';
const login_path = '/components/html/Login.html';
const add_products_path = '/components/html/AddProducts.html';
const products_path = '/components/html/ProductList.html';
const update_products_path = '/components/html/UpdateProduct.html';

app.use(express.static(static_folder_path));
app.use(express.static('components/html'));
app.get('/',(req,resp)=>{
    resp.sendFile(__dirname + base_path);
});

app.get('/signup',(req,resp)=>{
    resp.sendFile(__dirname + signup_path);
});

app.get('/login',(req,resp)=>{
    resp.sendFile(__dirname + login_path);
});

app.get('/add-products',(req,resp)=>{
    resp.sendFile(__dirname + add_products_path);
});

app.get('/products',(req,resp)=>{
    resp.sendFile(__dirname + products_path);
});

app.get('/update/:id',(req,resp)=>{
    resp.sendFile(__dirname + update_products_path);
})
app.listen(3000);