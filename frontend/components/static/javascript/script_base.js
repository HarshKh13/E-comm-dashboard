const signup_form = document.getElementById('signup_form');
const signup_name_input = document.getElementById('signup_name');
const signup_email_input = document.getElementById('signup_email');
const signup_password_input = document.getElementById('signup_password');

signup_form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const name = signup_name_input.value;
    const email = signup_email_input.value;
    const password = signup_password_input.value;
    const path = 'http://localhost:5000/register';
    let result = await fetch(path,{
        method:'post',
        body: JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json',
        }
    });
    result = await result.json();
    console.log(result);
    window.location.href = 'http://localhost:3000/login';
});

