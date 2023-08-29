const login_form = document.getElementById('login_form');
const login_email_input = document.getElementById('login_email');
const login_password_input = document.getElementById('login_password');

login_form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const email = login_email_input.value;
    const password = login_password_input.value;
    const path = 'http://localhost:5000/login';
    let result = await fetch(path,{
        method:'post',
        body: JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json',
        }
    });
    result = await result.json();
    if(result.email){
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result));
        window.location.href = 'http://localhost:3000';
    }
    else alert('Please enter correct details');
});
