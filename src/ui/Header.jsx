import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
	return (
		<div>
			<Link to="/">Fast Pizza co.</Link>
			<SearchOrder />
			<p>aashish & co.</p>
		</div>
	);
}

export default Header;
