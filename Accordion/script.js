const accordionBtn = document.querySelectorAll(".item_header");

accordionBtn.forEach((accordion) =>{
    accordion.onclick = function () {
        this.classList.toggle("active");

        let content = this.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
})