const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
const btn_equal = document.querySelector('.btn_equal');
const btn_clear = document.querySelector('.btn_clear');

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    }
    )
}

btn_equal.addEventListener('click',function(){
    if(screen.value === "") alert("no values entered");
    else screen.value = eval(screen.value);
})

btn_clear.addEventListener('click',function(){
    screen.value = "";
})






