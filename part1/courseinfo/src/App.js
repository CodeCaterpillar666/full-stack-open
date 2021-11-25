import logo from './logo.svg';
import './App.css';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Footer part1={part1} part2={part2} part3={part3} />
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
      <Part part1={props.part1.name} exercises1={props.part1.exercises}/>
      <Part part1={props.part2.name} exercises1={props.part2.exercises}/>
      <Part part1={props.part3.name} exercises1={props.part3.exercises}/>
    </>
  )
}

function Footer(props) {
  return (
    <>
      <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
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
