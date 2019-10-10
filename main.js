console.log('Siema');
const name = 'Ludwik';
const age = 28;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam lat ${age} lat`);

console.log('Witaj przybyszu');




const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = `<strong>Nazywam</strong> się ${name} i mam lat ${age} lat`;

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[0]);