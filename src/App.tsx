
//Components
// import { JSX, useState } from 'react';
import TaskManagersComparison from './Components/TaskManagersComparison'
//CSS
import './CSS/App.css'

// function Counter() {
//   const [count, setCount] = useState(0);
//   return <button onClick={() => setCount(count + 1)}>Click Me</button>;
// }

// function ItemList({ items }: { items: string[] }): JSX.Element {
  // const itemsList = items.map((item) => (
  //     <li>
  //         {item}
  //     </li>
  // ));
  // return <ul>{itemsList}</ul>
// 	return <ul>{
// 		items.map((item)=>(
// 			<li>
// 				{item}
// 			</li>
// 		))
// 	}</ul>
// }

function App() {

  const name = "React";
  const element = <h1>Hello, {name}!</h1>;
  console.log(element);

  return (
    <div className="App">
      <TaskManagersComparison />
      {/* <Counter /> */}
      {/* <ItemList items={["Item1", "Item2", "Item3"]} /> */}
    </div>
  )
}

export default App

