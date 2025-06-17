let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: [ 'Frontend-разработчик',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const token = "7683924388:AAHCKWWboLK2gDus7-70Jn4S020jBAwlzR8"; 
  const chatId = "758234437";
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const num = document.getElementById("number").value;
    const telegram = document.getElementById("telegram").value;
     
if (!name || !telegram || !message || !num || !email) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.style.display = "flex";
  
  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3000);
  return;
}


   const text =
  ` 📩 *Новое сообщение с Портфолио!*\n\n
   👤 *Имя:* ${name}\n
   📧 *Email:* ${email}\n
   📱 *Телефон:* ${num}\n
   💬 *Сообщение:* ${message}\n
   💬 *Telegram:* @${telegram}`;


    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    })
    .then(res => res.json())
    .then(data => {
        const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);

      form.reset();
    })
    .catch(err => {
      alert("Ошибка отправки!");
      console.error(err);
    });
  });
  const themeToggle = document.getElementById("theme-toggle");


