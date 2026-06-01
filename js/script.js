
    // 1. Fermer le menu mobile quand on clique un lien
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const menu = document.getElementById('navMenu');
        const bs = bootstrap.Collapse.getInstance(menu);
        if (bs) bs.hide();
      });
    });

    // 2. Révéler les éléments au scroll (IntersectionObserver)
    document.body.classList.add('js');
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });

      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('in'));
    }

    // 3. Animer les barres de compétences à l'entrée dans le viewport
    const skillElements = document.querySelectorAll('.card-custom');
    if ('IntersectionObserver' in window) {
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

      skillElements.forEach(c => skillObs.observe(c));
    } else {
      skillElements.forEach(c => {
        c.querySelectorAll('.skill-bar').forEach(bar => {
          bar.style.width = bar.dataset.w + '%';
        });
      });
    }

  
   