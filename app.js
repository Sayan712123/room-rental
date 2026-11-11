/* ============================================================
   Rooma — room rental
   Vanilla JS: theme, listings, filtering, sorting, modal, form
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- data ---------------- */
  var ROOMS = [
    {
      id: 'r1',
      title: 'Sunlit room in a Georgian terrace',
      area: 'Indiranagar',
      city: 'Bengaluru',
      price: 24000,
      deposit: 48000,
      type: 'Private room',
      beds: 1, baths: 1, sqft: 210,
      rating: 4.9, reviews: 34,
      available: 'Immediately',
      availableNow: true,
      posted: 2,
      images: ['images/room-01.jpg', 'images/room-05.jpg', 'images/room-09.jpg'],
      amenities: ['Attached bathroom', 'Furnished', 'Wi-Fi', 'Air conditioning', 'Balcony'],
      host: { name: 'Meera K.', since: 'Host since 2021', initials: 'MK' },
      blurb: 'A quiet corner room on the first floor of a 1930s terrace house. Tall sash windows, original wooden floors, and a balcony that catches the morning sun. The house has three other rooms, all occupied by working professionals.',
      rules: 'No smoking indoors. Quiet hours after 11pm. Couples welcome.'
    },
    {
      id: 'r2',
      title: 'Compact studio, five minutes from the metro',
      area: 'Koramangala',
      city: 'Bengaluru',
      price: 18500,
      deposit: 37000,
      type: 'Studio',
      beds: 1, baths: 1, sqft: 320,
      rating: 4.7, reviews: 21,
      available: 'Immediately',
      availableNow: true,
      posted: 5,
      images: ['images/room-02.jpg', 'images/room-06.jpg', 'images/room-10.jpg'],
      amenities: ['Attached bathroom', 'Furnished', 'Wi-Fi', 'Air conditioning'],
      host: { name: 'Rahul S.', since: 'Host since 2019', initials: 'RS' },
      blurb: 'Self-contained studio with its own kitchenette and bathroom — no shared spaces at all. Built-in storage, a proper work desk, and a window seat. Two minutes on foot to the metro and the 5th Block cafés.',
      rules: 'Single occupancy. No pets. One-month notice to vacate.'
    },
    {
      id: 'r3',
      title: 'Loft room with exposed brick',
      area: 'Shivajinagar',
      city: 'Bengaluru',
      price: 32000,
      deposit: 64000,
      type: 'Private room',
      beds: 1, baths: 1, sqft: 280,
      rating: 4.8, reviews: 47,
      available: 'Immediately',
      availableNow: true,
      posted: 1,
      images: ['images/room-04.jpg', 'images/room-03.jpg', 'images/room-08.jpg'],
      amenities: ['Attached bathroom', 'Furnished', 'Wi-Fi', 'Air conditioning', 'Parking'],
      host: { name: 'Aditi N.', since: 'Host since 2020', initials: 'AN' },
      blurb: 'Top-floor loft in a converted warehouse. Exposed brick, a 14-foot ceiling, and a skylight over the bed. Shares a large open kitchen and roof terrace with two others. Parking included.',
      rules: 'No smoking. Pets considered. Shared cleaning rota.'
    },
    {
      id: 'r4',
      title: 'Minimal room, maximum light',
      area: 'Jayanagar',
      city: 'Bengaluru',
      price: 15000,
      deposit: 30000,
      type: 'Private room',
      beds: 1, baths: 1, sqft: 165,
      rating: 4.6, reviews: 18,
      available: 'Immediately',
      availableNow: true,
      posted: 8,
      images: ['images/room-05.jpg', 'images/room-09.jpg', 'images/room-01.jpg'],
      amenities: ['Furnished', 'Wi-Fi', 'Balcony'],
      host: { name: 'Kiran P.', since: 'Host since 2022', initials: 'KP' },
      blurb: 'Simple, bright and genuinely affordable. A single bed, a wardrobe, a desk and a window that opens onto a quiet residential lane. Bathroom is shared with one other room. Best value in the neighbourhood.',
      rules: 'Vegetarian kitchen only. No overnight guests. Quiet household.'
    },
    {
      id: 'r5',
      title: 'Room in a shared flat with a big kitchen',
      area: 'HSR Layout',
      city: 'Bengaluru',
      price: 21000,
      deposit: 42000,
      type: 'Shared room',
      beds: 2, baths: 1, sqft: 240,
      rating: 4.5, reviews: 29,
      available: 'Immediately',
      availableNow: true,
      posted: 3,
      images: ['images/room-06.jpg', 'images/room-10.jpg', 'images/room-03.jpg'],
      amenities: ['Furnished', 'Wi-Fi', 'Air conditioning', 'Parking', 'Pet friendly'],
      host: { name: 'Dev M.', since: 'Host since 2018', initials: 'DM' },
      blurb: 'Twin room in a three-bedroom flat shared with two others. The kitchen is the heart of this place — full gas hob, big fridge, and enough counter space to actually cook. Two balconies, one with a washing machine.',
      rules: 'Split rent per person. Pets welcome. Shared groceries optional.'
    },
    {
      id: 'r6',
      title: 'Balcony room with a city view',
      area: 'Whitefield',
      city: 'Bengaluru',
      price: 27500,
      deposit: 55000,
      type: 'Private room',
      beds: 1, baths: 1, sqft: 230,
      rating: 4.9, reviews: 52,
      available: 'Immediately',
      availableNow: true,
      posted: 4,
      images: ['images/room-07.jpg', 'images/room-02.jpg', 'images/room-04.jpg'],
      amenities: ['Attached bathroom', 'Furnished', 'Wi-Fi', 'Air conditioning', 'Balcony', 'Parking'],
      host: { name: 'Sneha R.', since: 'Host since 2021', initials: 'SR' },
      blurb: 'Eleventh-floor room in a gated tower with a private balcony facing west — the sunsets are the whole reason to live here. Gym and pool in the building. Ten minutes to the tech park shuttle stop.',
      rules: 'No smoking. No pets. Society quiet hours 10pm–7am.'
    },
    {
      id: 'r7',
      title: 'Penthouse room, walk-in wardrobe',
      area: 'Sadashivanagar',
      city: 'Bengaluru',
      price: 48000,
      deposit: 96000,
      type: 'Private room',
      beds: 1, baths: 2, sqft: 420,
      rating: 5.0, reviews: 12,
      available: 'From 1 Dec',
      availableNow: false,
      posted: 6,
      images: ['images/room-08.jpg', 'images/room-01.jpg', 'images/room-07.jpg'],
      amenities: ['Attached bathroom', 'Furnished', 'Wi-Fi', 'Air conditioning', 'Balcony', 'Parking'],
      host: { name: 'Vikram T.', since: 'Host since 2017', initials: 'VT' },
      blurb: 'The top floor of a four-storey house, entirely yours: bedroom, dressing room, private bath and a terrace. Furnished by an interior designer. Housekeeping twice a week included in the rent.',
      rules: 'Single occupancy. No smoking. Housekeeping included.'
    },
    {
      id: 'r8',
      title: 'Desk-friendly room for remote work',
      area: 'Indiranagar',
      city: 'Bengaluru',
      price: 19500,
      deposit: 39000,
      type: 'Private room',
      beds: 1, baths: 1, sqft: 190,
      rating: 4.7, reviews: 26,
      available: 'Immediately',
      availableNow: true,
      posted: 7,
      images: ['images/room-09.jpg', 'images/room-05.jpg', 'images/room-06.jpg'],
      amenities: ['Furnished', 'Wi-Fi', 'Air conditioning'],
      host: { name: 'Farah A.', since: 'Host since 2022', initials: 'FA' },
      blurb: 'Set up for someone who works from home: a solid desk by the window, an ergonomic chair, and a wired ethernet point. The flat is quiet during the day because everyone else is out. Fibre broadband, 300 Mbps.',
      rules: 'No smoking. Quiet household. No pets.'
    },
    {
      id: 'r9',
      title: 'One-bedroom flat, own entrance',
      area: 'Koramangala',
      city: 'Bengaluru',
      price: 36000,
      deposit: 72000,
      type: '1BHK',
      beds: 1, baths: 1, sqft: 520,
      rating: 4.8, reviews: 31,
      available: 'From 15 Nov',
      availableNow: false,
      posted: 9,
      images: ['images/room-10.jpg', 'images/room-03.jpg', 'images/room-02.jpg'],
      amenities: ['Attached bathroom', 'Furnished', 'Wi-Fi', 'Air conditioning', 'Parking'],
      host: { name: 'Nikhil B.', since: 'Host since 2019', initials: 'NB' },
      blurb: 'A complete one-bedroom flat on the ground floor with its own street entrance — living room, kitchen, bedroom and bath. Semi-furnished: bed, sofa, fridge and washing machine stay. Ideal for a couple.',
      rules: 'Couples welcome. No smoking. Six-month minimum stay.'
    },
    {
      id: 'r10',
      title: 'Quiet room in a leafy lane',
      area: 'Jayanagar',
      city: 'Bengaluru',
      price: 16500,
      deposit: 33000,
      type: 'Shared room',
      beds: 2, baths: 1, sqft: 200,
      rating: 4.4, reviews: 15,
      available: 'Immediately',
      availableNow: true,
      posted: 11,
      images: ['images/room-03.jpg', 'images/room-04.jpg', 'images/room-08.jpg'],
      amenities: ['Furnished', 'Wi-Fi', 'Balcony', 'Pet friendly'],
      host: { name: 'Lakshmi V.', since: 'Host since 2020', initials: 'LV' },
      blurb: 'Twin room in a family home on a tree-lined street. Two single beds, a shared bathroom, and access to the front garden. Breakfast is included on weekdays if you like South Indian food.',
      rules: 'Vegetarian household. Pets welcome. No smoking.'
    }
  ];

  var AMENITY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4.5 12.5 5 5 10-11"/></svg>';

  /* ---------------- helpers ---------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function money(n) {
    return '₹' + n.toLocaleString('en-IN');
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------------- theme ---------------- */
  var THEME_KEY = 'rooma-theme';
  var mql = window.matchMedia('(prefers-color-scheme: dark)');

  function resolveTheme(pref) {
    if (pref === 'system') return mql.matches ? 'dark' : 'light';
    return pref === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(pref) {
    var resolved = resolveTheme(pref);
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.style.colorScheme = resolved;
    $$('.theme-btn').forEach(function (b) {
      var on = b.getAttribute('data-theme-set') === pref;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) { stored = null; }
    var pref = stored || 'system';
    applyTheme(pref);

    $$('.theme-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = btn.getAttribute('data-theme-set');
        try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
        applyTheme(next);
      });
    });

    var onSystemChange = function () {
      var cur = 'system';
      try { cur = localStorage.getItem(THEME_KEY) || 'system'; } catch (e) {}
      if (cur === 'system') applyTheme('system');
    };
    if (mql.addEventListener) mql.addEventListener('change', onSystemChange);
    else if (mql.addListener) mql.addListener(onSystemChange);
  }

  /* ---------------- state ---------------- */
  var state = {
    q: '',
    area: '',
    maxPrice: 60000,
    type: '',
    amenities: [],
    availableOnly: false,
    sort: 'recommended',
    favourites: {}
  };

  try {
    var savedFav = JSON.parse(localStorage.getItem('rooma-favs') || '{}');
    if (savedFav && typeof savedFav === 'object') state.favourites = savedFav;
  } catch (e) {}

  /* ---------------- filtering ---------------- */
  function matches(room) {
    if (state.q) {
      var hay = (room.title + ' ' + room.area + ' ' + room.city + ' ' + room.type + ' ' + room.amenities.join(' ')).toLowerCase();
      if (hay.indexOf(state.q.toLowerCase()) === -1) return false;
    }
    if (state.area && room.area !== state.area) return false;
    if (room.price > state.maxPrice) return false;
    if (state.type && room.type !== state.type) return false;
    if (state.availableOnly && !room.availableNow) return false;
    for (var i = 0; i < state.amenities.length; i++) {
      if (room.amenities.indexOf(state.amenities[i]) === -1) return false;
    }
    return true;
  }

  function sortRooms(list) {
    var out = list.slice();
    switch (state.sort) {
      case 'price-asc':  out.sort(function (a, b) { return a.price - b.price; }); break;
      case 'price-desc': out.sort(function (a, b) { return b.price - a.price; }); break;
      case 'newest':     out.sort(function (a, b) { return a.posted - b.posted; }); break;
      case 'rating':     out.sort(function (a, b) { return b.rating - a.rating; }); break;
      default:
        out.sort(function (a, b) {
          var sa = (a.availableNow ? 2 : 0) + a.rating;
          var sb = (b.availableNow ? 2 : 0) + b.rating;
          return sb - sa;
        });
    }
    return out;
  }

  /* ---------------- rendering ---------------- */
  function cardHTML(room, index) {
    var badge = '';
    if (room.posted <= 2) badge = '<span class="badge badge-new">New</span>';
    else if (!room.availableNow) badge = '<span class="badge badge-soon">' + esc(room.available) + '</span>';

    var isFav = !!state.favourites[room.id];

    var tags = [room.type, room.beds + (room.beds > 1 ? ' beds' : ' bed'), room.sqft + ' sq ft'];
    var tagHTML = tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('');

    return '' +
      '<article class="card" style="animation-delay:' + Math.min(index * 45, 400) + 'ms">' +
        '<div class="card-media">' +
          '<img src="' + esc(room.images[0]) + '" alt="' + esc(room.title) + ' in ' + esc(room.area) + '" loading="lazy" width="1400" height="1050">' +
          badge +
          '<button type="button" class="fav' + (isFav ? ' is-on' : '') + '" data-fav="' + room.id + '" aria-label="' + (isFav ? 'Remove from saved' : 'Save this room') + '" aria-pressed="' + (isFav ? 'true' : 'false') + '">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-7.5-9.6a4.4 4.4 0 0 1 7.5-3.1 4.4 4.4 0 0 1 7.5 3.1c0 5-7.5 9.6-7.5 9.6Z"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="card-body">' +
          '<div class="card-top">' +
            '<p class="card-price">' + money(room.price) + ' <small>/ month</small></p>' +
            '<span class="card-rating"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z"/></svg>' + room.rating.toFixed(1) + '</span>' +
          '</div>' +
          '<h3 class="card-title">' + esc(room.title) + '</h3>' +
          '<p class="card-loc">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>' +
            esc(room.area) + ', ' + esc(room.city) +
          '</p>' +
          '<div class="card-meta">' + tagHTML + '</div>' +
          '<div class="card-foot">' +
            '<span class="card-avail' + (room.availableNow ? '' : ' is-soon') + '"><span class="dot"></span>' + esc(room.available) + '</span>' +
            '<button type="button" class="card-view" data-open="' + room.id + '">View room' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function render() {
    var filtered = sortRooms(ROOMS.filter(matches));
    var grid = $('#grid');
    var empty = $('#empty');

    grid.innerHTML = filtered.map(cardHTML).join('');
    empty.hidden = filtered.length > 0;

    var summary = $('#resultSummary');
    if (filtered.length === ROOMS.length) {
      summary.textContent = 'Showing all ' + ROOMS.length + ' rooms across Bengaluru';
    } else if (filtered.length === 0) {
      summary.textContent = 'No rooms match your filters';
    } else {
      summary.textContent = 'Showing ' + filtered.length + ' of ' + ROOMS.length + ' rooms';
    }

    renderActiveFilters();
  }

  function renderActiveFilters() {
    var wrap = $('#activeFilters');
    var pills = [];

    if (state.q) pills.push({ label: '“' + state.q + '”', key: 'q' });
    if (state.area) pills.push({ label: state.area, key: 'area' });
    if (state.maxPrice < 60000) pills.push({ label: 'Up to ' + money(state.maxPrice), key: 'price' });
    if (state.type) pills.push({ label: state.type, key: 'type' });
    if (state.availableOnly) pills.push({ label: 'Available now', key: 'available' });
    state.amenities.forEach(function (a) {
      pills.push({ label: a, key: 'amenity', value: a });
    });

    if (!pills.length) {
      wrap.hidden = true;
      wrap.innerHTML = '';
      return;
    }

    wrap.hidden = false;
    wrap.innerHTML = pills.map(function (p) {
      return '<span class="pill">' + esc(p.label) +
        '<button type="button" data-clear="' + p.key + '"' + (p.value ? ' data-value="' + esc(p.value) + '"' : '') + ' aria-label="Remove filter ' + esc(p.label) + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>' +
        '</button></span>';
    }).join('');
  }

  /* ---------------- modal ---------------- */
  var lastFocused = null;

  function openRoom(id) {
    var room = ROOMS.filter(function (r) { return r.id === id; })[0];
    if (!room) return;

    lastFocused = document.activeElement;

    var gallery = '' +
      '<div class="modal-gallery">' +
        '<img class="g-main" src="' + esc(room.images[0]) + '" alt="' + esc(room.title) + ' — main photo">' +
        '<div class="g-side">' +
          '<img src="' + esc(room.images[1]) + '" alt="' + esc(room.title) + ' — second photo">' +
          '<img src="' + esc(room.images[2]) + '" alt="' + esc(room.title) + ' — third photo">' +
        '</div>' +
      '</div>';

    var amenities = room.amenities.map(function (a) {
      return '<li>' + AMENITY_ICON + esc(a) + '</li>';
    }).join('');

    var total = room.price + room.deposit;

    var body = '' +
      gallery +
      '<div class="modal-content">' +
        '<div class="modal-head">' +
          '<div>' +
            '<h2 id="modalTitle">' + esc(room.title) + '</h2>' +
            '<p class="modal-loc">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>' +
              esc(room.area) + ', ' + esc(room.city) + ' · ' + room.rating.toFixed(1) + ' from ' + room.reviews + ' reviews' +
            '</p>' +
          '</div>' +
          '<div class="modal-price">' +
            '<strong>' + money(room.price) + '</strong>' +
            '<span>per month</span>' +
          '</div>' +
        '</div>' +

        '<dl class="modal-facts">' +
          '<div class="fact"><dt>Room type</dt><dd>' + esc(room.type) + '</dd></div>' +
          '<div class="fact"><dt>Size</dt><dd>' + room.sqft + ' sq ft</dd></div>' +
          '<div class="fact"><dt>Beds / baths</dt><dd>' + room.beds + ' / ' + room.baths + '</dd></div>' +
          '<div class="fact"><dt>Available</dt><dd>' + esc(room.available) + '</dd></div>' +
        '</dl>' +

        '<div class="modal-section">' +
          '<h3>About this room</h3>' +
          '<p>' + esc(room.blurb) + '</p>' +
        '</div>' +

        '<div class="modal-section">' +
          '<h3>What\'s included</h3>' +
          '<ul class="amenity-list">' + amenities + '</ul>' +
        '</div>' +

        '<div class="modal-section">' +
          '<h3>Monthly cost</h3>' +
          '<table class="cost-table">' +
            '<tr><td>Rent</td><td>' + money(room.price) + '</td></tr>' +
            '<tr><td>Security deposit (refundable)</td><td>' + money(room.deposit) + '</td></tr>' +
            '<tr><td>Broker fee</td><td>None</td></tr>' +
            '<tr class="total"><td>Due at move-in</td><td>' + money(total) + '</td></tr>' +
          '</table>' +
        '</div>' +

        '<div class="modal-section">' +
          '<h3>House rules</h3>' +
          '<p>' + esc(room.rules) + '</p>' +
        '</div>' +

        '<div class="modal-section">' +
          '<h3>Your host</h3>' +
          '<div class="host-row">' +
            '<span class="host-avatar" aria-hidden="true">' + esc(room.host.initials) + '</span>' +
            '<span class="host-info"><strong>' + esc(room.host.name) + '</strong><span>' + esc(room.host.since) + ' · replies in ~4h</span></span>' +
          '</div>' +
        '</div>' +

        '<div class="modal-actions">' +
          '<button type="button" class="btn btn-primary" data-enquire="' + room.id + '">Enquire about this room</button>' +
          '<button type="button" class="btn btn-ghost" data-close-modal>Keep browsing</button>' +
        '</div>' +
      '</div>';

    $('#modalBody').innerHTML = body;

    var modal = $('#roomModal');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    var closeBtn = $('.modal-close', modal);
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    var modal = $('#roomModal');
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    $('#modalBody').innerHTML = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  /* ---------------- enquiry form ---------------- */
  function fillRoomSelect() {
    var sel = $('#enqRoom');
    if (!sel) return;
    ROOMS.forEach(function (r) {
      var opt = document.createElement('option');
      opt.value = r.id;
      opt.textContent = r.title + ' — ' + r.area + ' (' + money(r.price) + '/mo)';
      sel.appendChild(opt);
    });
  }

  function setError(name, message) {
    var el = $('[data-err="' + name + '"]');
    if (!el) return;
    el.textContent = message || '';
    el.classList.toggle('is-shown', !!message);
    var field = el.closest('.field');
    if (field) field.classList.toggle('has-error', !!message);
  }

  function validateForm(form) {
    var ok = true;
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var phone = form.phone.value.trim();
    var consent = form.consent.checked;

    if (name.length < 2) { setError('name', 'Please tell us your name.'); ok = false; }
    else setError('name', '');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setError('email', 'That email doesn\'t look right.'); ok = false; }
    else setError('email', '');

    var digits = phone.replace(/[^\d]/g, '');
    if (digits.length < 8) { setError('phone', 'Please add a number we can reach you on.'); ok = false; }
    else setError('phone', '');

    if (!consent) { setError('consent', 'Please tick the box so we can reply.'); ok = false; }
    else setError('consent', '');

    return ok;
  }

  function initForm() {
    var form = $('#enquiryForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(form)) {
        var firstErr = $('.err.is-shown', form);
        if (firstErr) {
          var input = firstErr.closest('.field').querySelector('input, select, textarea');
          if (input) input.focus();
        }
        return;
      }

      var btn = $('#enqSubmit');
      var original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending…';

      setTimeout(function () {
        var roomId = form.room.value;
        var room = ROOMS.filter(function (r) { return r.id === roomId; })[0];
        var firstName = form.name.value.trim().split(' ')[0];

        $('#successText').textContent = room
          ? 'Thanks ' + firstName + ' — your enquiry about “' + room.title + '” is with ' + room.host.name + '. Expect a reply within a day.'
          : 'Thanks ' + firstName + ' — we\'ve got your note and will come back with a few rooms that fit.';

        form.hidden = true;
        $('#formSuccess').hidden = false;
        btn.disabled = false;
        btn.textContent = original;
      }, 700);
    });

    // clear an error as soon as the user fixes the field
    ['name', 'email', 'phone', 'consent'].forEach(function (n) {
      var input = form[n];
      if (!input) return;
      var evt = input.type === 'checkbox' ? 'change' : 'input';
      input.addEventListener(evt, function () { setError(n, ''); });
    });

    $('#sendAnother').addEventListener('click', function () {
      form.reset();
      ['name', 'email', 'phone', 'consent'].forEach(function (n) { setError(n, ''); });
      $('#formSuccess').hidden = true;
      form.hidden = false;
      form.name.focus();
    });
  }

  /* ---------------- wiring ---------------- */
  function initFilters() {
    // populate area select
    var areas = [];
    ROOMS.forEach(function (r) { if (areas.indexOf(r.area) === -1) areas.push(r.area); });
    areas.sort();
    var areaSel = $('#filterArea');
    areas.forEach(function (a) {
      var opt = document.createElement('option');
      opt.value = a;
      opt.textContent = a;
      areaSel.appendChild(opt);
    });

    areaSel.addEventListener('change', function () {
      state.area = areaSel.value;
      render();
    });

    var price = $('#filterPrice');
    var priceOut = $('#priceOut');
    price.addEventListener('input', function () {
      state.maxPrice = parseInt(price.value, 10);
      priceOut.textContent = '₹0 – ' + money(state.maxPrice);
      render();
    });

    $('#typeChips').addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      $$('.chip', $('#typeChips')).forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      state.type = chip.getAttribute('data-type');
      render();
    });

    $('#amenityChecks').addEventListener('change', function () {
      state.amenities = $$('#amenityChecks input:checked').map(function (i) { return i.value; });
      render();
    });

    $('#filterAvailable').addEventListener('change', function (e) {
      state.availableOnly = e.target.checked;
      render();
    });

    $('#sortBy').addEventListener('change', function (e) {
      state.sort = e.target.value;
      render();
    });

    $('#resetFilters').addEventListener('click', resetAll);
    $('#emptyReset').addEventListener('click', resetAll);

    $('#activeFilters').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-clear]');
      if (!btn) return;
      var key = btn.getAttribute('data-clear');
      var value = btn.getAttribute('data-value');

      if (key === 'q') { state.q = ''; $('#heroLocation').value = ''; }
      if (key === 'area') { state.area = ''; areaSel.value = ''; }
      if (key === 'price') { state.maxPrice = 60000; price.value = 60000; priceOut.textContent = '₹0 – ₹60,000'; }
      if (key === 'type') {
        state.type = '';
        $$('.chip', $('#typeChips')).forEach(function (c) { c.classList.toggle('is-active', c.getAttribute('data-type') === ''); });
      }
      if (key === 'available') { state.availableOnly = false; $('#filterAvailable').checked = false; }
      if (key === 'amenity') {
        state.amenities = state.amenities.filter(function (a) { return a !== value; });
        $$('#amenityChecks input').forEach(function (i) { if (i.value === value) i.checked = false; });
      }
      render();
    });
  }

  function resetAll() {
    state.q = '';
    state.area = '';
    state.maxPrice = 60000;
    state.type = '';
    state.amenities = [];
    state.availableOnly = false;

    $('#heroLocation').value = '';
    $('#filterArea').value = '';
    $('#filterPrice').value = 60000;
    $('#priceOut').textContent = '₹0 – ₹60,000';
    $('#filterAvailable').checked = false;
    $$('#amenityChecks input').forEach(function (i) { i.checked = false; });
    $$('.chip', $('#typeChips')).forEach(function (c) {
      c.classList.toggle('is-active', c.getAttribute('data-type') === '');
    });
    render();
  }

  function initHeroSearch() {
    var form = $('#heroSearch');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      state.q = $('#heroLocation').value.trim();

      var budget = $('#heroBudget').value;
      if (budget) {
        var parts = budget.split('-');
        state.maxPrice = parseInt(parts[1], 10);
        $('#filterPrice').value = Math.min(state.maxPrice, 60000);
        $('#priceOut').textContent = '₹0 – ' + money(Math.min(state.maxPrice, 60000));
      }

      render();
      var target = $('#browse');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function initGridEvents() {
    var grid = $('#grid');

    grid.addEventListener('click', function (e) {
      var openBtn = e.target.closest('[data-open]');
      if (openBtn) { openRoom(openBtn.getAttribute('data-open')); return; }

      var favBtn = e.target.closest('[data-fav]');
      if (favBtn) {
        var id = favBtn.getAttribute('data-fav');
        var on = !state.favourites[id];
        if (on) state.favourites[id] = true;
        else delete state.favourites[id];
        favBtn.classList.toggle('is-on', on);
        favBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
        favBtn.setAttribute('aria-label', on ? 'Remove from saved' : 'Save this room');
        try { localStorage.setItem('rooma-favs', JSON.stringify(state.favourites)); } catch (err) {}
        return;
      }

      // clicking the photo also opens the room
      var media = e.target.closest('.card-media');
      if (media) {
        var card = media.closest('.card');
        var viewBtn = card && card.querySelector('[data-open]');
        if (viewBtn) openRoom(viewBtn.getAttribute('data-open'));
      }
    });
  }

  function initModalEvents() {
    var modal = $('#roomModal');

    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-close-modal]')) { closeModal(); return; }

      var enq = e.target.closest('[data-enquire]');
      if (enq) {
        var id = enq.getAttribute('data-enquire');
        closeModal();
        var sel = $('#enqRoom');
        if (sel) sel.value = id;
        var target = $('#enquire');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(function () {
          var nameInput = $('#enqName');
          if (nameInput) nameInput.focus({ preventScroll: true });
        }, 600);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  function initHeader() {
    var header = $('#siteHeader');
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------------- boot ---------------- */
  function boot() {
    initTheme();
    initHeader();
    initFilters();
    initHeroSearch();
    initGridEvents();
    initModalEvents();
    fillRoomSelect();
    initForm();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
