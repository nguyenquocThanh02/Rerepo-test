import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { getAll } from "../axios/jwtAxios";
import { Button } from "../components/ui/button";

const Home = () => {
  const [products, setProducts] = useState([]);

  const handleGetProducts = async () => {
    const p = await getAll();
    // console.log(p);
    setProducts(p.data);
  };

  useEffect(() => {
    handleGetProducts();
    handleGetProducts();
  }, []);

  return (
    <div className="flex justify-center">
      <nav className="block">
        <ul className="flex gap-4">
          <li className="hover:opacity-80">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/query">Query</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signin">Register</Link>
          </li>
        </ul>
      </nav>
      <Button onClick={handleGetProducts}>{products}</Button>

      {/* <div className="flex flex-wrap gap-10">
        {products &&
          products?.map((data, index) => (
            <div
              className="w-[240px] h-[480px] rounded overflow-hidden shadow-lg"
              key={index}
            >
              <img
                className="w-full h-[212px]"
                src={data?.image}
                alt="Product Image"
              />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data?.name}</div>
                <p className="text-gray-700 text-base mb-2">{data?.price}</p>
                <p className="text-gray-700 text-base mb-2">
                  {data?.countInStock}
                </p>
                <p className="text-gray-700 text-base">{data?.type}</p>
              </div>

              <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Detail
                </button>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default Home;
