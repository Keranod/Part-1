const Header = (prop) => {
  console.log(prop);
  return (
    <div>
      <h1>{prop.header.name}</h1>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.data.parts[0].name} exercises={props.data.parts[0].exercises} />
      <Part part={props.data.parts[1].name} exercises={props.data.parts[1].exercises} />
      <Part part={props.data.parts[2].name} exercises={props.data.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  let total = 0
  props.data.parts.forEach(element => {
    total += element.exercises
  })
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header header={course} />
      <Content data={course} />
      <Total data={course} />
    </div>
  );
};

export default App;
