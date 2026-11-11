// Filter the full News page without changing announcement order or URLs.
document.querySelectorAll('.news').forEach((section) => {
  const controls = section.querySelector('.news-filter-controls');
  if (!controls) return;

  const buttons = Array.from(controls.querySelectorAll('[data-news-filter]'));
  const entries = Array.from(section.querySelectorAll('[data-news-tags]')).map((row) => ({
    row,
    tags: JSON.parse(row.dataset.newsTags || '[]') || [],
  }));
  const status = controls.querySelector('.news-filter-status');

  const selectCategory = (category) => {
    let visibleCount = 0;
    entries.forEach(({ row, tags }) => {
      row.hidden = category !== 'all' && !tags.includes(category);
      if (!row.hidden) visibleCount += 1;
    });
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.newsFilter === category));
    });
    status.textContent = category === 'all'
      ? `Showing all ${visibleCount} announcements.`
      : `Showing ${visibleCount} of ${entries.length} announcements in ${category}.`;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => selectCategory(button.dataset.newsFilter));
  });
  selectCategory('all');
  controls.hidden = false;
});
