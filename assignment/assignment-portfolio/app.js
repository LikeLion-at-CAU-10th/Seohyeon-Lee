const checkbox = document.querySelector('.checkbox');
console.log(checkbox); 

checkbox.addEventListener('click',toggleclick);

// toggle
function toggleclick() {
    document.body.classList.toggle('dark');
    console.log('working!');
}