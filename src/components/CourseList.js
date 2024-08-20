import React from 'react';
import Course from './Course';

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map(course => (
        <Course key={course.name} course={course} />
      ))}
    </div>
  );
}

export default CourseList;