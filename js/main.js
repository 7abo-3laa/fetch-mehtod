let container = document.getElementById('container');

fetch("https://dummyjson.com/products")
.then(function(items){
    return items.json();
} )
.then(function (result)
{
    var products = result.products;
    console.log(products);
    //image, title, category, price, rating

    for (let i = 0; i < products.length; i++) {
        let card = document.createElement('div');
        card.className = 'test';
        
        card.innerHTML = `
        <img src="${products[i].images[0]}" style="width: 300px; height: 400px;"/>
        <h2>${products[i].title}</h2>
        <h3>${products[i].category}</h3>
        <h4>${products[i].price}</h4>
        <h4>${products[i].rating}</h4>
        `;
      container.appendChild(card);
    }

});