for (const element of document.querySelectorAll('.brdr-hl')) {
  element.addEventListener('click', () => {
    element.classList.contains('brdr-sl')
      ? element.classList.replace('brdr-sl', 'brdr-none')
      : element.classList.add('brdr-sl');
  });
}
