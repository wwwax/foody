import React from "react";

import Input from "../../ui/Input";
import Button from "../../ui/Button";

class SignUp extends React.Component {
    state = {
        name: "",
        email: "",
        tel: null,
        password: "",
        ["confirm-password"]: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("this.state :>> ", this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                />

                <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                />

                <Input
                    type="tel"
                    name="tel"
                    placeholder="tel"
                    onChange={this.handleChange}
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                />

                <Input
                    type="password"
                    name="confirm-password"
                    placeholder="confirm password"
                    onChange={this.handleChange}
                />

                <Button>sign up</Button>
            </form>
        );
    }
}

export default SignUp;
