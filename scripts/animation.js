const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.07,
}
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target)

            setTimeout(() => {
                entry.target.classList.remove('show');
            }, 1500)
        }
    })
}

const observer = new IntersectionObserver(observerCallback, observerOptions)

export const scrollAnimation = (...elements) => {
    elements.forEach((element) => {
        observer.observe(element)
    })
}