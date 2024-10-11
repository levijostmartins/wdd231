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
  
// Dialog element
const courseDetailsDialog = document.getElementById('course-details');

// Function to display course details in a modal dialog
function displayCourseDetails(course) {
  // Populate the dialog with course details
  courseDetailsDialog.innerHTML = `
    <button id="closeModal">❌</button>
    <h3>${course.subject} ${course.number}: ${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Description:</strong> ${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    <p><strong>Completed:</strong> ${course.completed ? 'Yes' : 'No'}</p>
  `;
  
  // Show the modal
  courseDetailsDialog.showModal();

  // Add event listener to close the modal when the close button is clicked
  document.getElementById('closeModal').addEventListener('click', () => {
    courseDetailsDialog.close();
  });

  // Close modal when clicking outside the modal
  courseDetailsDialog.addEventListener('click', (e) => {
    if (e.target === courseDetailsDialog) {
      courseDetailsDialog.close();
    }
  });
}

// Render courses as buttons with a click to show details
function renderCourses(filter = 'all') {
  const courseContainer = document.querySelector('.courses');
  courseContainer.innerHTML = '';  // Clear the container

  // Filter courses based on the subject (all, cse, wdd)
  const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.subject.toLowerCase() === filter);

  // For each filtered course, create a button and add event listener to open the modal
  filteredCourses.forEach(course => {
    // Button for each course
    const courseButton = document.createElement('button');
    courseButton.classList.add('course', course.subject.toLowerCase());
    courseButton.textContent = `${course.subject} ${course.number}`;  // Show subject and number

    // Add click event to display modal with course details
    courseButton.addEventListener('click', () => {
      displayCourseDetails(course);
    });

    // Append button to the container
    courseContainer.appendChild(courseButton);
  });

  // Calculate and display the total credits
  const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
  document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Filter buttons
document.getElementById('all').addEventListener('click', () => renderCourses('all'));
document.getElementById('cse').addEventListener('click', () => renderCourses('cse'));
document.getElementById('wdd').addEventListener('click', () => renderCourses('wdd'));

// Initialize course rendering on page load
document.addEventListener('DOMContentLoaded', () => renderCourses());