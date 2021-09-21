const nav = document.querySelector('nav');
const sectionOne = document.querySelector('#Hero');

const sectionOneOptions = {
    rootMargin: '-600px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver((enteries, sectionOneObserver) => {
    enteries.forEach(entery => {
        if (!entery.isIntersecting) {
            nav.classList.add('shadow');
            nav.classList.add('bg-white');
        } else {
            nav.classList.remove('shadow');
            nav.classList.remove('bg-white');
        };
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);