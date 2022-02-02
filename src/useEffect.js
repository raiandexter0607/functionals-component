import { Component, useState, useEffect } from 'react'


// // Component basado en clases
// class App extends Component{
//   incrementar = () => {
//     state = { contador: 0 }
//     this.setState({contador: this.state.contador + 1})
//   }
//   render(){
//     return(
//       <div>
//         contador: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     )
//   }
// }

// Component functional

class Interval extends Component{
  intervalo = ''
  componentDidMount(){
    this.intervalo = setInterval(() => {
      console.log(this.props.contador)
    }, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.intervalo)
  }
  render(){
    return(
      <p>Interval</p>
    )
  }
}

// const Interval = (contador) => {
//   useEffect(() => {
//    const i = setInterval(() => console.log(contador), 1000)
//    //desuscribir some effect
//     return () => clearInterval(i)
//   }, [contador])
//   return (
//     <p>Interval</p>
//   )
// }

const useContador = (inicial) => {
  const [contador, setContador ] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1);
  }
  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  useEffect(()=> { 
    document.title = contador
  }, [contador])
  return(
    <div>
      Contador: {contador}
      <button onClick={incrementar}> Incrementar </button>
      <Interval contador={contador}></Interval>
    </div>
  )
}

export default App