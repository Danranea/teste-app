import { Dispatch, SetStateAction, useState } from 'react';
import './styles.scss'
import { CourseInform } from '../types/types';

type ModalProps = {
    modalShow: boolean;
    setModalShow: (state: boolean) => void;
    curso: CourseInform
}

const Modal = ({ modalShow, setModalShow, curso }: ModalProps) => {

    return (

        <div className={`modal ${modalShow ? "modal-show" : ""}`}>
            {console.log(modalShow)}
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => setModalShow(false)}
                    >&times;</span>
                    <img className="img-cursos" src={curso.university.logo_url} />
                    <h2 className="curso-kind">{curso.course.kind}</h2>
                    <h2 className="curso-level">{curso.course.level}</h2>
                </div>
                <div className="modal-body">
                    <div className="curso-nome">
                        <h2>{curso.course.name}</h2>
                        <h2>{curso.campus.name}</h2>
                    </div>
                    <div className="university">
                        <h2 className="university-score">{curso.university.score}</h2>
                        <h2 className="campus-city">{curso.campus.city}</h2>
                    </div>
                </div>
                <div className="modal-footer">
                    <h2>R$ {curso.price_with_discount}</h2>
                </div>
            </div>
        </div>
    )
}

export default Modal;