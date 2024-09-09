import { useState } from 'react'
import img1 from './assets/astro-clavier.jpg'
import img2 from './assets/astro-manette.jpg'
import img3 from './assets/chat.jpg'
import Title from './components/Title'
import "./App.css"

import { Button } from 'react-bootstrap'


function Home() {

  const name = "Des jeux et encore des jeux"

  return (
    <>
    <Title title={name} undertitle='Un site pour faire des tests'></Title>
      <div className=''>
        <BandeauLogo></BandeauLogo>
      </div>
      <h1>Vite + React</h1>
      <Compteur></Compteur>
      {/* <Button variant="outline-dark" href='/page1'>
        Go to page 1
      </Button> */}

    </>
  )
}
const BandeauLogo = () => { 
  return (
    <div className='bandeau'>
        <a href='/page1'>
          <img src={img1} className="img1" width={200} height={200}/>
        </a>
        <a href='/page1'>
          <img src={img2} className="img2" width={200} height={200}/>
        </a>
        <a href='/page1'>
          <img src={img3} className="img3" width={200} height={200}/>
        </a>
    </div>
  );
}  

const Compteur = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="d-inline-flex align-items-center">
      <Button variant="outline-dark"onClick={() => setCount((count) => (count > 0 ? count - 1 : count))}>
        -
      </Button>
      <p className="mb-0 mx-3">{count}</p>
      <Button  variant="outline-dark" onClick={() => setCount((count) => count + 1)}>
        +
      </Button>
    </div>
  );
};

export default Home
