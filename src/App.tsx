import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import api from './Api';

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

function MyVerticallyCenteredModal(props: ModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <button onClick={props.onHide}>Close</button> */}
      </Modal.Footer>
    </Modal>
  );
}

const App = () => {

  const [cursos, setCursos] = useState<FormState[]>([]);
  const [modalShow, setModalShow] = React.useState(false);

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
      <h1>
        Lista de Cursos
      </h1>
      <table>
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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </div>
  )
}

export default App;
