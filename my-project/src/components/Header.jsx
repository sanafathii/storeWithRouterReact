import Menu from "./Menu";
import Shoping from "./Shoping";

function Header({ count }) {
  return (
    <div className="flex justify-between items-cente py-1 px-8">
      {/* <Logo /> */}
      <h1>Logo</h1>
      <Menu />
      <Shoping count={count} />
    </div>
  );
}

export default Header;
