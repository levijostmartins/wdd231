// Courses array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
  
  // Render courses as buttons with a click to show details
  function renderCourses(filter = 'all') {
    const courseContainer = document.querySelector('.courses');
    courseContainer.innerHTML = '';
  
    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.subject.toLowerCase() === filter);
  
    filteredCourses.forEach(course => {
      // Button for each course
      const courseButton = document.createElement('button');
      courseButton.classList.add('course', course.subject.toLowerCase());
      courseButton.textContent = `${course.subject} ${course.number}`; // Show subject and number
  
      // Variable to track whether details are shown or hidden
      let showingDetails = false;
  
      // Toggling between button and details
      courseButton.addEventListener('click', () => {
        if (!showingDetails) {
          // Full details
          courseButton.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p><strong>Completed:</strong> ${course.completed ? 'Yes' : 'No'}</p>
          `;
        } else {
          // Revert back to showing just the button
          courseButton.textContent = `${course.subject} ${course.number}`;
        }
        showingDetails = !showingDetails;
      });
  
      courseContainer.appendChild(courseButton);
    });
  
    // Total credits
    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
  }
  
  // Filter buttons
  document.getElementById('all').addEventListener('click', () => renderCourses('all'));
  document.getElementById('cse').addEventListener('click', () => renderCourses('cse'));
  document.getElementById('wdd').addEventListener('click', () => renderCourses('wdd'));

  document.addEventListener('DOMContentLoaded', () => renderCourses());
  