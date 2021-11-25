import logo from './logo.svg';
import './App.css';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Footer part1={parts[0]} part2={parts[1]} part3={parts[2]} />
    </div>
  )
}

function Part(props) {
  return (
    <>
      <p>
        {props.name} {props.exercises}
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
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
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
