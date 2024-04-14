let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src
    }
});


AOS.init({
    duration: 800,
    offset: 150,
});

// AOS.init({
//     easing: 'ease-in-out-sine'
//   });

//   setInterval(addItem, 300);

//   var itemsCounter = 1;
//   var container = document.getElementById('aos-demo');

//   function addItem () {
//     if (itemsCounter > 42) return;
//     var item = document.createElement('div');
//     item.classList.add('aos-item');
//     item.setAttribute('data-aos', 'fade-up');
//     item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
//     container.appendChild(item);
//     itemsCounter++;
//   }
