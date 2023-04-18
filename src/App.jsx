function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="products-index">All Products</a> | <a href="products-new">New Product</a>
      </header>
    </div>
  );
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name"></input>
        </label>
      </form>
      <form>
        <label>
          Description:
          <input type="text" name="description"></input>
        </label>
      </form>
      <form>
        <label>
          Price:
          <input type="text" name="price"></input>
        </label>
      </form>
      <form>
        <label>
          Image:
          <input type="text" name="image_url"></input>
        </label>
      </form>
    </div>
  );
}

function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id} className="products">
          <h2>{product.name}</h2>
          <img src={product.image_url}></img>
          <p>{product.description}</p>
          <h3>{product.price}</h3>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  let products = [
    {
      name: "Catback Exhaust",
      image_url: "https://www.parkmuffler.com/wp-content/uploads/2018/08/catback-exhaust.jpg",
      description: "Part that flows exhaust gases out the back of a vehicle.",
      price: 1200,
    },
    {
      name: "Muffler",
      image_url: "src/muffler.jpg",
      description: "Part of exhaust system that muffles engine noise coming through exhaust pipes",
      price: 450,
    },
  ];
  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
