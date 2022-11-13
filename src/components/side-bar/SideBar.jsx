import rand from '../../Utils/Chance';
import styles from './SideBar.module.css';
import { PencilLine } from 'phosphor-react';

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={rand.background()} alt="" />
            <div className={styles.profile}>
                <img className={styles.avatar} src={rand.avatar()} alt="" />

                <strong>{rand.fullName()}</strong>
                <span>{rand.job()}</span>                
            </div>

            <footer className={styles.footer}>                
                <a href="#">
                <PencilLine 
                    size={20}
                />
                    Edit Perfil
                </a>
            </footer>
        </aside>
    )

}