// Select all FAQ sections
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    // Select the button, icon, and answer within each FAQ section
    const button = faq.querySelector('.faq-btn');
    const answer = faq.querySelector('.answer');
    const icon = button.querySelector('i'); // Icon inside the button

    // Add click event to the button
    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Collapse all FAQs
        faqs.forEach((otherFaq) => {
            const otherButton = otherFaq.querySelector('.faq-btn');
            const otherAnswer = otherFaq.querySelector('.answer');
            const otherIcon = otherFaq.querySelector('i');
            otherButton.setAttribute('aria-expanded', 'false');
            otherAnswer.classList.add('hidden');
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');
        });

        // Expand the clicked FAQ if it was not already expanded
        if (!isExpanded) {
            button.setAttribute('aria-expanded', 'true');
            answer.classList.remove('hidden');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});