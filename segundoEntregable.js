class ProductManager {
    constructor(productos = []) {
        this.productos = productos
    } getId() {
        return this.productos.length + 1;
    }
    addProduct({ title, descripccion, price, thumnail, code, stock }) {

        if (!title || !descripccion || !price || !thumnail || !code || !stock) {
            console.log("Hay campos vacios")
            return
        } if (this.productos.some((product) => product.code == code)) {
            console.log("un elemento con este codigo ya existe")
            console.log(`este es el prodcuto que tiene el code repetido ${title}`)
            return
        }
        const id = this.getId()
        const product = { id: id, title, descripccion, price, thumnail, code, stock }
        this.productos.push(product)

    } getProducts() {
        return this.productos
    } getProductById(id) {
        const producto = this.productos.find((product) => product.id === id)
        if (producto) return producto;
        console.log(`el producto con el id:${id} no existe`)
    }
}


const manager = new ProductManager()

const producto1 = {
    title: "Camiseta",
    descripccion: "Camiseta de algodón",
    price: 15000,
    thumnail: "https://image.com/camiseta1",
    code: 1001,
    stock: 100
};

const producto2 = {
    title: "Mochila",
    descripccion: "Mochila escolar",
    price: 25000,
    thumnail: "https://image.com/mochila1",
    code: 1002,
    stock: 50
};

const producto3 = {
    title: "Laptop",
    descripccion: "Laptop HP 15.6 pulgadas",
    price: 120000,
    thumnail: "https://image.com/laptop1",
    code: 1003,
    stock: 20
};

const producto4 = {
    title: "Audífonos",
    descripccion: "Audífonos inalámbricos con cancelación de ruido",
    price: 50000,
    thumnail: "https://image.com/audifonos1",
    code: 1004,
    stock: 80
};

const producto5 = {
    title: "Reloj",
    descripccion: "Reloj de pulsera resistente al agua",
    price: 35000,
    thumnail: "https://image.com/reloj1",
    code: 1005,
    stock: 30
};

const producto6 = {
    title: "Cámara",
    descripccion: "Cámara profesional para fotografía",
    price: 800000,
    thumnail: "https://image.com/camara1",
    code: 1006,
    stock: 10
};

const producto7 = {
    title: "Libro",
    descripccion: "Libro de ciencia ficción",
    price: 20000,
    thumnail: "https://image.com/libro1",
    code: 1007,
    stock: 200
};

const producto8 = {
    title: "Zapatos",
    descripccion: "Zapatos deportivos para running",
    price: 90000,
    thumnail: "https://image.com/zapatos1",
    code: 1008,
    stock: 40
};

const producto9 = {
    title: "Tablet",
    descripccion: "Tablet de 10 pulgadas con Android",
    price: 100000,
    thumnail: "https://image.com/tablet1",
    code: 1009,
    stock: 15
};

const producto10 = {
    title: "Teclado",
    descripccion: "Teclado mecánico para gaming",
    price: 70000,
    thumnail: "https://image.com/teclado1",
    code: 1010,
    stock: 25
};



manager.addProduct(producto1)
// const get = manager.getProducts()
// console.log(get)
// const getProductById = manager.getProductById(5)
// console.log(getProductById)