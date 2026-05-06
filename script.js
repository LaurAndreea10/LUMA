const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const ui = {
  page: $("#page"),
  theme: $("#themeSelect"),
  form: $("#signupForm"),
  email: $("#email"),
  inputShell: $("#inputShell"),
  submit: $("#submitBtn"),
  submitLabel: $("#submitBtnLabel"),
  success: $("#successMessage"),
  error: $("#emailError"),
  flash: $("#themeFlash"),
  glow: $("#cursorGlow"),
  copyBtn: $("#copyInviteBtn"),
  replayBtn: $("#replayIntroBtn"),
  intro: $("#introScreen"),
  introSkip: $("#introSkipBtn"),
  badge: $("#statusBadge"),
  panel: $("#glassPanel"),
  shimmer: $("#panelShimmer"),
  days: $("#days"),
  hours: $("#hours"),
  minutes: $("#minutes"),
  daysLabel: $('[data-i18n="daysLabel"]'),
  hoursLabel: $('[data-i18n="hoursLabel"]'),
  minutesLabel: $('[data-i18n="minutesLabel"]'),
  eyebrow: $("#eyebrow"),
  title: $("#title"),
  lead: $("#lead"),
  socialValue: $("#socialProofValue"),
  socialLabel: $("#socialProofLabel"),
  emailLabel: $("#emailLabel"),
  micro: $("#microcopy"),
  panelKicker: $("#panelKicker"),
  panelTitle: $("#panelTitle"),
  panelDescription: $("#panelDescription"),
  stat1: $("#statLabel1"),
  statValue1: $("#statValue1"),
  stat2: $("#statLabel2"),
  statValue2: $("#statValue2"),
  chip1: $("#chip1"),
  chip2: $("#chip2"),
  chip3: $("#chip3"),
  langBtns: $$(".lang-btn"),
  parallax: $$("[data-parallax]"),
  revealItems: $$("[data-reveal]")
};

const STORE = {
  theme: "luma-theme",
  lang: "luma-lang",
  draft: "luma-draft-email",
  intro: "luma-intro-dismissed",
  success: "luma-success-state-v3",
  themeOverride: "luma-theme-override"
};

const SUCCESS_TTL = 1000 * 60 * 20;

const THEMES = {
  minimal: "theme-minimal",
  retro: "theme-retro",
  luxury: "theme-luxury"
};

const NETWORK_CONFIG = {
  endpoint: ui.form?.dataset.endpoint || "",
  mode: "json", // "json" | "formspree"
  timeoutMs: 8000
};

const copy = {
  en: {
    badge: "Private Beta • July 2026",
    eyebrow: "May 2026 CodePen Challenge",
    title: `A calmer way <span>to launch</span> what’s next.`,
    lead: "LUMA is a new digital experience for thoughtful teams, curious creators, and beautifully ambitious ideas. Join the waitlist and get first access when the beta opens.",
    socialTarget: 3100,
    socialLabel: "creators already joined the waitlist",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    cta: "Request Access",
    loading: "Saving...",
    copyBtn: "Copy invite text",
    copyDone: "Copied!",
    copyFail: "Press Ctrl/Cmd + C",
    copyText: "I just joined the LUMA private beta waitlist. Take a look at this landing page concept.",
    replay: "Replay Intro",
    skip: "Skip",
    micro: "Three visual directions. One shared layout. Switch styles to preview the system.",
    days: "Days",
    hours: "Hours",
    minutes: "Min",
    errors: {
      empty: "Please enter your email address.",
      invalid: "Please enter a valid email address.",
      network: "Something went wrong while saving your request. Please try again.",
      timeout: "The request took too long. Please try again."
    },
    sent: {
      minimalBtn: "Saved",
      retroBtn: "You’re On The List!",
      luxuryBtn: "Confirmed",
      minimalMsg: "You’re in — we’ll be in touch.",
      retroMsg: "Nice — your beta spot is saved.",
      luxuryMsg: "Confirmed — your invitation is reserved."
    },
    themes: {
      minimal: {
        panelKicker: "Interface Preview",
        panelTitle: "Early Access Dashboard",
        panelDescription: "A quiet control surface for launches, updates, and early invites.",
        stat1: "Waitlist",
        statValue1: "3.1k",
        stat2: "Launch",
        statValue2: "July",
        chip1: "Early Access",
        chip2: "Invite Only",
        chip3: "Built for Launch"
      },
      retro: {
        panelKicker: "Play Mode",
        panelTitle: "Launch Party Board",
        panelDescription: "Bright signals, fast invites, and playful momentum for the next big reveal.",
        stat1: "Hype",
        statValue1: "97%",
        stat2: "Drop",
        statValue2: "Soon",
        chip1: "Color Burst",
        chip2: "Invite Crew",
        chip3: "Ready To Pop"
      },
      luxury: {
        panelKicker: "Editorial Preview",
        panelTitle: "Private Access Ledger",
        panelDescription: "A refined surface for discreet launches, curated access, and measured anticipation.",
        stat1: "Guests",
        statValue1: "3.1k",
        stat2: "Edition",
        statValue2: "July",
        chip1: "Private Circle",
        chip2: "Invitation Only",
        chip3: "Curated Launch"
      }
    }
  },
  ro: {
    badge: "Beta Privat • Iulie 2026",
    eyebrow: "Provocarea CodePen • Mai 2026",
    title: `Un mod mai calm <span>să lansezi</span> ce urmează.`,
    lead: "LUMA este o nouă experiență digitală pentru echipe atente, creatori curioși și idei frumos ambițioase. Intră pe lista de așteptare și obține acces imediat ce beta-ul se deschide.",
    socialTarget: 3100,
    socialLabel: "de creatori s-au înscris deja pe listă",
    emailLabel: "Email",
    emailPlaceholder: "Introdu emailul tău",
    cta: "Cere acces",
    loading: "Se salvează...",
    copyBtn: "Copiază textul",
    copyDone: "Copiat!",
    copyFail: "Apasă Ctrl/Cmd + C",
    copyText: "Tocmai m-am înscris pe lista de așteptare pentru beta-ul privat LUMA. Uite conceptul acestui landing page.",
    replay: "Rulează intro",
    skip: "Sari",
    micro: "Trei direcții vizuale. Același layout. Schimbă stilul ca să vezi sistemul.",
    days: "Zile",
    hours: "Ore",
    minutes: "Min",
    errors: {
      empty: "Te rog introdu adresa de email.",
      invalid: "Te rog introdu o adresă de email validă.",
      network: "A apărut o problemă la salvare. Încearcă din nou.",
      timeout: "Cererea a durat prea mult. Încearcă din nou."
    },
    sent: {
      minimalBtn: "Salvat",
      retroBtn: "Ești pe listă!",
      luxuryBtn: "Confirmat",
      minimalMsg: "Gata — revenim curând.",
      retroMsg: "Perfect — locul tău e salvat.",
      luxuryMsg: "Confirmat — invitația ta este rezervată."
    },
    themes: {
      minimal: {
        panelKicker: "Previzualizare interfață",
        panelTitle: "Tablou de bord • Early Access",
        panelDescription: "Un spațiu calm pentru lansări, actualizări și invitații timpurii.",
        stat1: "Listă",
        statValue1: "3.1k",
        stat2: "Lansare",
        statValue2: "Iulie",
        chip1: "Acces Timpuriu",
        chip2: "Doar cu Invitație",
        chip3: "Creat pentru lansare"
      },
      retro: {
        panelKicker: "Mod Play",
        panelTitle: "Panou de Lansare",
        panelDescription: "Semnale vibrante, invitații rapide și energie bună pentru următorul reveal.",
        stat1: "Buzz",
        statValue1: "97%",
        stat2: "Drop",
        statValue2: "Curând",
        chip1: "Explozie de culoare",
        chip2: "Crew invitat",
        chip3: "Gata de lansare"
      },
      luxury: {
        panelKicker: "Previzualizare editorială",
        panelTitle: "Registru de Acces Privat",
        panelDescription: "O suprafață rafinată pentru lansări discrete, acces curatoriat și anticipare controlată.",
        stat1: "Invitați",
        statValue1: "3.1k",
        stat2: "Ediție",
        statValue2: "Iulie",
        chip1: "Cerc privat",
        chip2: "Numai cu invitație",
        chip3: "Lansare curatoriată"
      }
    }
  }
};

const state = {
  lang: "en",
  theme: "minimal",
  submitted: false,
  touched: false,
  mouseX: 0,
  mouseY: 0,
  rafId: null,
  socialAnimated: false,
  themeOverride: false
};

const storage = {
  get(key, fallback = null) {
    try {
      const value = localStorage.getItem(key);
      return value ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  },
  getJSON(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  setJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }
};

const utils = {
  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },
  getSystemPreferredTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "luxury" : "minimal";
  },
  createTimeoutSignal(ms) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), ms);
    return {
      signal: controller.signal,
      clear: () => clearTimeout(id)
    };
  }
};

const network = {
  async submitWaitlist(email, meta = {}) {
    if (!NETWORK_CONFIG.endpoint || NETWORK_CONFIG.endpoint.includes("example.com")) {
      await utils.wait(1000);
      return { ok: true, mode: "demo" };
    }

    const timeout = utils.createTimeoutSignal(NETWORK_CONFIG.timeoutMs);

    try {
      let response;

      if (NETWORK_CONFIG.mode === "formspree") {
        response = await fetch(NETWORK_CONFIG.endpoint, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: new URLSearchParams({
            email,
            lang: meta.lang || "",
            theme: meta.theme || "",
            source: "luma-landing"
          }),
          signal: timeout.signal
        });
      } else {
        response = await fetch(NETWORK_CONFIG.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            email,
            lang: meta.lang,
            theme: meta.theme,
            source: "luma-landing",
            subscribedAt: new Date().toISOString()
          }),
          signal: timeout.signal
        });
      }

      timeout.clear();

      if (!response.ok) {
        let message = "";
        try {
          const data = await response.json();
          message = data?.message || "";
        } catch {}
        return { ok: false, status: response.status, message };
      }

      return { ok: true, mode: "remote" };
    } catch (error) {
      timeout.clear();

      if (error?.name === "AbortError") {
        return { ok: false, timeout: true };
      }

      return { ok: false, error };
    }
  }
};

const app = {
  init() {
    this.restorePreferences();
    this.applyAutoThemeMode();
    this.applyTheme(state.theme, false);
    this.applyLanguage(state.lang, false);
    this.restoreDraft();
    this.restoreTemporarySuccess();
    this.setupCountdown();
    this.setupIntro();
    this.setupReveal();
    this.bindEvents();
    this.animateSocialProofOnce();
  },

  restorePreferences() {
    const savedTheme = storage.get(STORE.theme, null);
    const savedLang = storage.get(STORE.lang, "en");
    const savedOverride = storage.get(STORE.themeOverride, "false") === "true";

    state.lang = savedLang;
    state.themeOverride = savedOverride;
    state.theme = savedTheme || utils.getSystemPreferredTheme();
  },

  applyAutoThemeMode() {
    ui.page.classList.toggle("auto-theme", !state.themeOverride);
  },

  restoreDraft() {
    const draft = storage.get(STORE.draft, "");
    if (draft && !state.submitted) {
      ui.email.value = draft;
    }
  },

  restoreTemporarySuccess() {
    const data = storage.getJSON(STORE.success, null);
    if (!data) return;

    const isFresh = Date.now() - data.timestamp < SUCCESS_TTL;
    if (!isFresh) {
      storage.remove(STORE.success);
      return;
    }

    state.submitted = true;
    if (data.email) ui.email.value = data.email;
    if (data.theme && THEMES[data.theme]) {
      state.theme = data.theme;
      ui.theme.value = data.theme;
    }

    this.applyTheme(state.theme, false);
    this.updateSubmittedUI(true);
  },

  getLocale() {
    return copy[state.lang] || copy.en;
  },

  getThemeContent(theme = state.theme) {
    return this.getLocale().themes[theme];
  },

  pulseUI() {
    ui.badge.classList.remove("bump");
    ui.panel.classList.remove("bump");
    ui.shimmer.classList.remove("play");
    void ui.badge.offsetWidth;
    ui.badge.classList.add("bump");
    ui.panel.classList.add("bump");
    ui.shimmer.classList.add("play");
  },

  applyTheme(themeName, animate = true) {
    const safe = THEMES[themeName] ? themeName : "minimal";
    state.theme = safe;

    ui.page.className = ui.page.className
      .split(" ")
      .filter(cls => !Object.values(THEMES).includes(cls))
      .join(" ")
      .trim();

    ui.page.classList.add("page", THEMES[safe]);
    ui.page.classList.toggle("auto-theme", !state.themeOverride);

    ui.theme.value = safe;
    storage.set(STORE.theme, safe);

    ui.flash.classList.remove("play");
    void ui.flash.offsetWidth;
    ui.flash.classList.add("play");

    this.applyThemeCopy();
    this.updateSubmitLabel();
    this.updateSuccessMessage();

    if (animate) this.pulseUI();
  },

  applyLanguage(lang, animate = true) {
    const safe = copy[lang] ? lang : "en";
    state.lang = safe;
    const t = this.getLocale();

    ui.badge.textContent = t.badge;
    ui.eyebrow.textContent = t.eyebrow;
    ui.title.innerHTML = t.title;
    ui.lead.textContent = t.lead;
    ui.socialLabel.textContent = t.socialLabel;
    ui.emailLabel.textContent = t.emailLabel;
    ui.email.placeholder = t.emailPlaceholder;
    ui.micro.textContent = t.micro;
    ui.daysLabel.textContent = t.days;
    ui.hoursLabel.textContent = t.hours;
    ui.minutesLabel.textContent = t.minutes;
    ui.introSkip.textContent = t.skip;
    ui.replayBtn.textContent = t.replay;
    ui.copyBtn.textContent = t.copyBtn;
    ui.copyBtn.dataset.defaultLabel = t.copyBtn;
    ui.copyBtn.dataset.copiedLabel = t.copyDone;
    ui.copyBtn.dataset.failedLabel = t.copyFail;
    ui.copyBtn.dataset.inviteText = t.copyText;

    document.documentElement.lang = safe;
    storage.set(STORE.lang, safe);

    this.updateLanguageButtons();
    this.applyThemeCopy();
    this.updateSubmitLabel();
    this.updateSuccessMessage();
    this.animateSocialProof(true);

    if (state.touched) this.validateSoft();
    if (animate) this.pulseUI();
  },

  applyThemeCopy() {
    const themeContent = this.getThemeContent();
    ui.panelKicker.textContent = themeContent.panelKicker;
    ui.panelTitle.textContent = themeContent.panelTitle;
    ui.panelDescription.textContent = themeContent.panelDescription;
    ui.stat1.textContent = themeContent.stat1;
    ui.statValue1.textContent = themeContent.statValue1;
    ui.stat2.textContent = themeContent.stat2;
    ui.statValue2.textContent = themeContent.statValue2;
    ui.chip1.textContent = themeContent.chip1;
    ui.chip2.textContent = themeContent.chip2;
    ui.chip3.textContent = themeContent.chip3;
  },

  updateLanguageButtons() {
    ui.langBtns.forEach(btn => {
      const active = btn.dataset.lang === state.lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  },

  setError(message = "", isServer = false) {
    const active = Boolean(message);
    ui.error.textContent = message;
    ui.error.classList.toggle("show", active);
    ui.error.classList.toggle("is-server", isServer);
    ui.email.setAttribute("aria-invalid", active ? "true" : "false");
    ui.inputShell.classList.toggle("invalid", active);
    if (active) ui.inputShell.classList.remove("valid");
  },

  setValidState(active) {
    ui.inputShell.classList.toggle("valid", active);
    if (active) ui.inputShell.classList.remove("invalid");
  },

  validateEmail(value) {
    const t = this.getLocale();
    const email = value.trim();
    if (!email) return t.errors.empty;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) return t.errors.invalid;
    return "";
  },

  validateSoft() {
    if (!state.touched) return true;

    const error = this.validateEmail(ui.email.value);

    if (!ui.email.value.trim()) {
      this.setError("");
      this.setValidState(false);
      return false;
    }

    if (error) {
      this.setError(error);
      return false;
    }

    this.setError("");
    this.setValidState(true);
    return true;
  },

  updateSubmitLabel() {
    const t = this.getLocale();

    if (ui.submit.classList.contains("loading")) {
      ui.submitLabel.textContent = t.loading;
      return;
    }

    if (!state.submitted) {
      ui.submitLabel.textContent = t.cta;
      return;
    }

    const sent = t.sent;
    if (state.theme === "minimal") ui.submitLabel.textContent = sent.minimalBtn;
    else if (state.theme === "retro") ui.submitLabel.textContent = sent.retroBtn;
    else ui.submitLabel.textContent = sent.luxuryBtn;
  },

  updateSuccessMessage(isServer = false) {
    const sent = this.getLocale().sent;
    if (state.theme === "minimal") ui.success.textContent = sent.minimalMsg;
    else if (state.theme === "retro") ui.success.textContent = sent.retroMsg;
    else ui.success.textContent = sent.luxuryMsg;

    ui.success.classList.toggle("is-server", isServer);
  },

  setButtonLoading(active) {
    ui.submit.classList.toggle("loading", active);
    ui.submit.disabled = active || state.submitted;
    this.updateSubmitLabel();
  },

  saveTemporarySuccess() {
    storage.setJSON(STORE.success, {
      timestamp: Date.now(),
      email: ui.email.value.trim(),
      theme: state.theme
    });
  },

  clearTemporarySuccess() {
    storage.remove(STORE.success);
  },

  updateSubmittedUI(isServer = false) {
    ui.email.disabled = true;
    ui.submit.disabled = true;
    ui.success.classList.add("show");
    ui.submit.classList.add("success-pulse");
    ui.inputShell.classList.remove("valid", "invalid");
    this.updateSubmitLabel();
    this.updateSuccessMessage(isServer);

    setTimeout(() => ui.submit.classList.remove("success-pulse"), 520);
  },

  resetSubmissionState() {
    state.submitted = false;
    ui.email.disabled = false;
    ui.submit.disabled = false;
    ui.success.classList.remove("show");
    this.clearTemporarySuccess();
    this.updateSubmitLabel();
  },

  async handleSubmit(event) {
    event.preventDefault();

    state.touched = true;
    const error = this.validateEmail(ui.email.value);

    if (error) {
      this.setError(error);
      this.setValidState(false);
      ui.success.classList.remove("show");
      ui.email.focus();
      return;
    }

    this.setError("");
    this.setValidState(true);
    this.setButtonLoading(true);

    const result = await network.submitWaitlist(ui.email.value.trim(), {
      lang: state.lang,
      theme: state.theme
    });

    this.setButtonLoading(false);

    if (!result.ok) {
      const t = this.getLocale();
      const message = result.timeout
        ? t.errors.timeout
        : (result.message || t.errors.network);

      this.setError(message, true);
      ui.success.classList.remove("show");
      return;
    }

    state.submitted = true;
    this.updateSubmittedUI(result.mode === "remote");
    this.saveTemporarySuccess();
    storage.remove(STORE.draft);
  },

  async copyInvite() {
    const value = ui.copyBtn.dataset.inviteText;

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(value);
      ui.copyBtn.textContent = ui.copyBtn.dataset.copiedLabel;
      ui.copyBtn.classList.add("copied");
    } catch {
      const fallback = document.createElement("textarea");
      fallback.value = value;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "absolute";
      fallback.style.left = "-9999px";
      document.body.appendChild(fallback);
      fallback.select();

      try {
        document.execCommand("copy");
        ui.copyBtn.textContent = ui.copyBtn.dataset.copiedLabel;
        ui.copyBtn.classList.add("copied");
      } catch {
        ui.copyBtn.textContent = ui.copyBtn.dataset.failedLabel;
      } finally {
        document.body.removeChild(fallback);
      }
    }

    setTimeout(() => {
      ui.copyBtn.textContent = ui.copyBtn.dataset.defaultLabel;
      ui.copyBtn.classList.remove("copied");
    }, 1400);
  },

  setupCountdown() {
    const launchDate = new Date("2026-07-20T10:00:00");

    const update = () => {
      const diff = launchDate.getTime() - Date.now();

      if (diff <= 0) {
        ui.days.textContent = "00";
        ui.hours.textContent = "00";
        ui.minutes.textContent = "00";
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);

      ui.days.textContent = String(d).padStart(2, "0");
      ui.hours.textContent = String(h).padStart(2, "0");
      ui.minutes.textContent = String(m).padStart(2, "0");
    };

    update();
    setInterval(update, 30000);
  },

  animateCounter(element, target, formatter) {
    if (utils.prefersReducedMotion()) {
      element.textContent = formatter(target);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    const from = Math.max(2800, target - 420);

    const frame = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(from + (target - from) * eased);
      element.textContent = formatter(value);

      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  },

  animateSocialProof(force = false) {
    const t = this.getLocale();
    if (state.socialAnimated && !force) return;
    state.socialAnimated = true;

    this.animateCounter(ui.socialValue, t.socialTarget, value => {
      const locale = state.lang === "ro" ? "ro-RO" : "en-US";
      return `${value.toLocaleString(locale)}+`;
    });
  },

  animateSocialProofOnce() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateSocialProof();
          observer.disconnect();
        }
      });
    }, { threshold: 0.45 });

    if (ui.socialValue) observer.observe(ui.socialValue);
  },

  setupReveal() {
    if (utils.prefersReducedMotion()) {
      ui.revealItems.forEach(item => item.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = `${index * 60}ms`;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    });

    ui.revealItems.forEach(item => observer.observe(item));
  },

  setupIntro() {
    const dismissed = storage.get(STORE.intro, "false") === "true";
    if (utils.prefersReducedMotion()) {
      this.hideIntro(false);
      return;
    }

    if (dismissed) this.hideIntro(false);
    else this.bindIntroAutoHide();
  },

  hideIntro(persist = true) {
    ui.intro.style.display = "none";
    if (persist) storage.set(STORE.intro, "true");
  },

  bindIntroAutoHide() {
    ui.intro.addEventListener("animationend", (event) => {
      if (event.animationName === "introFade") this.hideIntro(true);
    }, { once: true });
  },

  replayIntro() {
    ui.intro.style.display = "grid";
    ui.intro.style.animation = "none";

    const brand = $(".intro-brand", ui.intro);
    if (brand) {
      brand.style.animation = "none";
      void brand.offsetWidth;
      brand.style.animation = "";
    }

    void ui.intro.offsetWidth;
    ui.intro.style.animation = "";
    storage.remove(STORE.intro);
    this.bindIntroAutoHide();
  },

  handleMouseMove(event) {
    state.mouseX = event.clientX;
    state.mouseY = event.clientY;

    if (ui.glow) {
      ui.glow.style.left = `${event.clientX}px`;
      ui.glow.style.top = `${event.clientY}px`;
    }

    if (!state.rafId) {
      state.rafId = requestAnimationFrame(() => this.renderParallax());
    }
  },

  renderParallax() {
    const x = (state.mouseX / window.innerWidth - 0.5) * 2;
    const y = (state.mouseY / window.innerHeight - 0.5) * 2;

    ui.parallax.forEach(el => {
      const strength = Number(el.dataset.parallax) || 10;
      el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
    });

    state.rafId = null;
  },

  bindSystemThemeListener() {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateFromSystem = () => {
      if (state.themeOverride) return;
      state.theme = utils.getSystemPreferredTheme();
      this.applyAutoThemeMode();
      this.applyTheme(state.theme, false);
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateFromSystem);
    } else if (typeof media.addListener === "function") {
      media.addListener(updateFromSystem);
    }
  },

  bindEvents() {
    ui.langBtns.forEach(btn => {
      btn.addEventListener("click", () => this.applyLanguage(btn.dataset.lang));
    });

    ui.theme.addEventListener("change", () => {
      state.themeOverride = true;
      storage.set(STORE.themeOverride, "true");
      this.applyAutoThemeMode();
      this.applyTheme(ui.theme.value);

      if (state.submitted) {
        this.saveTemporarySuccess();
        this.updateSubmittedUI(true);
      }
    });

    ui.email.addEventListener("blur", () => {
      state.touched = true;
      this.validateSoft();
    });

    ui.email.addEventListener("input", () => {
      if (!state.submitted) {
        storage.set(STORE.draft, ui.email.value);
      }

      if (state.touched) this.validateSoft();

      if (state.submitted) this.resetSubmissionState();
    });

    ui.form.addEventListener("submit", event => this.handleSubmit(event));
    ui.copyBtn.addEventListener("click", () => this.copyInvite());
    ui.introSkip.addEventListener("click", () => this.hideIntro(true));
    ui.replayBtn.addEventListener("click", () => this.replayIntro());

    if (!utils.prefersReducedMotion()) {
      window.addEventListener("mousemove", event => this.handleMouseMove(event), { passive: true });
    }

    this.bindSystemThemeListener();
  }
};

app.init();
