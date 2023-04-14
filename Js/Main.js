const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropdown_menu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function() {
            dropdown_menu.classList.toggle('open')
            const isOpen = dropdown_menu.classList.contains('open')

            toggleBtnIcon.classList = isOpen ?
                'fa-solid fa-xmark' :
                'fa-solid fa-bars'
        }