function Button({ children }) {
    return (
        <button style={{ padding: "10px", background: "orange" }}>
            {children}
        </button>
    );
}

export default Button;
