const card = document.querySelector(".card");
const alternativeBtn = document.querySelector("#alternativeBtn");
const buyBtn = document.querySelector("#buyBtn");

const producto1 = [
  {
    id: 1,
    marca: "Dell",
    modelo: "Xtreme 270",
    precio: 3990,
    img:
      "https://www.laptopsdirect.co.uk/Images/A1X555UA-DM059T_5_supersize.jpg?v=2",
  },
];

const producto2 = [
  {
    id: 2,
    marca: "Apple",
    modelo: "MacBook Air",
    precio: 999,
    img:
      "https://falabella.scene7.com/is/image/Falabella/15028801_1?wid=800&hei=800&qlt=70",
  },
];

function formatCurrency(amount) {
  let CLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return CLP.format(amount);
}

function mostrarProducto() {
  const producto = producto1[0];
  card.querySelector(".card-img-top").src = producto.img;
  card.querySelector(
    ".card-title"
  ).textContent = `${producto.marca} ${producto.modelo}`;
  card.querySelector(".precio").textContent = formatCurrency(producto.precio);
}

function mostrarAlternativa() {
  const producto = producto2[0];
  card.querySelector(".card-img-top").src = producto.img;
  card.querySelector(
    ".card-title"
  ).textContent = `${producto.marca} ${producto.modelo}`;
  card.querySelector(".precio").textContent = formatCurrency(producto.precio);
}

buyBtn.addEventListener("click", mostrarProducto);
alternativeBtn.addEventListener("click", mostrarAlternativa);
