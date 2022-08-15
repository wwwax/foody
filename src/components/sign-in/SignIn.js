import React from "react";

import Input from "../../ui/Input";
import Button from "../../ui/Button";

class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                />

                <Button>sign in</Button>
            </form>
        );
    }
}

export default SignIn;
