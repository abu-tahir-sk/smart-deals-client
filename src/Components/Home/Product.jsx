import { Link } from "react-router";
const Product = ({ product }) => {
  const { _id,image, title,price_max ,price_min } = product;
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
      <Link to={`views-details/${_id}`} className="btn w-full border-2 border-purple-800 font-semibold">Views Details</Link>
    </div>
  </div>
</div>
  );
};

export default Product;
