/* Team-authored theme JavaScript. One guarded custom element per section, each under its own header:
   ===== custom-<section-handle> ===== */

/* ===== custom-faq ===== */
if (!customElements.get('custom-faq')) {
  customElements.define(
    'custom-faq',
    class extends HTMLElement {
      connectedCallback() {
        this.tabsWrap = this.querySelector('[data-faq-tabs]');
        this.toggle = this.querySelector('[data-faq-toggle]');
        this.toggleLabel = this.querySelector('[data-faq-toggle-label]');
        this.tabs = Array.from(this.querySelectorAll('[data-faq-tab]'));
        this.panels = Array.from(this.querySelectorAll('[data-faq-panel]'));
        this.items = Array.from(this.querySelectorAll('[data-faq-item]'));
        this.search = this.querySelector('[data-faq-search]');
        this.empty = this.querySelector('[data-faq-empty]');
        this.reset = this.querySelector('[data-faq-reset]');
        // -1 = no tab selected: every group shows (Figma 23:13675 / 23:18744 default state)
        this.activeIndex = -1;
        this.toggleDefault = this.toggleLabel ? this.toggleLabel.textContent.trim() : '';
        this.itemText = new Map(this.items.map((item) => [item, item.textContent.toLowerCase()]));

        this.onTabClick = this.onTabClick.bind(this);
        this.onTabKeydown = this.onTabKeydown.bind(this);
        this.onToggleClick = this.onToggleClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onSearchInput = debounce(() => this.filter(), 150);
        this.onBlockSelect = this.onBlockSelect.bind(this);
        this.onResetClick = this.onResetClick.bind(this);

        this.tabs.forEach((tab) => {
          tab.addEventListener('click', this.onTabClick);
          tab.addEventListener('keydown', this.onTabKeydown);
        });
        this.toggle?.addEventListener('click', this.onToggleClick);
        this.reset?.addEventListener('click', this.onResetClick);
        this.search?.addEventListener('input', this.onSearchInput);
        document.addEventListener('click', this.onDocumentClick);
        this.addEventListener('shopify:block:select', this.onBlockSelect);

        this.activate(-1, false);
      }

      disconnectedCallback() {
        this.tabs.forEach((tab) => {
          tab.removeEventListener('click', this.onTabClick);
          tab.removeEventListener('keydown', this.onTabKeydown);
        });
        this.toggle?.removeEventListener('click', this.onToggleClick);
        this.reset?.removeEventListener('click', this.onResetClick);
        this.search?.removeEventListener('input', this.onSearchInput);
        document.removeEventListener('click', this.onDocumentClick);
        this.removeEventListener('shopify:block:select', this.onBlockSelect);
      }

      // index -1 clears the filter: no tab selected, every panel visible
      activate(index, focus) {
        if (index !== -1 && !this.tabs[index]) {
          return;
        }
        const all = index === -1;
        this.activeIndex = index;
        this.tabs.forEach((tab, i) => {
          const selected = i === index;
          tab.setAttribute('aria-selected', selected ? 'true' : 'false');
          tab.tabIndex = selected || (all && i === 0) ? 0 : -1;
        });
        if (this.toggleLabel) {
          this.toggleLabel.textContent = all ? this.toggleDefault : this.tabs[index].textContent.trim();
        }
        if (!this.isSearching()) {
          this.panels.forEach((panel, i) => {
            panel.hidden = !all && i !== index;
          });
        }
        if (focus && !all) {
          this.tabs[index].focus();
        }
      }

      onTabClick(event) {
        if (this.isSearching()) {
          this.search.value = '';
          this.filter();
        }
        const index = this.tabs.indexOf(event.currentTarget);
        // Clicking the active tab again clears the filter
        this.activate(index === this.activeIndex ? -1 : index, false);
        this.setDropdown(false);
      }

      onResetClick() {
        this.activate(-1, false);
        this.setDropdown(false);
      }

      onTabKeydown(event) {
        const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
        let next = null;
        const current = this.activeIndex === -1 ? this.tabs.indexOf(event.currentTarget) : this.activeIndex;
        if (event.key in keys) {
          next = (current + keys[event.key] + this.tabs.length) % this.tabs.length;
        } else if (event.key === 'Home') {
          next = 0;
        } else if (event.key === 'End') {
          next = this.tabs.length - 1;
        } else if (event.key === 'Escape') {
          this.setDropdown(false);
          this.toggle?.focus();
          return;
        }
        if (next !== null) {
          event.preventDefault();
          this.activate(next, true);
        }
      }

      onToggleClick() {
        this.setDropdown(!this.tabsWrap.classList.contains('is-open'));
      }

      onDocumentClick(event) {
        if (this.tabsWrap && !this.tabsWrap.contains(event.target)) {
          this.setDropdown(false);
        }
      }

      setDropdown(open) {
        if (!this.tabsWrap || !this.toggle) {
          return;
        }
        this.tabsWrap.classList.toggle('is-open', open);
        this.toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      isSearching() {
        return Boolean(this.search && this.search.value.trim() !== '');
      }

      filter() {
        const query = this.search ? this.search.value.trim().toLowerCase() : '';
        this.classList.toggle('is-searching', query !== '');

        if (query === '') {
          this.items.forEach((item) => {
            item.hidden = false;
          });
          if (this.empty) {
            this.empty.hidden = true;
          }
          this.activate(this.activeIndex, false);
          return;
        }

        let matches = 0;
        this.items.forEach((item) => {
          const match = this.itemText.get(item).includes(query);
          item.hidden = !match;
          if (match) {
            matches += 1;
          }
        });
        this.panels.forEach((panel) => {
          panel.hidden = !panel.querySelector('[data-faq-item]:not([hidden])');
        });
        if (this.empty) {
          this.empty.hidden = matches > 0;
        }
      }

      onBlockSelect(event) {
        const tabIndex = this.tabs.indexOf(event.target);
        if (tabIndex > -1) {
          this.activate(tabIndex, false);
          return;
        }
        const panel = event.target.closest('[data-faq-panel]');
        if (panel) {
          this.activate(this.panels.indexOf(panel), false);
        }
        if (event.target.matches('[data-faq-item]')) {
          event.target.open = true;
        }
      }
    },
  );
}

/* ===== custom-hero-slider ===== */
if (!customElements.get('custom-hero-slider')) {
  customElements.define(
    'custom-hero-slider',
    class extends HTMLElement {
      connectedCallback() {
        this.swiperEl = this.querySelector('.swiper');
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.onSlideChange = () => this.syncVideos();
        this.onSectionSelect = (event) => {
          if (event.target.contains(this)) {
            this.swiper?.autoplay?.stop();
          }
        };
        this.onSectionDeselect = (event) => {
          if (event.target.contains(this) && this.config?.autoplay) {
            this.swiper?.autoplay?.start();
          }
        };
        this.onBlockSelect = (event) => {
          const slide = event.target.closest('.swiper-slide');
          if (!slide || !this.contains(slide) || !this.swiper) {
            return;
          }
          const index = Array.from(this.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)')).indexOf(slide);
          if (index >= 0) {
            this.swiper.slideToLoop(index);
          }
        };
        document.addEventListener('shopify:section:select', this.onSectionSelect);
        document.addEventListener('shopify:section:deselect', this.onSectionDeselect);
        document.addEventListener('shopify:block:select', this.onBlockSelect);
        this.init();
      }

      disconnectedCallback() {
        document.removeEventListener('shopify:section:select', this.onSectionSelect);
        document.removeEventListener('shopify:section:deselect', this.onSectionDeselect);
        document.removeEventListener('shopify:block:select', this.onBlockSelect);
        this.swiper?.off('slideChange', this.onSlideChange);
        this.swiper?.destroy(true, true);
        this.swiper = null;
      }

      init() {
        if (typeof Swiper === 'undefined' || !this.swiperEl) {
          return;
        }
        const config = this.readConfig();
        const pagination = this.querySelector('.swiper-pagination');
        if (pagination) {
          config.pagination = { el: pagination, clickable: true };
        }
        config.a11y = { enabled: true, ...config.a11y };
        config.keyboard = { enabled: true, ...config.keyboard };
        if (config.autoplay && this.reducedMotion) {
          delete config.autoplay;
        }
        this.config = config;
        this.swiper = new Swiper(this.swiperEl, config);
        this.swiper.on('slideChange', this.onSlideChange);
        this.syncVideos();
      }

      readConfig() {
        const tag = this.querySelector('script[data-swiper-config]');
        try {
          return JSON.parse(tag ? tag.textContent : '{}');
        } catch {
          return {};
        }
      }

      // Only the visible slide's video plays; none autoplay under reduced motion.
      syncVideos() {
        this.querySelectorAll('.hero-slide__media video').forEach((video) => {
          const isActive = video.closest('.swiper-slide')?.classList.contains('swiper-slide-active');
          if (isActive && !this.reducedMotion) {
            video.play().catch(() => {
              // Autoplay can be blocked by the browser; the poster image stays visible.
            });
          } else {
            video.pause();
          }
        });
      }
    },
  );
}

/* ===== custom-benefit-marquee ===== */
if (!customElements.get('custom-benefit-marquee')) {
  customElements.define(
    'custom-benefit-marquee',
    class extends HTMLElement {
      connectedCallback() {
        this.swiperEl = this.querySelector('.swiper');
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.onSectionSelect = (event) => {
          if (event.target.contains(this)) {
            this.swiper?.autoplay?.stop();
          }
        };
        this.onSectionDeselect = (event) => {
          if (event.target.contains(this) && !this.reducedMotion) {
            this.swiper?.autoplay?.start();
          }
        };
        document.addEventListener('shopify:section:select', this.onSectionSelect);
        document.addEventListener('shopify:section:deselect', this.onSectionDeselect);
        this.init();
      }

      disconnectedCallback() {
        document.removeEventListener('shopify:section:select', this.onSectionSelect);
        document.removeEventListener('shopify:section:deselect', this.onSectionDeselect);
        this.swiper?.destroy(true, true);
        this.swiper = null;
      }

      init() {
        if (typeof Swiper === 'undefined' || !this.swiperEl) {
          return;
        }
        const settings = this.readConfig();
        const config = {
          slidesPerView: 'auto',
          // Figma: 20px between items on mobile (23:20208), 28px on desktop
          spaceBetween: 20,
          breakpoints: { 990: { spaceBetween: 28 } },
          loop: true,
          speed: settings.speed || 6000,
          freeMode: { enabled: true, momentum: false },
          allowTouchMove: settings.allowDrag !== false,
          a11y: { enabled: false },
        };
        // Reduced motion: a static, swipeable row instead of a moving ticker.
        if (!this.reducedMotion) {
          config.autoplay = {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: settings.pauseOnHover !== false,
            reverseDirection: settings.reverse === true,
          };
        }
        this.swiper = new Swiper(this.swiperEl, config);
      }

      readConfig() {
        const tag = this.querySelector('script[data-marquee-config]');
        try {
          return JSON.parse(tag ? tag.textContent : '{}');
        } catch {
          return {};
        }
      }
    },
  );
}

/* ===== custom-mobile-slider ===== */
// Swiper below 990px only; above that the slides fall back to the section's CSS grid.
if (!customElements.get('custom-mobile-slider')) {
  customElements.define(
    'custom-mobile-slider',
    class extends HTMLElement {
      connectedCallback() {
        this.swiperEl = this.querySelector('.swiper');
        this.config = this.readConfig();
        this.mediaQuery = window.matchMedia('(max-width: 989px)');
        this.onBreakpointChange = () => this.update();
        this.mediaQuery.addEventListener('change', this.onBreakpointChange);
        this.update();
      }

      disconnectedCallback() {
        this.mediaQuery?.removeEventListener('change', this.onBreakpointChange);
        this.destroySwiper();
      }

      update() {
        if (this.mediaQuery.matches && this.config.enabled !== false) {
          this.initSwiper();
        } else {
          this.destroySwiper();
        }
      }

      initSwiper() {
        if (this.swiper || typeof Swiper === 'undefined' || !this.swiperEl) {
          return;
        }
        const pagination = this.querySelector('.swiper-pagination');
        this.swiper = new Swiper(this.swiperEl, {
          ...this.config,
          a11y: { enabled: true },
          keyboard: { enabled: true },
          pagination: pagination ? { el: pagination, clickable: true } : false,
        });
      }

      destroySwiper() {
        this.swiper?.destroy(true, true);
        this.swiper = null;
      }

      readConfig() {
        const tag = this.querySelector('script[data-swiper-config]');
        try {
          return JSON.parse(tag ? tag.textContent : '{}');
        } catch {
          return {};
        }
      }
    },
  );
}

/* ===== custom-footer-accordion ===== */
if (!customElements.get('custom-footer-accordion')) {
  customElements.define(
    'custom-footer-accordion',
    class extends HTMLElement {
      connectedCallback() {
        this.toggle = this.querySelector('[data-footer-toggle]');
        if (!this.toggle) {
          return;
        }
        this.mobileQuery = window.matchMedia('(max-width: 989px)');
        this.onToggle = this.onToggle.bind(this);
        this.onBreakpoint = this.onBreakpoint.bind(this);
        this.toggle.addEventListener('click', this.onToggle);
        this.mobileQuery.addEventListener('change', this.onBreakpoint);
        this.onBreakpoint();
      }

      disconnectedCallback() {
        this.toggle?.removeEventListener('click', this.onToggle);
        this.mobileQuery?.removeEventListener('change', this.onBreakpoint);
      }

      onBreakpoint() {
        // Lists are always open on desktop and start collapsed on mobile.
        const mobile = this.mobileQuery.matches;
        this.toggle.setAttribute('aria-expanded', mobile ? 'false' : 'true');
        if (mobile) {
          this.toggle.removeAttribute('tabindex');
        } else {
          this.toggle.setAttribute('tabindex', '-1');
        }
      }

      onToggle() {
        if (!this.mobileQuery.matches) {
          return;
        }
        const expanded = this.toggle.getAttribute('aria-expanded') === 'true';
        this.toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      }
    },
  );
}

/* ===== custom-card-slider ===== */
// Generic Swiper card slider: options come from a <script data-swiper-config> tag in the section.
if (!customElements.get('custom-card-slider')) {
  customElements.define(
    'custom-card-slider',
    class extends HTMLElement {
      connectedCallback() {
        this.swiperEl = this.querySelector('.swiper');
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.onSectionSelect = (event) => {
          if (event.target.contains(this)) {
            this.pauseAutoplay();
          }
        };
        this.onSectionDeselect = (event) => {
          if (event.target.contains(this)) {
            this.resumeAutoplay();
          }
        };
        this.onBlockSelect = (event) => {
          const slide = event.target.closest('.swiper-slide');
          if (slide && this.contains(slide) && this.swiper) {
            this.swiper.slideTo(Array.from(this.swiper.slides).indexOf(slide));
          }
        };
        document.addEventListener('shopify:section:select', this.onSectionSelect);
        document.addEventListener('shopify:section:deselect', this.onSectionDeselect);
        document.addEventListener('shopify:block:select', this.onBlockSelect);
        this.init();
      }

      disconnectedCallback() {
        document.removeEventListener('shopify:section:select', this.onSectionSelect);
        document.removeEventListener('shopify:section:deselect', this.onSectionDeselect);
        document.removeEventListener('shopify:block:select', this.onBlockSelect);
        this.swiper?.destroy(true, true);
        this.swiper = null;
      }

      init() {
        if (typeof Swiper === 'undefined' || !this.swiperEl) {
          return;
        }
        const config = this.readConfig();
        const pagination = this.querySelector('.swiper-pagination');
        if (pagination) {
          config.pagination = { el: pagination, clickable: true };
        }
        const prevEl = this.querySelector('[data-slider-prev]');
        const nextEl = this.querySelector('[data-slider-next]');
        if (prevEl && nextEl) {
          config.navigation = { prevEl, nextEl };
        }
        config.a11y = { enabled: true, ...config.a11y };
        config.keyboard = { enabled: true, ...config.keyboard };
        if (config.autoplay && this.reducedMotion) {
          delete config.autoplay;
        }
        this.hasAutoplay = Boolean(config.autoplay);
        this.swiper = new Swiper(this.swiperEl, config);
      }

      pauseAutoplay() {
        this.swiper?.autoplay?.stop();
      }

      resumeAutoplay() {
        if (this.hasAutoplay) {
          this.swiper?.autoplay?.start();
        }
      }

      readConfig() {
        const tag = this.querySelector('script[data-swiper-config]');
        try {
          return JSON.parse(tag ? tag.textContent : '{}');
        } catch {
          return {};
        }
      }
    },
  );
}

/* ===== custom-video-modal ===== */
// One native <dialog> per section; play buttons point at a <template> holding the video (loaded only on open).
if (!customElements.get('custom-video-modal')) {
  customElements.define(
    'custom-video-modal',
    class extends HTMLElement {
      connectedCallback() {
        this.root = this.closest('[data-section-root]') || this.parentElement;
        this.dialog = this.querySelector('dialog');
        this.body = this.querySelector('[data-modal-body]');
        this.onRootClick = (event) => {
          const trigger = event.target.closest('[data-video-template]');
          if (trigger && this.root.contains(trigger)) {
            this.open(trigger);
          }
        };
        this.onDialogClick = (event) => {
          if (event.target === this.dialog || event.target.closest('[data-modal-close]')) {
            this.dialog.close();
          }
        };
        this.onDialogClose = () => this.cleanup();
        this.root.addEventListener('click', this.onRootClick);
        this.dialog?.addEventListener('click', this.onDialogClick);
        this.dialog?.addEventListener('close', this.onDialogClose);
      }

      disconnectedCallback() {
        this.root?.removeEventListener('click', this.onRootClick);
        this.dialog?.removeEventListener('click', this.onDialogClick);
        this.dialog?.removeEventListener('close', this.onDialogClose);
        if (this.dialog?.open) {
          this.dialog.close();
        }
      }

      open(trigger) {
        const template = document.getElementById(trigger.dataset.videoTemplate);
        if (!template || !this.dialog || !this.body) {
          return;
        }
        this.trigger = trigger;
        this.body.replaceChildren(template.content.cloneNode(true));
        this.root.querySelector('custom-card-slider')?.pauseAutoplay?.();
        document.body.style.overflow = 'hidden';
        this.dialog.showModal();
        this.body
          .querySelector('video')
          ?.play()
          .catch(() => {
            // Playback can be blocked by the browser; the controls stay available.
          });
      }

      cleanup() {
        this.body?.querySelector('video')?.pause();
        this.body?.replaceChildren();
        document.body.style.overflow = '';
        this.root.querySelector('custom-card-slider')?.resumeAutoplay?.();
        this.trigger?.focus();
        this.trigger = null;
      }
    },
  );
}

/* ===== custom-contact-form ===== */
// Shopify's contact form stores one contact[name]; join the first + last name inputs into it on submit.
if (!customElements.get('custom-contact-form')) {
  customElements.define(
    'custom-contact-form',
    class extends HTMLElement {
      connectedCallback() {
        this.form = this.querySelector('form');
        if (!this.form) {
          return;
        }
        this.onSubmit = () => {
          const first = this.form.querySelector('[data-contact-first]');
          const last = this.form.querySelector('[data-contact-last]');
          const name = this.form.querySelector('[data-contact-name]');
          if (!first || !last || !name) {
            return;
          }
          name.value = [first.value, last.value]
            .map((value) => value.trim())
            .filter(Boolean)
            .join(' ');
        };
        this.form.addEventListener('submit', this.onSubmit);
      }

      disconnectedCallback() {
        if (this.form && this.onSubmit) {
          this.form.removeEventListener('submit', this.onSubmit);
        }
      }
    },
  );
}
