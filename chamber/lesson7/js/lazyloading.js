//Getting images with data-src attribute
const imagesToLoad = document.querySelectorAll ("img[data-src]");

//For intersectional observation
const imgOptions = {
    threshold:0,
    rootMargin:"5px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute("data-src"));
    image.onload = () =>{image.removeAttribute("data-src");};
};

//for external intersection observer is supported
if ("intersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});

}else{
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}