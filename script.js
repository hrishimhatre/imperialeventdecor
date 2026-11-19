
function scrollGallery(direction) {

    const gallery = document.getElementById("galleryScroll");

    gallery.scrollBy({
        left: direction * 300,
        behavior: "smooth"
    });

}
