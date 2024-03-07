import NavBar from './components/NavBar'
import TaskForm from './components/TaskForm'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/task" element={<TaskForm/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
    </>
  )
}

export default App
