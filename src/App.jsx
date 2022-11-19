import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import Chance from "./Utils/Chance";

import styles from './App.module.css';
import './global.css';
import { SideBar } from "./components/side-bar/SideBar";

export function App() {
  
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <SideBar />

        <main>
          <Post />
          <Post />
        </main>    
      </div>
    </>
  )
}
