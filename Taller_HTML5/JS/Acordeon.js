const main = () => {
    let elementosAcordeon = document.getElementsByClassName("acordeon")

        for (let index = 0; index < elementosAcordeon.length; index++) {
        elementosAcordeon[index].addEventListener("click",function() {
        this.classList.toggle("active")

            let informacion = this.nextElementSibling
            if (informacion.style.display == "none") {
                informacion.style.display = "block"  
            } else {
                informacion.style.display = "none"
            }
        })
    
    }
}