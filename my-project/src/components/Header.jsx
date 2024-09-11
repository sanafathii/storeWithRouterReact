//

import Logo from "./Logo";
import Menu from "./Menu";
import Shoping from "./Shoping";

function Header() {
  return (
    <div className="flex justify-between items-cente py-1 px-8">
      {/* <Logo /> */}
      <h1>Logo</h1>
      <Menu />
      <Shoping />
    </div>
  );
}

export default Header;
