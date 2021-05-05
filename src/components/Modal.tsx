import { Dispatch, SetStateAction, useState } from 'react';
import './styles.scss'

type ModalProps = {
    modalShow: boolean;
    setModalShowState: (state:boolean) => void;
}

const Modal = () => {

    const [modalShow, setModalShow] = useState(false);
    

    return (
        
        <div className={`modal ${modalShow ? "modal-show" : ""}`}>
            {console.log(modalShow)}
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close"
                    >&times;</span>
                    
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