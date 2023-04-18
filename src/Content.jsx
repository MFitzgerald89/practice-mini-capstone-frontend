import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Content() {
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
