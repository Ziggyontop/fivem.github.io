document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10, description: 'Beschrijving van Product 1' },
        { id: 2, name: 'Product 2', price: 20, description: 'Beschrijving van Product 2' },
        { id: 3, name: 'Product 3', price: 30, description: 'Beschrijving van Product 3' },
    ];

    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Prijs: €${product.price}</p>
            <button onclick="addToCart(${product.id})">Voeg toe aan winkelwagen</button>
        `;
        productList.appendChild(productDiv);
    });
});

function addToCart(productId) {
    alert(`Product ${productId} toegevoegd aan winkelwagen!`);
}
