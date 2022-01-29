import './navbar.css';
import { useState } from 'react';
const Navbar = () => {
	const [on, setOn] = useState(false);
	const switch_operation = `switch + ${on ? 'active' : ''}`;
	const handleSwitch = () => {
		setOn((prev) => !prev);
	};
	return (
		<div className='nav-bar'>
			<div className='logo'>Notes App</div>
			<div className='switch-content'>
				{!on ? <div>Light</div> : <div>Dark</div>}
				<div className={switch_operation} onClick={handleSwitch}>
					<div className='inner-circle '></div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
