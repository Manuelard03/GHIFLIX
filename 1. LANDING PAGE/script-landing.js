/*Responsive menu*/
const togglebtn = document.querySelector('.toggle-btn')
        const togglebtnIcon = document.querySelector('.toggle-btn i')
        const dropDownMenu= document.querySelector('.dropdown_menu')

        togglebtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            togglebtnIcon.classList = isOpen 
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars-staggered'
        }
/*Barra de navegacion con efecto scroll*/
        window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle('down', window.scrollY > 0);
        });