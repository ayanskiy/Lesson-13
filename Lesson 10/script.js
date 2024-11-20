// #1
let customerName = "Аян Игилик";
let cartItems = ["сырки", "йогурты", "молоко", "шоколад", "сок", "торт"];
let isRegisteredCostumer = false;
// #2
customerName = "Тони Старк";
console.log(customerName);
// #3
let customerAge = prompt("Введите ваш возраст:");
// #4
if (customerAge < 18) {
    alert("Вам должно быть 18!");
}
else {
    alert("Добро пожаловать!");
}
// #5
if (cartItems.length > 5 && isRegisteredCostumer) {
    console.log("Ура! Поздравляем! Вы получили скидку.");
}
else {
    console.log("Добавьте больше товаров в корзину или зарегистрируйтесь =(.");
}
// #6
console.log(customerName.toUpperCase());
// #7
cartItems.unshift("мороженое");
cartItems.push("газировка");
// #8
console.log(`Привет, ${customerName}! У тебя ${cartItems.length} товаров в корзине.`);
// #9 & 10
let itemPrice = 25 * cartItems.length;
console.log(`Итоговая сумма: ${itemPrice}`);
// #11
for (let item of cartItems) {
    console.log(`Длина строки: "${item}": ${item.length}`);
}
// #12
for (let item of cartItems) {
    if (item.length >= 5) {
        console.log(`Длина строки: "${item}": ${item.length}`);
    }
}
// #13
const customer = {
    name: customerName,
    age: customerAge,
    items: cartItems,
    registered: isRegisteredCostumer,
};
// #14
if (cartItems.length > 10) {
    console.log("Ура! Поздравляем! Вы получили скидку.");
}
else {
    console.log("Добавьте больше товаров в корзину для получения скидки =(.");
}
// #15 
const products = [
    { productName: "сырки", itemPrice: 75 },
    { productName: "йогурты", itemPrice: 55 },
    { productName: "молоко", itemPrice: 85 },
    { productName: "шоколад", itemPrice: 15 },
    { productName: "сок", itemPrice: 40 },
    { productName: "торт", itemPrice: 120 },
];
let cheapProducts = products.filter((product) => product.itemPrice < 70);
console.log("Список дешевых товаров:", cheapProducts);
// 16
let finalSum = products.reduce((total, product) => total + parseInt(product.itemPrice), 0);
console.log(` Итоговая цена всех продуктов: ${finalSum} тенге`);