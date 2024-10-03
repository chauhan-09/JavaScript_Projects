const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const counter = document.querySelector('.num');
var cnt = 0;
add.addEventListener('click',f1);
sub.addEventListener('click',f2);

function f1()
{
    cnt++;
    counter.innerHTML = cnt;
    if(cnt < 0)
    {
        counter.style.color = 'red';
    }
    else counter.style.color = 'green';
    
}

function f2()
{
    cnt--;
    counter.innerHTML = cnt;
    if(cnt < 0)
    {
            counter.style.color = 'red';
    }
    else counter.style.color = 'green';
}

