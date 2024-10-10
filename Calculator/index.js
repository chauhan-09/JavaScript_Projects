const screen = document.querySelector('#screen');
const btns = document.querySelectorAll('.btn');
const btn_equal = document.querySelector('.btn_equal');
const btn_clear = document.querySelector('.btn_clear');

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',function (){
        let num = btns[i].getAttribute('data-num');
        screen.value += num;
    })
}

btn_equal.addEventListener('click',function(){
    let ans = eval(screen.value);
    screen.value = ans;
})

btn_clear.addEventListener('click',function(){
    if(screen.value === "") alert('no value entered');
    else screen.value = "";
})