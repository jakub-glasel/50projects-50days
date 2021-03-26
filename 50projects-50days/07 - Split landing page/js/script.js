const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const title = document.querySelector('#title');

left.addEventListener('mousemove', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

left.addEventListener('mousemove', () => title.style.color = 'black')
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))




right.addEventListener('mousemove', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
right.addEventListener('mousemove', () => title.style.color = 'white')

