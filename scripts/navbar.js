function navbar() {
    document.addEventListener("DOMContentLoaded", () => {
        const navbarContainer = document.getElementById("navbar-container");
        fetch("./../components/navbar.html")
            .then(Response => Response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
                
            }).catch(error => console.error("error occurred during loading", error));
        
            const navLinks = document.querySelectorAll(".nav-link");
    })
}
navbar();
