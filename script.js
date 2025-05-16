document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded:", window.location.pathname);

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }
    });

    const contactCards = document.querySelectorAll(".contact-card");
    contactCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.backgroundColor = "#e0f7fa";
        });
        card.addEventListener("mouseout", () => {
            card.style.backgroundColor = "";
        });
    });

    const socialLinks = document.querySelectorAll(".contact-card a[target='_blank']");
    socialLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const proceed = confirm(`You're about to open: ${link.href}. Continue?`);
            if (!proceed) {
                e.preventDefault();
            }
        });
    });

    const iframes = document.querySelectorAll("iframe");
    iframes.forEach(frame => {
        frame.addEventListener("load", () => {
            console.log(`Loaded iframe content from: ${frame.src}`);
        });
    });
});
