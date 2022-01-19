//Bai 1
let products=[{
    name: "Bún bò Huế",
    title: "Món ăn truyền thống",
    des: "Gồm có bún, chân giò, bò,...",
    img: './image1.jpg'
},
{
    name: "Bún bò Huế",
    title: "Món ăn truyền thống",
    des: "Gồm có bún, chân giò, bò,...",
    img: './image1.jpg'
},
{
    name: "Bún bò Huế",
    title: "Món ăn truyền thống",
    des: "Gồm có bún, chân giò, bò,...",
    img: './image1.jpg'
},
{
    name: "Bún bò Huế",
    title: "Món ăn truyền thống",
    des: "Gồm có bún, chân giò, bò,...",
    img: './image1.jpg'
},
{
    name: "Bún bò Huế",
    title: "Món ăn truyền thống",
    des: "Gồm có bún, chân giò, bò,...",
    img: './image1.jpg'
},
]
let items = document.querySelector('.items')
// console.log(items);
for( i of products) {
    items.innerHTML += `
    <div>
        <img src ="${i.img}" alt="">
        <button>Add to list</button>
        </div>
    <div>
        <h2>${i.name}</h2>
        <h4>${i.title}</h4>
        <p>${i.des}</p>
    </div>
    
    `
}
let productsCartToString = JSON.stringify(products)
localStorage.setItems('products',productsCartToString)
let productsData= localStorage.getItem('products')
console.log(JSON.parse(productsData));
// Bai 2

