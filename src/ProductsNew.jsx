export function ProductsNew() {
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
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
