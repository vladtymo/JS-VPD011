const box = document.getElementById('box1');

// box.addEventListener('click', () => {
//     console.log("Clicked");
// })
box.onclick = () => {
    console.log("Clicked");
};
// box.innerHTML = "<button>Click me</button>";

// -=-=-=-=-=-=-=- Product List -=-=-=-=-=-=-=-
const add_btn = document.getElementById('add-prod-btn');
const prod_list = document.getElementById('prod-list');

const name_input = document.getElementById('prod-name');
const price_input = document.getElementById('prod-price');
const prod_count = document.getElementById('prod-count');

let products = [];

add_btn.onclick = (event) => {
    event.preventDefault();

    // TODO: validations

    const newProduct = {
        name: name_input.value,
        price: price_input.value
    };
    products.push(newProduct);

    //prod_list.innerHTML += `<li>${newProduct.name} ${newProduct.price}</li>`;

    const list_item = document.createElement("li");
    list_item.classList.add("new-product");
    list_item.innerHTML = `${newProduct.name} ${newProduct.price}`;

    prod_list.appendChild(list_item);

    prod_count.innerHTML = products.length;
};