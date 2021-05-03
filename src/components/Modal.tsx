import { useState } from 'react';
import './styles.scss'

const Modal = () => {
    
    const [show, setShow] = useState(false);
    
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Modal Header</h2>
                </div>
                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                <div className="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>
        </div>
    )
}

export default Modal;