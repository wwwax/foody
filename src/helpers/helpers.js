const handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
};

export { handleChange };
