const users = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine DuBuque", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" },
  ];
  
  function renderUsers() {
    const container = document.getElementById("user-container");
    container.innerHTML = "";
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <button onclick="addToCart(${user.id})">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  }
  
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const user = users.find(u => u.id === id);
    if (!cart.some(u => u.id === id)) {
      cart.push(user);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${username} added to cart!.`);
    } else {
      alert(`${username} is already in the cart.`);
    }
  }
  
  renderUsers();