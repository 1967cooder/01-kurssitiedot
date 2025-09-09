


/*
//const Header = (props) => {
  //console.log(props)
  //return (
    //<>
     // <h2>Komponentti Header</h2>
     //<p>{props.course}</p>
    //</>
 // )
//}
// Uusi Part-komponentti
//const Part = (props) => {
  //console.log(props)
  //return (
//<>
    //<p>
     // {props.name} {props.exercises}
    //</p>
    //</>
  //}
// Content käyttää Part-komponenttia
//const Content = (props) => {
  //console.log(props)
  //return (
    //<>
      //<h2>Komponentti Content</h2>
      //<Part name={props.osa1} exercises={props.harjoitukset1} />
      //<Part name={props.osa2} exercises={props.harjoitukset2} />
      //<Part name={props.osa3} exercises={props.harjoitukset3} />
    //</>
  //)
//}

//const Total = (props) => {
  //console.log(props)
  //return (
    //<>
      //<h2>Komponentti Total</h2>
      //<p>Number of exercises {props.total}</p>
    //</>
 // )
//}

//const App = () => {
  //1st Data Structure (on phase 1)
  //const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10
 // const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14

  //return (
    //<>
      //<h1>1. {course}</h1>
      //<p>{part1} {exercises1}</p>
      //<p>{part2} {exercises2}</p>
      //<p>{part3} {exercises3}</p>
     // <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      //<hr />
      //<h1>2. Sovellus purettuna komponentteihin Header, Content ja Total</h1>

      //<Header course={course} />

      //<Content
       // osa1={part1} harjoitukset1={exercises1}
       // osa2={part2} harjoitukset2={exercises2}
        //osa3={part3} harjoitukset3={exercises3}
      ///>

      //<Total total={exercises1 + exercises2 + exercises3} />
    //</>
 // )
//}

//export default App



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
    <p>{props.name} {props.exercises}</p>
 </>
  )
}
//Vaihdetaan Content

// Content käyttää Part-komponenttia. 
//const Content = (props) => {
  //console.log(props)
  //return (
   // <>
      //<h2>Komponentti Content</h2>
      
      //<Part name={props.osa1} exercises={props.harjoitukset1} />
      //<Part name={props.osa2} exercises={props.harjoitukset2} />
      //<Part name={props.osa3} exercises={props.harjoitukset3} />
      
    //</>
  //)
//}
  
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

//const Total = (props) => {
 // console.log(props)
  //return (
    //<>
     // <h2>Komponentti Total</h2>
      
     //<p>Number of exercises {props.total}</p>


    //</>
 // )
//}
  
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


//const App = () => {
//  const course = 'Half Stack application development',
  //const parts = [
 // const part1 = (tämä otetaan pois)
  //{
    //name: 'Fundamentals of React',
    //exercises: 10
  //},
 // const part2 = (tämä otetaan pos)
  //{
    //name: 'Using props to pass data',
    //exercises: 7
  //},
  //const part3 = (tämä otetaan pos)
  //{
   // name: 'State of a component',
   // exercises: 14
  //}
  //]

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
    //<>
      //<h1>1. {course}</h1>
      //<p>{part1} {exercises1}</p>
      //<p>{part2} {exercises2}</p>
      //<p>{part3} {exercises3}</p>
      //<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      //<hr />
      //<h1>2. Sovellus purettuna komponentteihin Header, Content ja Total</h1>

      //<Header course={course} />

      //<Content
        //osa1={part1} harjoitukset1={exercises1}
        //osa2={part2} harjoitukset2={exercises2}
        //osa3={part3} harjoitukset3={exercises3}
      ///>

      //<Total total={exercises1 + exercises2 + exercises3} />
    //</>
    
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
  )
}

export default App;
*/


/*---------------------
Opettajan esimerkki:
--------------------*/
// -----------------------------
// Peruskomponentit (vaiheet 1.x)
// -----------------------------
import { useState } from "react";


const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ name1, exercises1, name2, exercises2, name3, exercises3 }) => {
  return (
    <div>
      <Part name={name1} exercises={exercises1} />
      <Part name={name2} exercises={exercises2} />
      <Part name={name3} exercises={exercises3} />
    </div>
  );
};

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

// -----------------------------
// Lopulliset komponentit (2.x)
// -----------------------------

const Part2 = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content2 = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part2 key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total2 = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const Course = ({ course_5 }) => {
  return (
    <div>
      <Header name={course_5.name} />
      <Content2 parts={course_5.parts} />
      <Total2 parts={course_5.parts} />
    </div>
  );
};

// -----------------------------
// App
// -----------------------------
const App = () => {
  // Vaihe 1.1 (yksittäiset muuttujat)
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // Vaihe 1.2–1.3 (kurssi + osat olioina)
  const course_n = "Half Stack application development";
  const part1_n = { name: "Fundamentals of React", exercises: 10 };
  const part2_n = { name: "Using props to pass data", exercises: 7 };
  const part3_n = { name: "State of a component", exercises: 14 };

  // Vaihe 1.4 (kurssi + taulukko)
  const course_3 = "Half Stack application development";
  const parts_3 = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  // Vaihe 1.5 (kurssi oliona, jossa parts-taulukko)
  const course_4 = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  // Vaihe 2.1–2.5 (kurssi oliona, parts + id:t)
  const course_5 = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      { name: "Fundamentals of React", exercises: 10, id: 1 },
      { name: "Using props to pass data", exercises: 7, id: 2 },
      { name: "State of a component", exercises: 14, id: 3 },
      { name: 'Redux', exercises: 11, id: 4}
    ],
  };

  // -----------------------------
  // 2.6:Monta kursseja
  // -----------------------------
  const courses = [
    course_5,
    {
      name: "Node.js",
      id: 2,
      parts: [
        { name: "Routing", exercises: 3, id: 1 },
        { name: "Middlewares", exercises: 7, id: 2 },
      ],
    },
  ];

  return (
    <div>
      <h2>1.1 Yksinkertainen versio</h2>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>total of exercises {exercises1 + exercises2 + exercises3}</p>

      <hr />

      <h2>1.2–1.3 Komponentit Header, Content, Total</h2>
      <Header name={course} />
      <Content
        name1={part1}
        exercises1={exercises1}
        name2={part2}
        exercises2={exercises2}
        name3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />

      <hr />

      <h2>1.3 Uusi tietorakenne (olioina)</h2>
      <Header name={course_n} />
      <Content
        name1={part1_n.name}
        exercises1={part1_n.exercises}
        name2={part2_n.name}
        exercises2={part2_n.exercises}
        name3={part3_n.name}
        exercises3={part3_n.exercises}
      />
      <Total
        total={part1_n.exercises + part2_n.exercises + part3_n.exercises}
      />

      <hr />

      <h2>1.4 Osat taulukossa</h2>
      <Header name={course_3} />
      <Content
        name1={parts_3[0].name}
        exercises1={parts_3[0].exercises}
        name2={parts_3[1].name}
        exercises2={parts_3[1].exercises}
        name3={parts_3[2].name}
        exercises3={parts_3[2].exercises}
      />
      <Total
        total={
          parts_3[0].exercises +
          parts_3[1].exercises +
          parts_3[2].exercises
        }
      />

      <hr />

      <h2>1.5 Kurssi oliona (course_4)</h2>
      <Header name={course_4.name} />
      <Content
        name1={course_4.parts[0].name}
        exercises1={course_4.parts[0].exercises}
        name2={course_4.parts[1].name}
        exercises2={course_4.parts[1].exercises}
        name3={course_4.parts[2].name}
        exercises3={course_4.parts[2].exercises}
      />
      <Total
        total={
          course_4.parts[0].exercises +
          course_4.parts[1].exercises +
          course_4.parts[2].exercises
        }
      />

      <hr />

      <h2>2.1–2.5 Lopullinen versio (Course, Content2, Part2, Total2)</h2>
      {courses.map((course) => (
      <Course key={course.id} course_5={course} />
    ))}
    </div>
  );
};

export default App;














