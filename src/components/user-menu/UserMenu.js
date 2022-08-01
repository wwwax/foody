import React, { createRef } from "react";
import avatar from "../../images/avatar.png";
import Dropdown from "../dropdown/Dropdown";

const name = "John Doe";

class UserMenu extends React.Component {
    state = {
        isDropdownOpen: false,
    };

    containerRef = createRef();

    toggleDropdown = () => {
        this.setState((prev) => ({
            isDropdownOpen: !prev.isDropdownOpen,
        }));
    };

    handleClick = (e) => {
        if (!this.containerRef.current.contains(e.target)) {
            this.setState({ isDropdownOpen: false });
        }
    };

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }

    render() {
        const { isDropdownOpen } = this.state;
        const { width } = this.props;

        return (
            <div
                style={{ border: "1px solid red" }}
                className="UserMenu"
                onClick={this.toggleDropdown}
                ref={this.containerRef}
            >
                <img width={width} src={avatar} alt="avatar" />
                <span className="UserName">{name}</span>
                {isDropdownOpen && <Dropdown />}
            </div>
        );
    }
}

export default UserMenu;
