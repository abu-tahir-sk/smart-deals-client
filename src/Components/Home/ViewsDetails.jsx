import { useLoaderData } from "react-router";

const ViewsDetails = () => {
  const { _id,image,description, title,price_max ,price_min } = useLoaderData();
 
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
         <div>
             <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h4 className="text-xl font-bold">Product Description</h4>
            <p>
                  {description}
            </p>
          </div>
         </div>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
            Price: ${price_max} - {price_min}
            </p>
            <button className="btn btn-primary w-full">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewsDetails;
