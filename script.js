const tooltipTrigger = document.querySelector('.tooltip-trigger');
const tooltipText = document.querySelector('.tooltip-text');

tooltipTrigger.addEventListener('mouseover', () => {
  tooltipText.style.display = 'block';
});

tooltipTrigger.addEventListener('mouseout', () => {
  tooltipText.style.display = 'none';
});