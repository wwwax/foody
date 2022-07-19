import avatar from "../../images/avatar.png";

const name = "John Doe";

function UserMenu({ width }) {
    return (
        <div className="userMenu">
            <img width={width} src={avatar} alt="avatar" />
            <span>{name}</span>
            <button>dropdown</button>
        </div>
    );
}

export default UserMenu;
