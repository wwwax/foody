import React, { createRef } from 'react';
import avatar from '../../images/avatar.png';
import Dropdown from '../dropdown/Dropdown';

const name = 'John Doe';

class UserMenu extends React.Component {
    state = {
        isDropdownOpen: false,
    };

    userMenuRef = createRef();
    dropdownRef = createRef();

    handleClick = (e) => {
        if (
            !this.state.isDropdownOpen &&
            this.userMenuRef.current.contains(e.target)
        ) {
            this.setState({ isDropdownOpen: true });
        }

        if (
            this.state.isDropdownOpen &&
            !this.dropdownRef.current.contains(e.target)
        ) {
            this.setState({ isDropdownOpen: false });
        }
    };

    componentDidMount() {
        window.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick);
    }

    render() {
        const { isDropdownOpen } = this.state;
        const { width } = this.props;

        return (
            <div
                className={!isDropdownOpen ? 'user-menu' : 'user-menu active'}
                ref={this.userMenuRef}
            >
                <img width={width} src={avatar} alt='avatar' />
                <span className='UserName'>{name}</span>
                {isDropdownOpen && <Dropdown ref={this.dropdownRef} />}
            </div>
        );
    }
}

export default UserMenu;
