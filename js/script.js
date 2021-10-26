const button = document.querySelector('button');
const image = document.querySelector('img');
button.addEventListener('click', changeUser);

function changeUser() {
    const para = document.querySelector('.title');
    let name = prompt('Enter a new name');
    para.textContent = 'Mozilla is cool, ' + name;
}

image.addEventListener('click', changeImage);

function changeImage() {
    document.querySelector('.demo').src = "images/brave-logo.png";
    document.querySelector('.title').textContent = "Is Brave even Cooler?";
    document.querySelector('body').style.backgroundColor = 'white';

}