import rand from '../../Utils/Chance';
import styles from './SideBar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

export function SideBar({fakePublisher}) {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={rand.background()} alt="" />
            <div className={styles.profile}>
                <Avatar 
                    src={fakePublisher.avatar}
                />                

                <strong>{fakePublisher.fullName}</strong>
                <span>{fakePublisher.job}</span>                
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