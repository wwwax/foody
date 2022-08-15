import logo from '../../images/logo.png';

function Logo({ openModal }) {
    return (
        <img
            className='logo'
            src={logo}
            width={64}
            alt='foody'
            onClick={openModal}
        />
    );
}

export default Logo;
