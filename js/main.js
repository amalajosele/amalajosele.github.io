/**
 * Microsoft IT Consultant Website - Client-Side Interactive Script
 * Lightweight, Vanilla JS, Zero External Dependencies (GitHub Pages Ready)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initFaqAccordion();
  initContactForm();
  initSmoothScroll();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('open');
  });

  // Close nav when clicking on any link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Header sticky style on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * FAQ Accordion Expand/Collapse
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean single-accordion behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const btn = otherItem.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Contact Inquiry Form Logic
 * Since this is GitHub Pages, we construct a pre-populated mailto: link
 * and offer instant copy-to-clipboard for the client's email.
 */
function initContactForm() {
  const contactForm = document.getElementById('consultationForm');
  const formAlert = document.getElementById('formAlert');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName')?.value.trim();
    const email = document.getElementById('formEmail')?.value.trim();
    const service = document.getElementById('formService')?.value || 'General Microsoft Consulting';
    const message = document.getElementById('formMessage')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in your name, email address, and a brief description of your environment.');
      return;
    }

    const recipient = 'contact@example.com'; // Placeholder for consultant's domain or personal email
    const subject = encodeURIComponent(`Consulting Inquiry: ${service} - ${name}`);
    const body = encodeURIComponent(
      `Hello,\n\n` +
      `My name is ${name} (${email}).\n\n` +
      `Primary Area of Interest: ${service}\n\n` +
      `Project & Environment Details:\n${message}\n\n` +
      `Looking forward to connecting.`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Show success banner
    if (formAlert) {
      formAlert.className = 'form-alert success';
      formAlert.style.display = 'block';
      formAlert.innerHTML = `<strong>Thank you, ${escapeHtml(name)}!</strong> Opening your email client to dispatch this message. If your email client doesn't open automatically, you can write directly to <strong>${recipient}</strong>.`;
    }

    // Launch mail client
    window.location.href = mailtoUrl;
  });
}

/**
 * Smooth anchor scrolling with offset for sticky header
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
