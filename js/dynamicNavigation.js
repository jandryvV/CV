document.addEventListener('DOMContentLoaded', function () {
    const navIcons = document.querySelectorAll('.nav-icon');
    const mainContent = document.querySelector('.main-content');

    function loadSection(sectionId) {
        fetch(`sections/${sectionId}.html`)
            .then(res => res.text())
            .then(html => {
                mainContent.innerHTML = html;
            })
            .catch(err => console.error(err));
    }

    navIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            navIcons.forEach(i => i.classList.remove('active-icon'));
            this.classList.add('active-icon');
            const section = this.getAttribute('data-section');
            loadSection(section);
        });
    });

    const activeIcon = document.querySelector('.nav-icon.active-icon');
    if (activeIcon) {
        const section = activeIcon.getAttribute('data-section');
        loadSection(section);
    }
});
