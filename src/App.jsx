import { Header } from "./components/Header";
import { Post } from "./Post";
import Chance from "./Utils/Chance";
import './global.css';

export function App() {
  
  return (
    <>
    <Header />
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
    </>
  )
}
