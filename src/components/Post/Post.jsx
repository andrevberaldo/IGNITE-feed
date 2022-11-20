import styles from './Post.module.css';
import Chance from '../../Utils/Chance';
import moment from 'moment';
import { Comment } from '../Comment/Comment';

export function Post() {
    const postDate = moment().subtract(Chance.int(), 'minutes');
    const job = Chance.job();

    return (
        <article className={styles.post}>

            <header className={styles.header}>
                
                <div className={styles.author}>
                    <img className={styles.avatar} src={Chance.avatar()} alt="" />
                    <div className={styles['author-info']}>
                        <strong>{Chance.name()}</strong>
                        <span title={job}>{job}</span>
                    </div>
                </div>

                <time
                    dateTime={postDate.format('LT')}
                    title={postDate.format('ll')}
                >
                    Posted {postDate.fromNow()}
                </time>

            </header>

            <div className={styles.content}>
                <p>{Chance.content(3)}</p>
                <p>
                    <a href="#">#{Chance.word()}</a>{' '}
                    <a href="#">#{Chance.word()}</a>{' '}                
                    <a href="#">#{Chance.word()}</a>{' '}
                </p>
            </div>

            <form className={styles.feedback}>
                
                <strong>Give Your Feedback</strong>
                
                <textarea 
                    placeholder='Give Your Feedback'
                />

                <footer>
                    <button type='submit'>
                        Comment
                    </button>                
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>

            

        </article>
    )
}