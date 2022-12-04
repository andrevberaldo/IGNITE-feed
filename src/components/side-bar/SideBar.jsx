import rand from '../../Utils/Chance';
import styles from './SideBar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

export function SideBar({ user }) {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={rand.background()} alt="" />
            <div className={styles.profile}>
                <Avatar 
                    src={user.avatar}
                />                

                <strong>{user.fullName}</strong>
                <span>{user.job}</span>                
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