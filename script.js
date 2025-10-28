document.addEventListener('DOMContentLoaded', function() {
    const tryButton = document.getElementById('try-button');
    
    tryButton.addEventListener('click', function() {
        window.location.href = 'https://t.me/SearchWebTraceBot';
    });
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
