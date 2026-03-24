document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const storageKey = 'sidebarCollapsed';
  const toggles = document.querySelectorAll('.sidebar-toggle');

  // Initialize state from localStorage
  if (localStorage.getItem(storageKey) === 'true') {
    body.classList.add('sidebar-collapsed');
  }

  toggles.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const collapsed = body.classList.toggle('sidebar-collapsed');
      localStorage.setItem(storageKey, collapsed ? 'true' : 'false');
    });
  });
});
