// const toggleButton = document.getElementById('nav-toggle');
// const navLinks = document.getElementById('nav-links');

// toggleButton.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// })
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links ul li a');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});



function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "./assets/bulboff.png";
        document.getElementById("demo").innerHTML = " ";

    } else {
        image.src = "./assets/bulbon.png";
        document.getElementById("demo").innerHTML = "&#8594; UX Designing <br> &#8594; Web Development <br> &#8594; Data Structures and Algoritms <br> &#8594; Object Oriented Programming <br> &#8594; Content Writing and Documentation ";
    }

}

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
// }