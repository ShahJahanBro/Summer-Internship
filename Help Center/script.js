
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentlyOpen = document.querySelector('.faq-item.open');
      
      
      if (currentlyOpen && currentlyOpen !== btn.parentElement) {
        currentlyOpen.classList.remove('open');
        currentlyOpen.querySelector('.faq-answer').style.maxHeight = null;
      }

      const parent = btn.parentElement;
      const answer = parent.querySelector('.faq-answer');

      if (parent.classList.contains('open')) {
        parent.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        parent.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
