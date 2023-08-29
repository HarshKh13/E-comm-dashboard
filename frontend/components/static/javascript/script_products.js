const search_input = document.querySelector('.search');
const search_btn = document.querySelector('.button');
search_btn.addEventListener('click',async (e)=>{
    e.preventDefault();
    const product_container = document.querySelector('.product-list');
    let key = search_input.value;
    const path = `http://localhost:5000/search/${key}`;
    let result = await fetch(path);
    let products = await result.json();
    products = Object.entries(products);

    for(let [key,product] of products){
        product = Object.entries(product);
        let product_id;
        let ul_element = document.createElement('ul');
        for(let [key,item] of product){
            console.log(key);
            if(key!='user_id' && key!='_id' && key!='__v'){
                let li_element = document.createElement('li');
                li_element.innerText = item;
                ul_element.append(li_element);
            }
            if(key=='_id') product_id = item;
        }
        let button = document.createElement('button');
        button.innerText = 'Delete';
        button.id = 'button';
        button.addEventListener('click',async ()=>{
            let result = await fetch(`http://localhost:5000/product/${product_id}`,{
                method:'Delete'
            })
            result = await result.json();
            if(result){
                console.log('record deleted');
            }
        })
        ul_element.append(button);
        let link = document.createElement('a');
        link.href = `/update/${product_id}`;
        link.innerText = 'Update'; 
        ul_element.append(link);
        product_container.append(ul_element);
    }
})
