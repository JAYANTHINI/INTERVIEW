import React from 'react';
import CourseList from './components/CourseList';
import courses from './data/courses';

function App() {
 
  


  return (
    <div className="App">
      <h1>My Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
}

export default App;

