import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import style from './Lista.module.css'
import Input from '../../Components/form/input/Input';
import Select from '../../Components/form/select/Selec';

function Cadastro() {

    const navigate = useNavigate();
    
    const [modules, setModules] = useState([]);

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


    /* Inserção dos Dados de Livro */
    function createStudent(student){
    
        fetch('http://localhost:5000/students', {
            method: 'POST',
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
                console.log(data);
                navigate ('/lista', {state: 'Livro Cadastrado com Sucesso!'});
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
        createStudent(student);
    }



    return(
        <section className={style.containerFormulario}>

            <h1>Cadastro de Alunos</h1>

            <form onSubmit={submit}>

                <Input
                    type='text'
                    name='nome_aluno'
                    id='nome_aluno'
                    placeholder='digite aqui'
                    text='Digite o nome do aluno'
                    handlerOnChange={handlerChangeStudent}
                    />
                
                <Select 
                    name='sigla'
                    text='Sigla'
                    options={modules}
                    handlerOnChange={handlerChangeSigla}
                />

                <p>
                    <input id={style.buttonEnviar} type='submit' value='Cadastrar Aluno'/>
                </p>
 
            </form>
        </section>
    )
}



export default Cadastro;





    