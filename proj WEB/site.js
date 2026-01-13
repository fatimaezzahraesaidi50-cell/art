
var modal = null;
var modalTitle = null;
var modalTheme = null;
var modalDesc = null;
var modalImg = null;
var closeBtn = null;
window.onload = function() {
    modal = document.getElementById("modal");
    modalTitle = document.getElementById("modal-title");
    modalTheme = document.getElementById("modal-theme");
    modalDesc = document.getElementById("modal-desc");
    modalImg = document.getElementById("modal-img");
    closeBtn = document.getElementsByClassName("close")[0];
    
    console.log("Page Vintage Art Gallery chargée avec succès");
    console.log("Titre de la page : " + document.title);
    console.log("URL : " + window.location.href);
    
    var images = document.getElementsByTagName("img");
    console.log("Nombre d'images dans la page : " + images.length);
    
    var now = new Date();
    document.getElementById("load-time").innerHTML = 
        "Page chargée à : " + now.getHours() + "h" + now.getMinutes() + "m" + now.getSeconds() + "s";
};

function openModal(title, theme, desc, img) {
    
    if (!title || !theme || !desc || !img) {
        window.alert("Erreur : Paramètres manquants pour afficher l'œuvre");
        return;
    }
    
    modal.style.display = "block";
    modalTitle.innerHTML = "<b>" + title + "</b>";
    modalTheme.innerHTML = "<u></u> : " +theme ;
    modalDesc.innerHTML = desc;
    modalImg.src = img;
    modalImg.alt = "Œuvre : " + title;
    
    document.title = " Art - " + title;
    document.body.style.overflow = "hidden";
    console.log("Modal ouvert pour : " + title);
    console.log("Image source : " + img);
}
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.title = "Vintage Art Gallery";
    window.status = "";
    console.log("Modal fermé");
}
document.onkeydown = function(event) {
    event = event || window.event;
    var keyCode = event.keyCode || event.which;
    if (keyCode == 27 && modal.style.display == "block") {
        closeModal();
    }
};
var currentImageIndex = 0;
var galleryImages = [
    {title: "Nature", theme: "Nature", desc: "Description détaillée de l'œuvre Nature", img: "images/img1.jpg"},
    {title: "Rêve", theme: "Imaginaire", desc: "Description détaillée de l'œuvre Rêve", img: "images/img2.jpg"},
    {title: "Lumière", theme: "Espoir", desc: "Description détaillée de l'œuvre Lumière", img: "images/img3.jpg"}
];
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    var img = galleryImages[currentImageIndex];
    openModal(img.title, img.theme, img.desc, img.img);
}
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    var img = galleryImages[currentImageIndex];
    openModal(img.title, img.theme, img.desc, img.img);
}
if (closeBtn) {
    closeBtn.onclick = closeModal;
}
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};
