var inputs = document.querySelectorAll('input');
btn.addEventListener('click', f);

function f() {
    document.querySelector('#para').innerHTML = 'Amount due is ' + 
            Math.round(parseFloat(inputs[0].value) * (1 + (parseFloat(inputs[1].value) * 0.01) * parseFloat(inputs[2].value)));
}
