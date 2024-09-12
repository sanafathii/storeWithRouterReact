import { Link } from "react-router-dom";

function Shoping({ count }) {
  return (
    <div className="flex justify-between items-cente">
      <Link to="/cartProduct">
        <span className=" cursor-pointer">
          Cart
          <span className="bg-red-800 text-xs count flex items-center justify-center text-white rounded-full">
            {count}
          </span>
        </span>
      </Link>
      <span className="px-2 cursor-pointer">My account</span>
    </div>
  );
}

export default Shoping;
