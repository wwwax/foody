import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import UserMenu from '../user-menu/UserMenu';

function Header({ openModal }) {
    return (
        <div className='Header'>
            <Logo openModal={openModal} />
            <Nav />
            <UserMenu width={64} />
        </div>
    );
}

export default Header;
