
function calculation(){
    const price = document.querySelector('.js_price');
    let cost = Number(price.value);
    if(price.value < 40){
        document.querySelector('.total_price').innerHTML = `$${cost + 10}`;
    }
    else{
        document.querySelector('.total_price').innerHTML = `$${cost}`;
    }
}
        