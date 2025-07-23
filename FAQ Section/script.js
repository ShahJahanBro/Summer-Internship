const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    // Close all answers
    questions.forEach((q) => {
      if (q !== question) {
        q.classList.remove('active');
        const otherAnswer = q.nextElementSibling;
        if (otherAnswer && otherAnswer.classList.contains('answer')) {
          otherAnswer.style.display = 'none';
        }
      }
    });

    // Toggle the clicked one
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    
    if (isVisible) {
      answer.style.display = 'none';
      question.classList.remove('active');
    } else {
      answer.style.display = 'block';
      question.classList.add('active');
    }
  });
});
