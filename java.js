// java.js

// Menú responsive
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
        let span = document.createElement("span");
        span.innerHTML = "X";
        span.style.cursor = "pointer";
        span.style.fontSize = "40px";
        document.getElementById("nav").appendChild(span);
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className = "";
    }
}

// Cerrar menu al hacer clic en links
const links = document.querySelectorAll("#nav a");
for(let i = 0; i < links.length; i++){
    links[i].onclick = function(){
        let x = document.getElementById("nav");
        x.className = "";
        let btnEliminar = document.querySelector("#nav span");
        if(btnEliminar) btnEliminar.remove();
    }
}

// Descargar CV
document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=110ipMzkSUr0E-A8v_4ujA7GVWwEs6MmG';
    const fileName = 'CV_Julian_Casalis.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// Filtro de proyectos
const tabButtons = document.querySelectorAll('.tab-btn');
const projectItems = document.querySelectorAll('.galeria .item');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remover clase active de todos los botones
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if(filter === 'todos') {
                item.style.display = 'block';
            } else {
                if(item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
