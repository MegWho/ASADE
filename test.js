// JavaScript for Animated Search
document.addEventListener("DOMContentLoaded", 
    function () {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    // Toggle search bar width and focus on icon click

searchIcon.addEventListener('click', 
    function () {
    searchInput.classList.toggle('active');
    searchInput.focus();
    });
    
    // Collapse search bar when focus is lost

searchInput.addEventListener('blur', 
    function () {
    if (!searchInput.value.trim()) {
    searchInput.classList.remove('active');
    
    }
    });
    });

//student class    
    class Student {
        constructor(name, age, grade) {
          this.name = name;
          this.age = age;
          this.grade = grade;
        }
      }
      
      // Function to calculate average grade of an array of students
      function calculateAvgGrade(students) {
        if (students.length === 0) {
          console.error("No students provided to calculate average grade.");
          return;
        }
      
        const totalGrade = students.reduce((acc, student) => acc + student.grade, 0);
        const averageGrade = totalGrade / students.length;
        return averageGrade;
      }
      
      // Function to find the eldest student
      function findEldestStudent(students) {
        if (students.length === 0) {
          console.error("No students provided to find the eldest.");
          return;
        }
      
        let eldestStudent = students[0];
        for (const student of students) {
          if (student.age > eldestStudent.age) {
            eldestStudent = student;
          }
        }
        return eldestStudent;
      }
      
      // Example usage
      const student1 = new Student("Alice", 18, 85);
      const student2 = new Student("Bob", 19, 90);
      const student3 = new Student("Charlie", 17, 78);
      const students = [student1, student2, student3];
      
      const average = calculateAvgGrade(students);
      console.log(`Average grade: ${average.toFixed(2)}`); // Round to 2 decimal places
      
      const eldest = findEldestStudent(students);
      console.log(`Eldest student: ${eldest.name} (age: ${eldest.age})`);
