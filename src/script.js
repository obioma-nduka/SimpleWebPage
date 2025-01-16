document.addEventListener('DOMContentLoaded', function () {
    // Select all links with hashes
    const links = document.querySelectorAll('nav ul li a[href*="#"]');

    // Add smooth scrolling to all links
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Store hash
            const hash = this.hash;

            // Using scrollIntoView to achieve smooth scroll
            const target = document.querySelector(hash);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Optional: Highlight active section in navigation
    window.addEventListener('scroll', function () {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        links.forEach(link => {
            let currLink = link;
            let refElement = document.querySelector(currLink.getAttribute("href"));
            if (refElement.offsetTop <= scrollPosition && (refElement.offsetTop + refElement.offsetHeight > scrollPosition)) {
                document.querySelector('nav ul li a.active').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        });
    });
});
