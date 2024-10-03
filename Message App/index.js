const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
const msg2 = document.querySelector('.msg2');

btn.addEventListener('click',f1);

function f1()
{
    const data = msg.value;
    if(data === '')
    {
        alert('Message Cannot be Empty!')
    }
    else msg2.value = data;
}