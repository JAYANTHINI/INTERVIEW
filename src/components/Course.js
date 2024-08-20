import React from 'react';

const Course = ({ course }) => {
  return (
    
        <table>
            <tr>
                <th>COURSE NAME</th>
                <th>START DATE</th>
                <th>LESSON COMPLETED</th>
                <th>DURATION</th>
            </tr>
            <tr>
                <td>{course.name}</td>
                <td>{course.startDate}</td>
                <td>{course.lessonsCompleted}/{course.totalLessons} ({course.completion}%)</td>
                <td>{course.duration}</td>
                
            </tr>
        </table>
        
   
    
  );
}

export default Course;