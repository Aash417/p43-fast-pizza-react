import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
	return (
    <header className="border-b border-stone-200 bg-yellow-500 uppercase sm:px-6">
      <Link to="/" className="tracking-[5px] ">
        Fast Pizza co.
      </Link>
      <SearchOrder />
      <p>aashish & co.</p>
    </header>
  );
}

export default Header;
