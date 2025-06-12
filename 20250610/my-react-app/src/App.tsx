import ProductTable from './components/ProductTable'
import './App.css'

function App() {
  return (
    <div style={{ minHeight: '50vh', width: '100%'}}>
      <header style={{ 
        padding: '20px', 
        marginBottom: '10px'
      }}>
        <h1 style={{ margin: 0, color: '#333' }}>数据筛选表格练习</h1>
      </header>
      <ProductTable />
    </div>
  )
}

export default App
