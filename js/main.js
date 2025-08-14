async function loadComponent(id, file) {
  const res = await fetch(`components/${file}`);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// Load all components
loadComponent("navbar", "navbar.html");
loadComponent("hero", "hero.html");
loadComponent("about", "about.html");
loadComponent("academics", "academics.html");
loadComponent("experience", "experience.html");
loadComponent("projects", "projects.html");
loadComponent("music", "music.html");
loadComponent("sports", "sports.html");
loadComponent("contact", "contact.html");
loadComponent("footer", "footer.html");
