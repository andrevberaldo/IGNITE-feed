import styles from './Comment.module.css';
import Chance from '../../Utils/Chance';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return(
        <div className={styles.comment}>            
            <img src={Chance.avatar()} alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nome</strong>
                            <time>Cerca de 1hr atrás</time>
                        </div>

                        <button title={'Delete Comment'}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Conteúdo comentário</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}