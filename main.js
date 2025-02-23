
document.addEventListener('DOMContentLoaded', function() {

    const dishCards = document.querySelectorAll('.dish-card');

    dishCards.forEach(card => {
        card.addEventListener('click', function() {

            this.classList.toggle('show-recipe');

            dishCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('show-recipe');
                }
            });
        });
    });
});
