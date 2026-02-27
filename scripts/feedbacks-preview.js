const reviews = [
    {
        text: "Дуже задоволений співпрацею. Все виконано якісно та вчасно.",
        fullName: "Іван Петренко",
        company: "TechVision"
    },
    {
        text: "Команда професіоналів, які знають свою справу.",
        fullName: "Олена Ковальчук",
        company: "CreativeSoft"
    },
    {
        text: "Приємна комунікація та відмінний результат.",
        fullName: "Андрій Мельник",
        company: "WebCraft Studio"
    },
    {
        text: "Проєкт реалізовано навіть краще, ніж очікували.",
        fullName: "Марія Шевченко",
        company: "DigitalWave"
    },
    {
        text: "Рекомендую! Надійний партнер для довгострокової співпраці.",
        fullName: "Володимир Бондар",
        company: "NextGen Solutions"
    }
];

const paginationContainer = document.querySelector(".feedbacks__pagination");
const paginationDots = document.querySelectorAll(".feedbacks__paginataion-dot");

const feedbackText = document.querySelector('.feedbacks__feedback-card-quote');
const feedbackName = document.querySelector('.feedbacks__feedback-card-author-name');
const feedbackCompany = document.querySelector('.feedbacks__feedback-card-company-name');

const switchFeedback = (event) => {
    let index = Array.from(paginationDots).indexOf(event.target);
    let feedback = reviews[index];

    feedbackText.textContent = feedback.text;
    feedbackName.textContent = feedback.fullName;
    feedbackCompany.textContent = feedback.company;

}

export {paginationContainer, switchFeedback};