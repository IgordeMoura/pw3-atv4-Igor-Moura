import styles from './CardTurma.module.css';

function CardTurma({}){

    return(
        <div className={styles.book_card}>

            <h4>{livro}</h4>
            
            <p></p>{autor}

            <p className={styles.category_text}>
                <span></span> {category}
            </p>
            
        </div>
    )
}

export default CardTurma;