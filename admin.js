document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
  
    // Simulate login (no validation)
    document.getElementById('adminLoginForm').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    loadApplications();
  });
  
  function loadApplications() {
    const applicationsList = document.getElementById('applicationsList');
    applicationsList.innerHTML = '';
  
    // Retrieve all applications
    const applications = JSON.parse(localStorage.getItem('scholarshipApplications')) || [];
  
    if (applications.length === 0) {
      applicationsList.innerHTML = '<p>No applications found.</p>';
      return;
    }
  
    applications.forEach((application, index) => {
      const card = document.createElement('div');
      card.className = 'application-card';
      card.innerHTML = `
        <h3>${application.name}</h3>
        <p><strong>Course:</strong> ${application.course}</p>
        <p><strong>College:</strong> ${application.college}</p>
        <p><strong>Roll No:</strong> ${application.rollNo}</p>
        <p><strong>Cast:</strong> ${application.cast}</p>
        <p><strong>Family Income:</strong> ${application.income}</p>
        <p><strong>SSC Marks:</strong> ${application.ssc}</p>
        <p><strong>HSC Marks:</strong> ${application.hsc}</p>
        <p class="status"><strong>Status:</strong> ${application.status}</p>
        <div class="action-buttons">
          <button class="approve" onclick="updateStatus(${index}, 'Approved')">Approve</button>
          <button class="in-process" onclick="updateStatus(${index}, 'In Process of Disbursement')">In Process</button>
          <button class="reject" onclick="updateStatus(${index}, 'Rejected')">Reject</button>
        </div>
      `;
      applicationsList.appendChild(card);
    });
  }
  
  function updateStatus(index, status) {
    const applications = JSON.parse(localStorage.getItem('scholarshipApplications'));
    applications[index].status = status;
    localStorage.setItem('scholarshipApplications', JSON.stringify(applications));
    loadApplications();
  }