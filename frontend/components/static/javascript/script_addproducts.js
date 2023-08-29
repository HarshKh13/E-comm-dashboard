const name_input = document.getElementById('add_product_name');
const price_input = document.getElementById('add_product_price');
const category_input = document.getElementById('add_product_category');
const company_input = document.getElementById('add_product_company');
const form = document.getElementById('add_products_form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const name = name_input.value;
    const price = price_input.value;
    const category = category_input.value;
    const company = company_input.value;
    const user = JSON.parse(localStorage.getItem('user'));
    const user_id = user._id;

    const path = 'http://localhost:5000/add-product';
    let result = await fetch(path,{
        method:'post',
        body: JSON.stringify({name,price,category,user_id,company}),
        headers:{
            'Content-Type':'application/json',
        }
    });
    result = await result.json();
    console.log(result);
});
