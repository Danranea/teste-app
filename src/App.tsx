import React, { useCallback, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import api from './Api';
import Modal from './components/Modal';
import './styles.scss'
import FormatarMoeda from './functions/FormatarMoeda';
import ApenasLetras from './functions/ApenasLetras'
import {CourseInform} from './types/types';

type ModalProps = {
  show: boolean,
  onHide: () => void
}

const App = () => {

  const [curso, setCurso] = useState<CourseInform>();
  const [cursosFilter, setCursosFilter] = useState<CourseInform[]>([]);

  const [modalShow, setModalShow] = useState(false);

  const pesquisa = /* useCallback( */ () => {
    const cidade = (document.getElementById('cidade') as HTMLInputElement).value;
    const cursoVar = (document.getElementById('curso') as HTMLInputElement).value;
    /* const preco = (document.getElementById('preco') as HTMLInputElement).value; */
    const cursos: CourseInform[] = [];

    response.forEach(curso => {
      if (curso.campus.city.includes(cidade) && curso.course.name.includes(cursoVar)) {
        cursos.push(curso)
      }
    });

    setCursosFilter(cursos);
    console.log(cursosFilter)
  }/* , [cursosFilter]) */

    useEffect(() => {
      console.log('rodei')
      pesquisa()
    }, [/* pesquisa */])

  const response :CourseInform[] = [{
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
      "shift": ''
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
  {
    "full_price": 875,
    "price_with_discount": 815.7,
    "discount_percentage": 0.78,
    "start_date": "2021-01-01",
    "enrollment_semester": 1,
    "enabled": true,
    "course":
    {
      "name": "Ciências da computação",
      "kind": "Bacharelado",
      "level": "Bacharelado",
      "shift": ''
    },
    "university": {
      "name": "Unip",
      "score": 7.2,
      "logo_url": "http://sindbeneficente.org.br/files/imagens/Noticias/logotipo_unip.jpg"
    },
    "campus":
    {
      "name": "Tatuapé",
      "city":
        "São Paulo"
    }
  },
  {
    "full_price": 745,
    "price_with_discount": 710,
    "discount_percentage": 0.47,
    "start_date": "2021-06-01",
    "enrollment_semester": 1,
    "enabled": true,
    "course":
    {
      "name": "Ciências Contábeis",
      "kind": "Bacharelado",
      "level": "Bacharelado",
      "shift": ''
    },
    "university":
    {
      "name": "Unip",
      "score": 7.2,
      "logo_url": "http://sindbeneficente.org.br/files/imagens/Noticias/logotipo_unip.jpg"
    },
    "campus":
    {
      "name": "Tatuapé",
      "city": "São Paulo"
    }
  }]

  /* useEffect(() => {
    api.get(' ')
      .then(response => {
        
      })
    
  }, []) */

  function detalhesCurso(curso: CourseInform){
    setCurso(curso)
    setModalShow(true)
  }

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
            onChange={ApenasLetras}
          />
        </div>
        <div >
          <input
            id="preco-minimo"
            className="input-app-third"
            placeholder="Preço Mínimo"
            type="text"
            onChange={() => FormatarMoeda('preco-minimo')}
            maxLength={9} />

          <input
            id="preco-maximo"
            className="input-app-third"
            placeholder="Preço Máximo"
            type="text"
            onChange={() => FormatarMoeda('preco-maximo')}
            maxLength={9} />

        </div>

      </div>
      <div>
        <button
          className="button-search"
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
                <img className="img-cursos" src={curso.university.logo_url} />
              </td>
              <td>{curso.course.name}</td>
              <td>{curso.campus.city}</td>
              <td>{curso.price_with_discount}</td>
              <td>
                <button
                  onClick={() => detalhesCurso(curso)}>
                  Detalhes
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      {curso &&
        <Modal
          modalShow={modalShow}
          setModalShow = {setModalShow}
          curso={curso}
        />
      }
    </div >
  )
}

export default App;
