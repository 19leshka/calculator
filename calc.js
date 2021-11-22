let a = '';
let b = '';
let sign = '';
let finish = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['/', 'X', '-', '+'];

const output = document.querySelector('.calc-screen p');
document.querySelector('.ac').onclick = clearAll;

function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    output.textContent = '0';
}

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains == ".btn") return;
    if(!event.target.classList.contains == ".ac") return;

    output.textContent = '';
    const key = event.target.textContent;

    if(digits.includes(key)){
        if(b == '' && sign == ''){
            a += key;
            output.textContent = a;
        }
        else if(a !== '' && b !== '' && finish){
            b = '';
            b += key;
            finish = false;
            output.textContent = b;
        }
        else{
            b += key;
            output.textContent = b;
        }
        return;
    }

    if (signs.includes(key)) {
        sign = key;
        output.textContent = sign;
        return;
    }

    if(key ==='='){
        if(b === '') b = a;
        switch(sign){
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = (+a) - (+b);
                break;
            case 'X':
                a = (+a) * (+b);
                break;
            case '/':
                if(b == '0') {
                    output.textContent = '0';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = (+a) / (+b);
                break;
        }
        finish = true;
        output.textContent = a;
        return;
    }
}
