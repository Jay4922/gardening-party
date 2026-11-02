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
        this.activeIndex = 0;
        this.itemText = new Map(this.items.map((item) => [item, item.textContent.toLowerCase()]));

        this.onTabClick = this.onTabClick.bind(this);
        this.onTabKeydown = this.onTabKeydown.bind(this);
        this.onToggleClick = this.onToggleClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onSearchInput = debounce(() => this.filter(), 150);
        this.onBlockSelect = this.onBlockSelect.bind(this);

        this.tabs.forEach((tab) => {
          tab.addEventListener('click', this.onTabClick);
          tab.addEventListener('keydown', this.onTabKeydown);
        });
        this.toggle?.addEventListener('click', this.onToggleClick);
        this.search?.addEventListener('input', this.onSearchInput);
        document.addEventListener('click', this.onDocumentClick);
        this.addEventListener('shopify:block:select', this.onBlockSelect);

        this.activate(0, false);
      }

      disconnectedCallback() {
        this.tabs.forEach((tab) => {
          tab.removeEventListener('click', this.onTabClick);
          tab.removeEventListener('keydown', this.onTabKeydown);
        });
        this.toggle?.removeEventListener('click', this.onToggleClick);
        this.search?.removeEventListener('input', this.onSearchInput);
        document.removeEventListener('click', this.onDocumentClick);
        this.removeEventListener('shopify:block:select', this.onBlockSelect);
      }

      activate(index, focus) {
        if (!this.tabs[index]) {
          return;
        }
        this.activeIndex = index;
        this.tabs.forEach((tab, i) => {
          const selected = i === index;
          tab.setAttribute('aria-selected', selected ? 'true' : 'false');
          tab.tabIndex = selected ? 0 : -1;
        });
        if (this.toggleLabel) {
          this.toggleLabel.textContent = this.tabs[index].textContent.trim();
        }
        if (!this.isSearching()) {
          this.panels.forEach((panel, i) => {
            panel.hidden = i !== index;
          });
        }
        if (focus) {
          this.tabs[index].focus();
        }
      }

      onTabClick(event) {
        if (this.isSearching()) {
          this.search.value = '';
          this.filter();
        }
        this.activate(this.tabs.indexOf(event.currentTarget), false);
        this.setDropdown(false);
      }

      onTabKeydown(event) {
        const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
        let next = null;
        if (event.key in keys) {
          next = (this.activeIndex + keys[event.key] + this.tabs.length) % this.tabs.length;
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
          spaceBetween: 28,
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
