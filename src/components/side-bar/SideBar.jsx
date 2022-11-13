import rand from '../../Utils/Chance';
import styles from './SideBar.module.css';

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={rand.background()} alt="" />
            <div className={styles.profile}>
                <strong>{rand.fullName()}</strong>
                <span>{rand.job()}</span>                
            </div>

            <footer className={styles.footer}>
                <a href="#">Edit Perfil</a>
            </footer>
        </aside>
    )

}