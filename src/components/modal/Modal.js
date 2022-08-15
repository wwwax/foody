import React, { createRef } from 'react';

class Modal extends React.Component {
    modalRef = createRef();

    componentDidMount() {
        window.addEventListener('click', this.handleClick);
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick);
        window.removeEventListener('click', this.handleKeyPress);
    }

    handleClick = (e) => {
        if (e.target === this.modalRef.current) this.props.closeModal();
    };

    handleKeyPress = (e) => {
        if (e.keyCode === 27) this.props.closeModal();
    };

    render() {
        const { closeModal } = this.props;

        return (
            <div ref={this.modalRef} className='modal'>
                <div className='modal__content'>
                    <h2 className='modal__title'>Foody</h2>
                    <p className='modal__text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sapiente laudantium eum, sit, aperiam magni
                        tenetur nihil totam fuga commodi distinctio aliquam
                        recusandae dolorum, sint non consequatur quae rem optio
                        doloremque!
                    </p>
                    <button onClick={closeModal}>close</button>
                </div>
            </div>
        );
    }
}

export default Modal;

// re-render on open/close dropdown
