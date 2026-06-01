
    // 1. Fermer le menu mobile quand on clique un lien
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const menu = document.getElementById('navMenu');
        const bs = bootstrap.Collapse.getInstance(menu);
        if (bs) bs.hide();
      });
    });

    // 2. Révéler les éléments au scroll (IntersectionObserver)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. Animer les barres de compétences à l'entrée dans le viewport
    const skillObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-bar').forEach(bar => {
            bar.style.width = bar.dataset.w + '%';
          });
          skillObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.card-custom').forEach(c => skillObs.observe(c));

  
   