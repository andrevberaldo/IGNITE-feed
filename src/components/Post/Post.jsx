import styles from './Post.module.css';
import Chance from '../../Utils/Chance';
import moment from 'moment';
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';

export function Post({fakePublisher}) {
    const postDate = moment().subtract(Chance.int(), 'minutes');

    return (
        <article className={styles.post}>

            <header className={styles.header}>
                
                <div className={styles.author}>
                    <Avatar 
                        src={fakePublisher.avatar}
                    />
                    <div className={styles['author-info']}>
                        <strong>{fakePublisher.firstName}</strong>
                        <span title={fakePublisher.job}>{fakePublisher.job}</span>
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