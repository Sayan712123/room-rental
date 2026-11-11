# Rooma — Room Rental Website

A room rental site: browse rooms for rent with search and filters, open a room to see the full photo gallery, price breakdown and house rules, then send an enquiry.

Built with plain HTML, CSS and JavaScript — no build step, no dependencies. Open `index.html` in a browser and it works.

## Features

**Listings**
- 10 room listings with real photos, price, location, room type, size and rating
- Responsive card grid (1 / 2 / 3+ columns depending on viewport)
- "New" and availability badges, save-to-favourites (persisted in `localStorage`)

**Search & filter**
- Hero search bar: free-text location, move-in date, budget bracket
- Sidebar filters: neighbourhood, max monthly rent (range slider), room type, amenities (7 options), available-immediately toggle
- Removable filter pills showing every active filter
- Sort by recommended / price ascending / price descending / newest / top rated
- Live result count and an empty state with a one-click reset

**Room detail**
- Modal with a 3-photo gallery, title, location, rating and monthly price
- Facts row: room type, size, beds/baths, availability
- Description, amenity list, monthly cost table (rent + refundable deposit + no broker fee), house rules, host card
- "Enquire about this room" pre-selects that room in the enquiry form

**Enquiry form**
- Name, email, phone, preferred move-in date, room of interest, message, consent checkbox
- Inline per-field validation with accessible error messages
- Success state that names the host and the room

**Design**
- Light / dark / system theme toggle, persisted and following OS changes
- Warm cream + terracotta palette, Fraunces display type over Manrope
- Responsive down to 360px, keyboard accessible, `prefers-reduced-motion` respected

## Files

```
index.html    markup and page structure
styles.css    design system, layout, responsive rules
app.js        listing data, filtering, sorting, modal, form validation, theme
images/       10 room photos
```

## Running locally

```bash
# any static server works
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

Listings, prices, hosts and contact details are illustrative demo content. The enquiry form validates and confirms in the browser — it does not post to a backend. To make it live, point the submit handler in `app.js` at your own endpoint.
