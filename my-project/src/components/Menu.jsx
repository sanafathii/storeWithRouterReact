import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="flex justify-between items-center w-1/4">
      <Link to="/">
        <span className=" py-1 cursor-pointer border-gray-800 border-b-2">
          Shop
        </span>
      </Link>

      <span className=" py-1 cursor-pointer">Collection</span>
      <span className=" py-1 cursor-pointer">Explore</span>
    </div>
  );
}

export default Menu;
