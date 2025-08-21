/*const Header = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Header</h2>
      <p>{props.course}</p>
    </>
  )
}
// Uusi Part-komponentti
const Part = (props) => {
  console.log(props)
  return (
<>
    <p>
      {props.name} {props.exercises}
    </p>
    </>
  )
}
// Content käyttää Part-komponenttia
const Content = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Content</h2>
      <Part name={props.osa1} exercises={props.harjoitukset1} />
      <Part name={props.osa2} exercises={props.harjoitukset2} />
      <Part name={props.osa3} exercises={props.harjoitukset3} />
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
      <h1>1. {course}</h1>
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
*/


const Header = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Header</h2>
      <p>{props.course.name}</p>
    </>
  )
}
// Uusi Part-komponentti
const Part = (props) => {
  console.log(props)
  return (
<>
    <p>
      {props.name} {props.exercises}
    </p>
    </>
  )
}
//Vaihdetaan Content
/*
// Content käyttää Part-komponenttia. 
const Content = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Content</h2>
      
      <Part name={props.osa1} exercises={props.harjoitukset1} />
      <Part name={props.osa2} exercises={props.harjoitukset2} />
      <Part name={props.osa3} exercises={props.harjoitukset3} />
      
    </>
  )
}
  */
const Content = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Content</h2>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )
}
/*
const Total = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Total</h2>
      
     <p>Number of exercises {props.total}</p>


    </>
  )
}
  */
//vaihdetaan Totali <p> komponentti
const Total = (props) => {
  console.log(props)
  return (
    <>
      <h2>Komponentti Total</h2>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </>
  )
}

  
//Kurssitiedot step 3
//Siirrytään käyttämään sovelluksessamme olioita. Muuta komponentin App muuttujamäärittelyt seuraavaan muotoon ja
//  muuta sovelluksen kaikkia osia niin, että sovellus edelleen toimii
//1.4: kurssitiedot step4
//Seuraavaksi laitetaan oliot taulukkoon, eli muuta App :in muuttujamäärittelyt seuraavaan muotoon ja muuta sovelluksen
//  kaikki osat vastaavasti:

/*
const App = () => {
  const course = 'Half Stack application development',
  const parts = [
 // const part1 = (tämä otetaan pois)
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
 // const part2 = (tämä otetaan pos)
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  //const part3 = (tämä otetaan pos)
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
*/
//1.5: kurssitiedot step5
//Viedään muutos vielä yhtä askelta pidemmälle, eli tehdään kurssista ja sen osista yksi JavaScript-olio. 
//Korjaa kaikki mikä menee rikki.
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    //kaikki alla oleva vaihdetaan
    /*<>
      <h1>1. {course}</h1>
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
    */
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
  )
}

export default App
