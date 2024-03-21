import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Container from './components/Container'
import Loading from './components/Loading'
import Error from './components/Error'

import { getNews } from './services/getNews'

function App() {
  // const [state, setstate] = useState(initialState);

  useEffect(() => {
    const fetchTechNews = async () => {
      const res = await getNews({
        searchQuery: 'microsoft'
      })
      console.log(res)
    }

    fetchTechNews()

    return () => {
      
    }
  }, [])
  

  return (
    <>
      <Navbar/>
      <Container>
        <h1>Hello World!</h1>
      </Container>
    </>
  );
}

export default App;
