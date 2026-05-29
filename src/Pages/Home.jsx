import LatestProducts from "../Components/Home/LatestPorducts";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <LatestProducts latestProductsPromise={latestProductsPromise} />
    </div>
  );
};

export default Home;
