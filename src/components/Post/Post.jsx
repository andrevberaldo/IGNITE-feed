import styles from './Post.module.css';
import { useState } from 'react';
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';

export function Post({ author, content, publishedAt }) {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const postContentAsHtml = content.map(line => {
        if(line.type === 'paragraph') return <p key={line.content}>{line.content}</p>
        if(line.type === 'link') return <p key={line.content}><a href={'#'}>{line.content}</a></p>
    });
    
    const commentsAsHtml = comments.map(comment => (
        <Comment
            key={comment}
            content={comment}
            onDeleteComment={handleOnDeleteComment}
        />)
    );

    function handleCreateNewComment(event) {
        event.preventDefault();
        if(newComment) {            
            setComments([
                ...comments,
                newComment
            ]);
            setNewComment('');
        }        
    }

    function handleNewCommentOnChange(event) {
        setNewComment(event.target.value);
    }

    function handleOnDeleteComment(commentProp) {
        
        const commentsFiltered = comments.filter(comment => comment !== commentProp);
        setComments(commentsFiltered);
    }

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

            <form 
                className={styles.feedback}
                onSubmit={handleCreateNewComment}
            >
                
                <strong>Give Your Feedback</strong>
                
                <textarea 
                    placeholder='Give Your Feedback'
                    onChange={handleNewCommentOnChange}
                    value={newComment}
                />

                <footer>
                    <button type='submit'>
                        Comment
                    </button>                
                </footer>

            </form>

            <div className={styles.commentList}>
                { commentsAsHtml }
            </div>

        </article>
    )
}