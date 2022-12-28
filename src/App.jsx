import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import Chance from "./Utils/Chance";
import moment from "moment/moment";

import styles from './App.module.css';
import './global.css';
import { SideBar } from "./components/side-bar/SideBar";

const fakeLoggedUser = {
  fullName: Chance.fullName(),
  avatar: Chance.avatar(),
  job: Chance.job(),
  firstName: Chance.name()
}

const posts = [
  {
    id: 1,
    author: {
      avatar: Chance.avatar(),
      name: Chance.name(),
      role: Chance.job()
    },
    content: [
      { type: 'paragraph', content: Chance.content(1) },
      { type: 'paragraph', content: Chance.content(1) },
      { type: 'link', content: Chance.url() }      
    ],
    publishedAt: Chance.pastDate()
  },
  {
    id: 2,
    author: {
      avatar: Chance.avatar(),
      name: Chance.name(),
      role: Chance.job()
    },
    content: [
      { type: 'paragraph', content: Chance.content(1) },
      { type: 'paragraph', content: Chance.content(1) },
      { type: 'link', content: Chance.url() }      
    ],
    publishedAt: Chance.pastDate()
  }
];

export function App() {


  
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <SideBar user={fakeLoggedUser}/>

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })  
          }
        </main>    
      </div>
    </>
  )
}
