import { use } from "react";
import Product from "./Product";


const LatestProducts = ({latestProductsPromise}) => {
      
    const products = use(latestProductsPromise)
    console.log(products)
      return (
            <div className="max-w-7xl mx-auto pt-10">
                  <h2 className="font-bold text-5xl text-center">Recent <span className="text-primary">Products</span></h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                     {
                        products.map(product=><Product product={product} key={product._id} />)
                  }
               </div>
            </div>
      );
};

export default LatestProducts;