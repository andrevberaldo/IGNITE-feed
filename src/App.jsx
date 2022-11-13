import { Header } from "./components/Header/Header";
import { Post } from "./Post";
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
            <Post 
              author={Chance.fullName()}
              content={Chance.content(2)}
            />
            <Post 
              author={Chance.fullName()}
              content={Chance.content(3)}
            />
            <Post 
              author={Chance.name()}
            content={Chance.content()}
            />
        </main>    
      </div>
    </>
  )
}
