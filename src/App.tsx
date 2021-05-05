import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import api from './Api';
import Modal from './components/Modal';
import './styles.scss'
import FormatarMoeda from './functions';

type FormState = {
  full_price: number,
  price_with_discount: number,
  discount_percentage: number,
  start_date: string,
  enrollment_semester: number,
  enabled: boolean,
  course: {
    name: string
  }
  campus: {
    city: string
  }
}

type ModalProps = {
  show: boolean,
  onHide: () => void
}

const App = () => {

  const [cursos, setCursos] = useState<FormState[]>([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    // api.get(' ')
    //   .then(response => {
    //     setCursos(response.data)
    //   })
    setCursos([{
      full_price: 23,
      price_with_discount: 24,
      discount_percentage: 25,
      start_date: "01/05/2021",
      enrollment_semester: 26,
      enabled: true,
      course: {
        name: "Sillas Chan"
      },
      campus: {
        city: "São Paulo"
      }
    },
    {
      full_price: 31,
      price_with_discount: 32,
      discount_percentage: 33,
      start_date: "03/05/2021",
      enrollment_semester: 34,
      enabled: true,
      course: {
        name: "Sillas Chan 2"
      },
      campus: {
        city: "São Paulooooo"
      }
    }])
  }, [])


  console.log(cursos)
  return (
    <div>
      <h1 className="titulo-app">
        Lista de Cursos
      </h1>

      <div className="input-app">

        <div >
          <input
            className="input-app-first"
            placeholder="Cidade"
            required />
        </div>
        <div>
          <input
            className="input-app-second"
            placeholder="Curso" />
        </div>
        <div >
          <input
            className="input-app-third"
            placeholder="Preço"
            id="valor"
            type="text"
            onKeyUp={FormatarMoeda} 
            maxLength={9}/>

        </div>

      </div>

      <table className="table-app">
        <thead>
          <tr>
            {/* <th>Logo</th> */}
            <th>Nome do Curso</th>
            <th>Cidade</th>
            <th>Preço</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map(curso => (
            <tr /* key={curso.id} */>
              <td>{curso.course.name}</td>
              <td>{curso.campus.city}</td>
              <td>{curso.price_with_discount}</td>
              <td>
                <button
                  onClick={() => setModalShow(true)}>
                  Detalhes
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      {/* <Modal
        modalShow={modalShow}
      setModalShow = {setModalShow}
      /> */}

    </div >
  )
}

export default App;
