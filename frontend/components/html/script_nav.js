let nav = document.querySelector('.navbar');

async function navbar(){
    let result = await fetch('./navbar.html');
    result = await result.text();
    nav.innerHTML = result;
}
navbar();