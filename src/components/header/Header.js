import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import UserMenu from "../userMenu/userMenu";

function Header() {
    return (
        <div className="header">
            <Logo />
            <Nav />
            <UserMenu width={64} />
        </div>
    );
}

export default Header;