import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import Chance from "./Utils/Chance";

import styles from './App.module.css';
import './global.css';
import { SideBar } from "./components/side-bar/SideBar";

export function App() {

  const fakePublisher = {
    fullName: Chance.fullName(),
    avatar: Chance.avatar(),
    job: Chance.job(),
    firstName: Chance.name()
  }
  
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <SideBar fakePublisher={fakePublisher}/>

        <main>
          <Post fakePublisher={fakePublisher}/>
          <Post fakePublisher={fakePublisher}/>
        </main>    
      </div>
    </>
  )
}
