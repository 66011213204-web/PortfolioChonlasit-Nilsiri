(() => {
  const projectContent = document.getElementById('projectContent');
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id');
  const foundIndex = PROJECTS.findIndex(project => project.id === requestedId);
  const projectIndex = foundIndex >= 0 ? foundIndex : 0;
  const project = PROJECTS[projectIndex] || PROJECTS[0];

  const asset = path => path && (path.startsWith('../') || /^https?:/i.test(path)) ? path : `../${path || ''}`;
  const escapeHtml = value => String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');

  function getVideoPreview(url) {
    if (!url) return null;
    try {
      const parsed = new URL(url, window.location.href);
      const host = parsed.hostname.replace(/^www\./, '');
      let videoId = '';
      if (host === 'youtu.be') videoId = parsed.pathname.split('/').filter(Boolean)[0] || '';
      if (host.includes('youtube.com')) {
        videoId = parsed.searchParams.get('v') || '';
        if (!videoId) {
          const parts = parsed.pathname.split('/').filter(Boolean);
          const marker = parts.findIndex(part => ['embed', 'shorts', 'live'].includes(part));
          if (marker >= 0) videoId = parts[marker + 1] || '';
        }
      }
      if (videoId) {
        const start = parseInt(parsed.searchParams.get('t') || '', 10);
        return {
          kind: 'iframe', platform: 'YouTube',
          src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0${Number.isFinite(start) ? `&start=${start}` : ''}`
        };
      }
      const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
      if (driveMatch) return { kind: 'iframe', platform: 'Google Drive', src: `https://drive.google.com/file/d/${driveMatch[1]}/preview` };
      const instagramMatch = url.match(/instagram\.com\/(?:reel|p)\/([^/?#]+)/i);
      if (instagramMatch) return { kind: 'iframe', platform: 'Instagram', src: `https://www.instagram.com/reel/${instagramMatch[1]}/embed/` };
    } catch (error) {
      console.warn('Preview URL could not be parsed:', error);
    }
    return { kind: 'external', platform: 'Original platform', src: url };
  }

  if (!project) {
    projectContent.innerHTML = '<section class="content"><div class="inner"><h1>ยังไม่มีข้อมูลผลงาน</h1><p>เพิ่มผลงานได้ที่ไฟล์ projects/projects.js</p></div></section>';
    return;
  }

  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const gallery = Array.isArray(project.gallery) ? project.gallery : [];
  const duties = Array.isArray(project.duties) ? project.duties : [];
  const preview = getVideoPreview(project.video || project.url);
  document.title = `${project.title} — Chonlasit Nilsiri`;

  const action = project.url
    ? `<a class="cta" href="${escapeHtml(project.url)}" target="_blank" rel="noopener">ชมผลงานจริง ↗</a>`
    : '<span class="cta muted-cta" aria-disabled="true">ยังไม่มีลิงก์วิดีโอสำหรับผลงานนี้</span>';

  const previewSection = !preview
    ? `<section class="project-video"><div class="project-video-head"><div><span>Video Preview</span><h2>ตัวอย่างวิดีโอ</h2></div></div><div class="video-placeholder">ยังไม่มีไฟล์วิดีโอตัวอย่างสำหรับผลงานนี้</div></section>`
    : preview.kind === 'external'
      ? `<section class="project-video"><div class="project-video-head"><div><span>Video Preview</span><h2>ตัวอย่างวิดีโอ</h2></div></div><div class="video-placeholder"><p>วิดีโอนี้เปิดผ่านแพลตฟอร์มต้นทาง</p><a class="cta" href="${escapeHtml(preview.src)}" target="_blank" rel="noopener">เปิดวิดีโอ ↗</a></div></section>`
      : `<section class="project-video"><div class="project-video-head"><div><span>${escapeHtml(preview.platform)}</span><h2>ตัวอย่างวิดีโอ</h2></div></div><div class="project-video-frame"><iframe src="${escapeHtml(preview.src)}" title="ตัวอย่างวิดีโอ ${escapeHtml(project.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div></section>`;

  projectContent.innerHTML = `
    <section class="hero" style="--hero:url('${asset(project.image)}')">
      <div class="hero-inner">
        <div class="label">${escapeHtml(project.type || 'Video Production')}</div>
        <h1 class="title">${escapeHtml(project.title)}</h1>
        <div class="role">${escapeHtml(project.role)}</div>
      </div>
    </section>

    <section class="content">
      <div class="inner">
        <div class="overview">
          <aside class="facts">
            <div class="fact"><span>Role</span><strong>${escapeHtml(project.role)}</strong></div>
            <div class="fact"><span>Category</span><strong>${escapeHtml(project.type || 'Video Production')}</strong></div>
            <div class="fact"><span>Work Format</span><strong>${escapeHtml(project.format || 'Film / Video Production')}</strong></div>
          </aside>
          <article class="copy">
            <h2>Project Overview</h2>
            <p>${escapeHtml(project.description)}</p>
            ${duties.length ? `<h2>Responsibilities</h2><ul>${duties.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
            ${action}
          </article>
        </div>

        ${previewSection}

        ${gallery.length ? `<h2 class="gallery-title">Selected Frames</h2><div class="gallery">${gallery.map(src => `
          <button class="shot" type="button" data-lightbox="${asset(src)}" aria-label="เปิดภาพประกอบผลงาน">
            <img src="${asset(src)}" alt="ภาพประกอบผลงาน ${escapeHtml(project.title)}" loading="lazy" decoding="async">
          </button>`).join('')}</div>` : ''}

        <a class="next transition" href="project.html?id=${encodeURIComponent(nextProject.id)}">
          <div><small>Next Project</small><strong>${escapeHtml(nextProject.title)}</strong></div><span>↗</span>
        </a>
      </div>
    </section>`;

  const dot = document.getElementById('dot');
  const ring = document.getElementById('ring');
  const sound = document.getElementById('sound');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let sx = innerWidth / 2, sy = innerHeight / 2, rx = sx, ry = sy;
  let soundOn = false, audioContext = null;

  function tone(frequency = 420, duration = .07, volume = .025) {
    if (!soundOn) return;
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  }

  if (!reduced && innerWidth > 960) {
    addEventListener('mousemove', event => {
      sx = event.clientX; sy = event.clientY;
      dot.style.transform = `translate(${sx}px, ${sy}px)`;
      document.documentElement.style.setProperty('--cursor-x', `${sx}px`);
      document.documentElement.style.setProperty('--cursor-y', `${sy}px`);
    }, { passive: true });

    (function animateCursor() {
      rx += (sx - rx) * .15; ry += (sy - ry) * .15;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(animateCursor);
    })();

    document.querySelectorAll('a,button').forEach(element => {
      element.addEventListener('mouseenter', () => ring.classList.add('active'));
      element.addEventListener('mouseleave', () => ring.classList.remove('active'));
    });
  }

  sound.addEventListener('click', () => {
    soundOn = !soundOn;
    sound.classList.toggle('on', soundOn);
    sound.setAttribute('aria-pressed', String(soundOn));
    if (soundOn) tone(520, .1, .035);
  });

  document.addEventListener('click', event => {
    if (event.target.closest('a,button') && event.target !== sound) tone(420, .055, .018);
  });

  document.querySelectorAll('.transition').forEach(link => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    event.preventDefault();
    document.body.classList.add('leaving');
    tone(330, .12, .024);
    setTimeout(() => { location.href = href; }, 480);
  }));

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lbImg');
  const closeButton = document.getElementById('closeLb');

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    document.body.classList.remove('locked');
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-lightbox]');
    if (!button) return;
    lightboxImage.src = button.dataset.lightbox;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('locked');
  });
  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });
})();
