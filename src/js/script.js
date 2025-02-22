document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("#sidebar ul li a");
    const currentPage = window.location.pathname.split("/").pop().toLowerCase(); // Nome do arquivo atual em minúsculas

    links.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop().toLowerCase(); // Nome do arquivo do link

        if (currentPage === linkPage) {
            link.classList.add("active");
        }
    });
});
