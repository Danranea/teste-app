import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import api from './Api';
import Modal from './components/Modal';
import './styles.scss'
import FormatarMoeda from './functions/FormatarMoeda';
import ApenasLetras from './functions/ApenasLetras'

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
  university: {
      name: string,
      score: number,
      logo_url: string
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
  const [cursosFilter, setCursosFilter] = useState<FormState[]>([]);
    
  const [modalShow, setModalShow] = useState(false);

  function pesquisa(){
    const cidade = (document.getElementById('cidade') as HTMLInputElement).value;
    const cursoVar = (document.getElementById('curso') as HTMLInputElement).value;
    const preco = (document.getElementById('preco') as HTMLInputElement).value;
    const cursos :FormState[] = [];
    
    response.forEach(curso => {
      if (curso.campus.city.includes(cidade) && curso.course.name.includes(cursoVar)) {
          cursos.push(curso)
      }
    });

    setCursosFilter(cursos);
    console.log(cursosFilter)
  }

  useEffect(() => {
    pesquisa()
}, [])
  
  const response = [{
    "full_price": 500,
    "price_with_discount": 450,
    "discount_percentage": 0.10,
    "start_date": "2021-01-01",
    "enrollment_semester": 2,
    "enabled": true,
    "course": {
      "name": "Análise e desenvolvimento de sistemas",
      "kind": "Técnologo",
      "level": "Técnologo",
      "shift": null
    },
    "university":
    {
      "name": "Unip",
      "score": 7.2,
      "logo_url": "http://sindbeneficente.org.br/files/imagens/Noticias/logotipo_unip.jpg"
    },
    "campus": {
      "name": "Tatuapé",
      "city": "São Paulo"
    }
  },
  { "full_price": 875, 
  "price_with_discount": 815.7, 
  "discount_percentage": 0.78, 
  "start_date": "2021-01-01", 
  "enrollment_semester": 1, 
  "enabled": true, 
  "course": 
  { "name": "Ciências da computação", 
  "kind": "Bacharelado", 
  "level": "Bacharelado", 
  "shift": null }, 
  "university": { "name": "Unip", 
  "score": 7.2, 
  "logo_url": "http://sindbeneficente.org.br/files/imagens/Noticias/logotipo_unip.jpg" }, 
  "campus": 
  { "name": "Tatuapé", 
  "city": 
  "São Paulo" }
}, 
{ "full_price": 745, 
"price_with_discount": 710, 
"discount_percentage": 0.47, 
"start_date": "2021-06-01", 
"enrollment_semester": 1, 
"enabled": true, 
"course": 
{ "name": "Ciências Contábeis", 
"kind": "Bacharelado", 
"level": "Bacharelado", 
"shift": null }, 
"university": 
{ "name": "Unip", 
"score": 7.2, 
"logo_url": "http://sindbeneficente.org.br/files/imagens/Noticias/logotipo_unip.jpg" }, 
"campus": 
{ "name": "Tatuapé", 
"city": "São Paulo" }} ]

  /* useEffect(() => {
    api.get(' ')
      .then(response => {
        
      })
    
  }, []) */

  return (
    <div>
      <h1 className="titulo-app">
        Lista de Cursos
      </h1>

      <div className="input-app">

        <div >
          <input
            id="cidade"
            className="input-app-first"
            placeholder="Cidade"
            required />
        </div>
        <div>
          <input
            className="input-app-second"
            placeholder="Curso"
            id="curso"
            type="text"
            onKeyPress={ApenasLetras}
          />
        </div>
        <div >
          <input
            id = "preco"
            className="input-app-third"
            placeholder="Preço"
            type="text"
            onKeyUp={FormatarMoeda}
            maxLength={9} />

        </div>

      </div>
      <div>
        <button
        onClick={pesquisa}>
          Buscar
        </button>
      </div>

      <table className="table-app">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Nome do Curso</th>
            <th>Cidade</th>
            <th>Preço</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {cursosFilter.map(curso => (
            <tr /* key={curso.id} */>
              <td>
                <img className="img-cursos" src={curso.university.logo_url}/>
              </td>
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
      <Modal
        show={modalShow}
      />

    </div >
  )
}

export default App;
