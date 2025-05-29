  document.querySelectorAll('.date-field').forEach(field => {
    const today = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    field.textContent = today.toLocaleDateString('en-US', options);
  });