const nextbtn = document.querySelector('#nextbtn');
const container = document.querySelector('.container')
const images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];

nextbtn.addEventListener('click',nextimage);

function nextimage()
{
    const random = Math.floor(Math.random()*images.length);
    container.style.backgroundImage = `url('${images[random]}')`;
    console.log(random);

}