import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'

import Message from '../../Components/message/Message';
import CardTurma from '../../Components/CardTurma/CardTurma';

import style from './Lista.module.css'


function Cadastro (){

    const [students, setStudents] = useState([]);

    // Estado de dados da Mensagem de Exclusão de Estudante
    const [Message2, setMessage2] = useState('');

    useEffect(()=>{
        
        fetch('http://localhost:5000/students', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
        })
            .then((resp)=>resp.json())
            .then((data)=>{setStudents(data)})
            .catch((err)=>{console.log(err)});

    }, [students]);

    // Função de Exclusão de Estudande
    function removeStudents(id){
        setMessage2('');

        fetch(`http://localhost:5000/students/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
        })
        .then(resp=> resp.json())
        .then(
            (data) => {

                setMessage2('Excluido Com Sucesso');
            }
        )
        .catch(err=>console.log(err));
    }


    const location = useLocation();
    let message = '';

    // console.log('location state: ' + location.state);

    if (location.state){
        message = location.state;
    }

    return(
        <section>

            <h1>Aqui Serão Listados os Seus <span>Alunos!</span></h1>
            
            {/* Mensagem de Sucesso Para Cadastro */}
            {
                message && (
                    <Message
                        msg={message}
                        type='success'
                    />                    
                )
            }

            {/* Mensagem de Sucesso para Exclusao */}
            {
                Message2 && (
                    <Message
                        msg={Message2}
                        type='error'
                    />                    
                )
            }

            {/* <Container> */}

            {

                students.map((student)=>[
                    <CardTurma
                        id={student.id}
                        aluno={student.nome_aluno}
                        turma={student.modules.modules}
                        key={student.id}
                        handlerRemove={removeStudents}
                    />
                ])
            }
            {/* </Container> */}

        </section>
    )
}

export default Cadastro;