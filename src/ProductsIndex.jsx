export function ProductsIndex(props) {
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
