
// import { useState } from 'react';
// import './App.css'
// // import { FilterBar } from './components/FilterBar';
// import type { Todo } from './types/searchItem';
// import { AddHeader } from './components/AddHeader';

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([])

//   const handleKeyUp = (event: any) => {
//     const { value } = (event.target as HTMLInputElement);
//     if (value.trim() === '') return;
//     if (event.key !== 'Enter') return;
//     const todoObj: Todo = {
//       id: Date.now(),
//       text: value,
//       done: false
//     }
//     setTodos(prevTodos => [...prevTodos, todoObj]);
//     event.target.value = '';
//   }

//   const handleToggle = (id: number) => {
//     setTodos(prevTodos =>
//       prevTodos.map(todo =>
//         todo.id === id ? { ...todo, done: !todo.done } : todo
//       )
//     );
//   }

//   const handleDelete = (id: number) => {
//     setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
//   }
//   return (
//     <div>
//       <AddHeader onKeyUp={handleKeyUp} />{
//         todos.map(todo => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onToggle={handleToggle}
//             onDelete={handleDelete}
//           />
//         ))
//       }
//       {/* <FilterBar /> */}

//     </div>
//   )
// }

// export default App
