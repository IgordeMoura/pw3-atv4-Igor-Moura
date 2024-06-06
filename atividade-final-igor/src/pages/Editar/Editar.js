import { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom'

import style from './Editar.module.css'

import Input from '../../Components/form/input/Input';
import Select from '../../Components/form/select/Selec';

import Imagem from '../../img/Sign up-cuate.png'

function Editar(params) {

    const navigate = useNavigate();
    
    const [modules, setModules] = useState([]);

    const{id} = useParams();
    console.log('ID: ' + id);

    /* State de Dados que Vai Armazenar Objeto Json de Student */
    const [student, setStudent] = useState({});

    /* Recupera os Dados de Modules do Arquivo db.json */
    useEffect(() =>{
        fetch(
            'http://localhost:5000/module', {
                method: 'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(
            (response) => response.json()
        ).then(
            (data) =>{
                setModules(data);
                console.log(data)
            }
        ).catch(
            (error) =>{
                console.log(error);
            }
        )
    }, []);

    useEffect(()=>{ 

        fetch(`http://localhost:5000/students/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                setStudent(data)
                console.log(data)
            })
            .catch((err)=>{console.log(err)});

    }, []);


    /* Handler de Captura dos Dados de Input */
    function handlerChangeStudent(event){

        setStudent({...student, [event.target.name] : event.target.value});
        console.log(student)
    }

    /* Handler de Captura dos Dados de Select*/
    function handlerChangeSigla(event){

        setStudent({...student, modules:{
            id: event.target.value,
            modules: event.target.options[event.target.selectedIndex].text
        }});
    }
    
    console.log(student)


    /* Edição dos Dados*/
    function editStudent(student){
    
        fetch(`http://localhost:5000/students/${student.id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(
            (resp)=>resp.json()
        )
        .then(
            (data)=>{
                setStudent(data);
                navigate ('/lista', {state: 'Aluno Editado com Sucesso!'});
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
    }
    
    /* Função de Submit */
    function submit(event){
        event.preventDefault();
        editStudent(student);
    }



    return(
        <section className={style.containerCadastro}>

            <div className={style.conteudo}>
                <h1>Editar Alunos</h1>

                <form onSubmit={submit}>

                    <Input
                        type='text'
                        name='nome_aluno'
                        id='nome_aluno'
                        placeholder='digite aqui'
                        text='Digite o nome do aluno'
                        value={student.nome_aluno}
                        handlerOnChange={handlerChangeStudent}
                    />
                    
                    <Select 
                        name='sigla'
                        text='Sigla'
                        options={modules}
                        handlerOnChange={handlerChangeSigla}
                    />

                    <p>
                        <input id={style.buttonEnviar} type='submit' value='Editar Aluno'/>
                    </p>
    
                </form>
            </div>
            <div className={style.conteudo}>
                <img src={Imagem}/>
            </div>
        </section>
    )
}



export default Editar;