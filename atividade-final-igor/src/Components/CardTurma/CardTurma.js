import styles from './CardTurma.module.css';
import { Link } from 'react-router-dom';

function CardTurma({ id, aluno, turma, handlerRemove}){

    const remove = (event)=>{
        event.preventDefault();
        handlerRemove(id);
    }

    return(
        <div className={styles.student_card}>

            <p>{aluno}</p>
            <p className={styles.category_text}>
                <span></span> {turma}
            </p>

            <div className={styles.botoes}>
                <button onClick={remove} className={styles.excluir}>Excluir</button>
                <button  className={styles.editar}><Link to={`/editar/${id}`}>
                    Editar
                </Link></button>
            </div>
        </div>
    )
}

export default CardTurma;