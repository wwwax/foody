import React from "react";
import avatar from "../../images/avatar.png";
import Dropdown from "../dropdown/Dropdown";

const name = "John Doe";

class UserMenu extends React.Component {
    state = {
        isDropdownOpen: false,
    };

    toggleDropdown = () => {
        this.setState((prev) => ({
            isDropdownOpen: !prev.isDropdownOpen,
        }));
    };

    render() {
        const { isDropdownOpen } = this.state;
        const { width } = this.props;

        return (
            <div className="UserMenu" onClick={this.toggleDropdown}>
                <img width={width} src={avatar} alt="avatar" />
                <span className="UserName">{name}</span>
                {isDropdownOpen && <Dropdown />}
            </div>
        );
    }
}

export default UserMenu;
