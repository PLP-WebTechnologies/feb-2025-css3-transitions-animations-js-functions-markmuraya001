// Function to change the theme and save the user's preference
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    
    if (currentTheme === 'light') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');  // Save the dark theme preference
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');  // Save the light theme preference
    }
  }
  
  // Function to apply the saved theme when the page is loaded
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }
  
  // Check and apply saved name in localStorage
  function greetUser() {
    const storedName = localStorage.getItem('name');
    const greetingMessage = document.getElementById('greeting-message');
    const storedNameMessage = document.getElementById('stored-name-message');
  
    if (storedName) {
      greetingMessage.textContent = `Welcome back, ${storedName}!`;
      storedNameMessage.textContent = `Your saved name: ${storedName}`;
    } else {
      greetingMessage.textContent = 'Welcome, Guest!';
      storedNameMessage.textContent = '';
    }
  }
  
  // Handle form submission and save data in localStorage
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Validate email
    if (!email.includes('@')) {
      alert('Please enter a valid email!');
      return;
    }
  
    // Save name to localStorage
    localStorage.setItem('name', name);
    
    // Greet the user and update message
    greetUser();
  
    // Clear the form
    document.getElementById('contact-form').reset();
  });
  
  // On page load
  window.onload = function() {
    applySavedTheme();
    greetUser();
  };
  
  // Event listener for theme toggle button
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
  