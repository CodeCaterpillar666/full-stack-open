import logo from './logo.svg';
import './App.css';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      {/* <h1>{course}</h1> */}
      <Header course={course}/>

      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>

      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Footer exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />



    </div>
  )
}

function Part(props) {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </>
  )
}

function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Content(props) {
  return (
    <>
      <Part part1={props.part1} exercises1={props.exercises1}/>
      <Part part1={props.part2} exercises1={props.exercises2}/>
      <Part part1={props.part3} exercises1={props.exercises2}/>
    </>
  )
}

function Footer(props) {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

// default code below
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
