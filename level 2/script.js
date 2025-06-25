// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const findJobBtn = document.querySelector('.find-job-btn');
  const uploadBtn = document.querySelector('.upload-btn');
  const inputs = document.querySelectorAll('.search-bar input, .search-bar select');

  // Find Job button click
  findJobBtn.addEventListener('click', () => {
    const values = Array.from(inputs).map(input => input.value.trim());

    if (values.some(val => val === '')) {
      alert('Please fill in all fields before searching.');
    } else {
      alert(`Searching for jobs with:
      \nKeyword: ${values[0]}
      \nLocation: ${values[1]}
      \nCategory: ${values[2]}`);
    }
  });

  // Upload Resume button click
  uploadBtn.addEventListener('click', () => {
    alert('Redirecting to resume upload page...');
    // window.location.href = '/upload-resume.html'; // If you have another page
  });

  // Optional: highlight field on focus
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '#007bff';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = '#ccc';
    });
  });
});
