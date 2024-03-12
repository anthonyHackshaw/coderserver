class ProductsManager{
    static #products = []
create(data){
    const user = {
        id : ProductsManager.#products.length === 0 ? 1 : ProductsManager. #products[ProductsManager.#products.length - 1].id+1, 
        title : data.title,
        photo : data.photo,
        category : data.category,
        price : data.price,
        stock : data.stock

   }
   ProductsManager.#products.push(user)
   console.log("productocreado");
}
read(){
    return ProductsManager.#products
}
}


const gestorDeProductos = new ProductsManager()
gestorDeProductos.create({
    title : "Nike",
    photo : "photo.png",
    category : "sport",
    price : "120",
    stock : "100"
}) 
gestorDeProductos.create({
    title : "Puma",
    photo : "photo.png",
    category : "remera",
    price : "50",
    stock : "40"
})  
gestorDeProductos.create({
    title : "levis",
    photo : "photo.png",
    category : "jeans",
    price : "80",
    stock : "120"
}) 
gestorDeProductos.create({
    title : "Adidas",
    photo : "photo.png",
    category : "botas",
    price : "180",
    stock : "20"
}) 
gestorDeProductos.create({
    title : "Converse",
    photo : "photo.png",
    category : "gorras",
    price : "20",
    stock : "400"
}) 




//crear un nuevo usuario
class UserManager {
    static #users = []
    create(data) {
        const user ={
            id: UserManager.#users.length === 0 ? 1 : UserManager.#users[UserManager.#users.length - 1].id+1,
            foto: data.foto,
            email: data.email,
            password: data.password,
            role:0
        }
        UserManager.#users.push(user)
        console.log("usuario creado")
    }
    read(){
        return UserManager.#users
    }

} 
const gestorDeUsuarios = new UserManager()
gestorDeUsuarios.create({
    foto: "fotografia.jpg",
    email: "barriosarom@gail.com",
    password: "firulais1234"
})
gestorDeUsuarios.create({
    foto: "picture.jpg",
    email: "aromaguilar@gail.com",
    password: "michi1234"
})






console.log(gestorDeProductos.read())
console.log(gestorDeUsuarios.read())
 


