import React from 'react';
import Header from '../header/Header';
import Modal from '../modal/Modal';
import Menu from '../menu/Menu';

class App extends React.Component {
    state = {
        isModalOpen: false,
    };

    openModal = () => this.setState({ isModalOpen: true });
    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        const { isModalOpen } = this.state;

        return (
            <div>
                <Header openModal={this.openModal} />
                <Menu />

                {isModalOpen && <Modal closeModal={this.closeModal} />}
            </div>
        );
    }
}

export default App;
