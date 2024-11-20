document.addEventListener('DOMContentLoaded', () => {
    const loadContainer = document.querySelector('.loading-container')

    setTimeout(() => {
        //loadContainer.style.display = "none"
        loadContainer.classList.add('end-loading')
        setTimeout(() => {
            loadContainer.style.display = "none"
        }, 1000);
    }, 0);
})