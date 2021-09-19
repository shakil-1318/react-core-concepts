import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <ExternalUser></ExternalUser> */}
      <BatteryDown></BatteryDown>
    </div>
  );
}

function BatteryDown() {
  const [count, setCount] = useState(100);
  if (count < 0) {
    return;
  }
  const downClick = () => {
    const newCount = count - 10;
    setCount(newCount);
  }
  return (
    <div>
      <h2>Batter Down: {count}</h2>
      <button onClick={downClick}>Increase</button>
    </div>
  )
}

function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External users</h2>
      {
        users.map(user => <Person name={user.name} email={user.email}></Person>)
      }
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ backgroundColor: 'lightblue', margin: '40px', borderRadius: '20px', padding: '10px', color: 'black' }}>
      <h2>Name: {props.name}</h2>
      <h4>Email: {props.email}</h4>
    </div>
  )
}



function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => { setCount(count + 1) }
  const decreaseCount = () => { setCount(count - 1) }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props) {
  return (
    <div style={{ backgroundColor: 'lightblue', margin: '40px', borderRadius: '20px', padding: '10px', color: 'black' }}>
      <h2>hello</h2>
      <h2>Name: {props.name}</h2>
      <h4>price: {props.price}</h4>
    </div>
  )
}

// function Person(props) {
//   return (
//     <div style={{ backgroundColor: 'black', margin: '10px', borderRadius: '20px' }}>
//       <h2>Name: {props.name}</h2>
//       <h4>Price: {props.price}</h4>
//     </div>
//   )
// }

/* 
      <Person name={name[0]} price='1900'></Person>
      <Person name={name[1]} price='190'></Person>
      <Person name={name[2]} price='200'></Person>
*/

/* 
const products = [
    { name: 'laptop', price: '29900' },
    { name: 'phone', price: '12000' },
    { name: 'watch', price: '500' },
    { name: 'bottle', price: '200' },
    { name: 'kofee', price: '100' },
    { name: 'water', price: '20' }
  ]

*/

/* 
 {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
*/

export default App;
