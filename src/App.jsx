import './App.css'
import { Table } from './components/Table'

function App() {
  const data = [
    {id:1, name:'Maçã', price: 10, stock: 20.50 },
    {id:2, name:'Banana', price: 8, stock: 40.70 },
    {id:3, name:'Melancia', price: 7, stock: 100.00 },
    {id:4, name:'Melão', price: 9, stock: 30.00 },
    {id:5, name:'Uva', price: 11, stock: 50.40 },
  ]

  return (
    <>
      <Table data={data} />
    </>
  )
}

export default App
