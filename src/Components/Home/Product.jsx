const Product = ({ product }) => {
  const { image, title,price_max ,price_min } = product;
  return (
   <div className="card bg-base-100  shadow-xl">
  <figure className="p-4">
    <img
      src={image}
      alt={title}
      className="rounded-xl h-64 w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: ${price_max}-{price_min}</p>
    <div className="card-actions">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Product;
