(function () {
  const modal = document.getElementById('request-modal');
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');

  if (modal) {
    const openModal = function (event) {
      if (event) {
        event.preventDefault();
        const trigger = event.currentTarget;
        const source = trigger.getAttribute('data-source') || '';
        const title = trigger.getAttribute('data-title') || '';
        const hiddenSource = modal.querySelector('[name="source"]');
        const hiddenTitle = modal.querySelector('[name="request_context"]');
        if (hiddenSource) hiddenSource.value = source;
        if (hiddenTitle) hiddenTitle.value = title;
      }
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    };

    const closeModal = function () {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    };

    openButtons.forEach(function (button) {
      button.addEventListener('click', openModal);
    });

    closeButtons.forEach(function (button) {
      button.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }
})();



