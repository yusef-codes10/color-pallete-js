console.log('js has been loaded');

const btn = document.querySelector('button');
const colorPallete = document.querySelector('.color-pallete');

btn.addEventListener('click',
    pickColor
)

function pickColor() {
    colorPallete.classList.toggle('hidden');
}