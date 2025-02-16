document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulate login (no validation)
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('applicationForm').classList.remove('hidden');
  checkApplicationStatus(email);
});

document.getElementById('scholarshipForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const application = {
    email: email, // Store email to identify the student
    name: document.getElementById('name').value,
    course: document.getElementById('course').value,
    college: document.getElementById('college').value,
    rollNo: document.getElementById('rollNo').value,
    cast: document.getElementById('cast').value,
    income: document.getElementById('income').value,
    ssc: document.getElementById('ssc').value,
    hsc: document.getElementById('hsc').value,
    status: 'In Review'
  };

  // Save to local storage
  let applications = JSON.parse(localStorage.getItem('scholarshipApplications')) || [];
  applications.push(application);
  localStorage.setItem('scholarshipApplications', JSON.stringify(applications));

  alert('Application Submitted Successfully!');
  document.getElementById('applicationForm').classList.add('hidden');
  document.getElementById('statusMessage').classList.remove('hidden');
  document.getElementById('statusText').innerText = 'Status: In Review';
});

function checkApplicationStatus(email) {
  const applications = JSON.parse(localStorage.getItem('scholarshipApplications')) || [];
  const application = applications.find(app => app.email === email);
  if (application) {
    document.getElementById('applicationForm').classList.add('hidden');
    document.getElementById('statusMessage').classList.remove('hidden');
    document.getElementById('statusText').innerText = `Status: ${application.status}`;
  }
}