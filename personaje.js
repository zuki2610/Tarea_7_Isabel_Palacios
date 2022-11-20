class Personaje {
    nombre = "";
    especie = "";
    imagen = "";

    constructor(nombre, especie, imagen) {
        this.nombre = nombre;
        this.especie = especie;
        this.imagen = imagen;
    }
    get card() {
        return `
    <div class="card shadow-lg p-3 mb-5 rounded" style="width: 19rem;">
        <img src="${this.imagen}" class="card-img-top" alt="Rick">
        <div class="card-body bg-secondary text-white">
            <span class="card-title fw-bold fs-5">Nombre:</span>
            <span class="card-title fs-5">${this.nombre}</span>
            <br>
            <span class="card-text fw-bold fs-5">Especie:</span>
            <span class="card-text fs-5">${this.especie}</span>
        </div>
    </div> `;
    }
}
