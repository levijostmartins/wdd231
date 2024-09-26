const courses = [
    { code: 'CSE 110', category: 'cse' },
    { code: 'WDD 130', category: 'wdd' },
    { code: 'CSE 111', category: 'cse' },
    { code: 'CSE 210', category: 'cse' },
    { code: 'WDD 131', category: 'wdd' },
    { code: 'WDD 231', category: 'wdd' }
  ];
  
  // Function to render the courses
  function renderCourses(filter = 'all') {
    const courseContainer = document.querySelector('.courses');
    courseContainer.innerHTML = '';
  
    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.category === filter);
  
    filteredCourses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.classList.add('course', course.category);
      courseDiv.textContent = course.code;
      courseContainer.appendChild(courseDiv);
    });
  }
  
  // Event listeners for filter buttons
  document.getElementById('all').addEventListener('click', () => renderCourses('all'));
  document.getElementById('cse').addEventListener('click', () => renderCourses('cse'));
  document.getElementById('wdd').addEventListener('click', () => renderCourses('wdd'));

  document.addEventListener('DOMContentLoaded', () => renderCourses());
  