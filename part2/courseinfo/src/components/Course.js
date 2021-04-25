import React from 'react'

const Header = ({ name }) => {
  return (
    <h3> {name} </h3>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map((part) => {
      return (
        <Part key={part.id} part={part} />
      )
    })
  )
}

const Total = ({ exercises }) => {
  console.log(exercises)
  const sumExercises = exercises.reduce((accum, current) => accum + current);

  return (
    <b>Total of {sumExercises} exercises</b>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Course = ({ courses }) => {
  return (
    courses.map((course) => {
      return (
        <div key={course.id}>
          <Header name={course.name}/>
          <Content parts={course.parts}/>
          <Total exercises={course.parts.map(part => part.exercises)} />
        </div>
      )
    })
  )
}

export default Course;