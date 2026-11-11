// Forward slot padding and keyboard activation to the theme's shared image zoom.
document.querySelectorAll('.project-image-slot').forEach((slot) => {
  slot.addEventListener('click', (event) => {
    const image = slot.querySelector('[data-zoomable]');
    if (image && event.target !== image) image.click();
  });
});
