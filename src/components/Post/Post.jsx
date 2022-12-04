import styles from './Post.module.css';
import Chance from '../../Utils/Chance';
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';
import moment from 'moment';

export function Post({ author, content, publishedAt }) {

    const postContentAsHtml = content.map(line => {
        if(line.type === 'paragraph') return <p>{line.content}</p>
        if(line.type === 'link') return <p><a href={'#'}>{line.content}</a></p>
    })

    return (
        <article className={styles.post}>

            <header className={styles.header}>
                
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatar}
                    />
                    <div className={styles['author-info']}>
                        <strong>{author.name}</strong>
                        <span title={author.role}>{author.role}</span>
                    </div>
                </div>

                <time
                    dateTime={publishedAt.format('LT')}
                    title={publishedAt.format('lll')}
                >
                    Posted {publishedAt.fromNow()}
                </time>

            </header>

            <div className={styles.content}>
                {
                    postContentAsHtml
                }
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