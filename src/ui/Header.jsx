import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
	return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-[5px]">
        Fast Pizza co.
      </Link>
      <SearchOrder />
      <p>aashish & co.</p>
    </header>
  );
}

export default Header;
