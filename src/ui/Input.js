function Input({ type, name, onChange, placeholder }) {
    return (
        <input
            style={{ border: "2px solid red", padding: "10px" }}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default Input;
