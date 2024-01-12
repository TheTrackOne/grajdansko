document.getElementByClassName("menu-toggle-btn").click(function(){
    this.classList.toggle("fa-times");
    document.getElementByClassName("navigation-menu").classList.toggle("active");
});
function ModalOpen (){
    document.getElementById('phone-1').style.display = 'block';
    document.getElementById('phone-2').style.display = 'block';
}