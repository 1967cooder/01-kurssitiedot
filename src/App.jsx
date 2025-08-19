const Header = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Header</h2>
      <p>{props.course}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Content</h2>
      <p>{props.osa1} {props.harjoitukset1}</p>
      <p>{props.osa2} {props.harjoitukset2}</p>
      <p>{props.osa3} {props.harjoitukset3}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Total</h2>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <h1>{course}</h1>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      <hr />
      <h1>2. Sovellus purettuna komponentteihin Header, Content ja Total</h1>

      <Header course={course} />

      <Content
        osa1={part1} harjoitukset1={exercises1}
        osa2={part2} harjoitukset2={exercises2}
        osa3={part3} harjoitukset3={exercises3}
      />

      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App
