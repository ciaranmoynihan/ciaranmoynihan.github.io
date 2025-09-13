const input = document.getElementById('topic');
const content = document.getElementById('content');

input.addEventListener('input', () => {
  if (input.value.toLowerCase() === 'benefits') {
    content.innerHTML = `
      <h2>Benefits of Cloud Computing</h2>
      <ul>
        <li>Cost Efficiency</li>
        <li>Scalability and Flexibility</li>
        <li>Accessibility and Collaboration</li>
        <li>Automatic Updates and Maintenance</li>
        <li>Disaster Recovery and Backup</li>
        <li>Security Enhancements</li>
      </ul>
      <img src="images/benefits.jpeg" alt="Cloud Benefits" style="width:100%; max-width:400px; margin-top:1rem; border-radius:0.5rem; margin:0 auto; display:block;">
    `;
  } else if (input.value.toLowerCase() === 'challenges') {
    content.innerHTML = `
      <h2>Challenges of Cloud Computing</h2>
      <ul>
        <li>Future Scalability</li>
        <li>Security and Privacy Concerns</li>
        <li>Downtime and Reliability</li>
      </ul>
      <img src="images/challenges.jpeg" alt="Cloud Challenges" style="width:100%; max-width:400px; margin-top:1rem; border-radius:0.5rem; margin:0 auto; display:block;">
    `;
  } else {
    content.innerHTML = `<p>Select an option to see details.</p>`;
  }
});





