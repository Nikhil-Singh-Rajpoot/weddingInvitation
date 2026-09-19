# 💍 Dipjyoti & Bornali — Wedding Invitation Website

A modern, cinematic and responsive wedding invitation website built using **HTML, CSS and JavaScript**.

The website uses a dark luxury/editorial design with a cinematic wedding video, elegant typography, animations, countdown and photo gallery.

---

## ✨ Features

* 🎬 Cinematic landing page with wedding video
* 🌑 Dark luxury/editorial design
* 💌 Formal wedding invitation
* ❤️ Couple story/message section
* 📍 Wedding venue and Google Maps
* ⏳ Live wedding countdown
* 🖼️ Responsive wedding gallery
* 🎵 Background wedding music
* 🖱️ Custom cursor on desktop
* ✨ Hover animations
* 📱 Fully responsive for mobile/tablet/desktop
* 🎞️ Scroll reveal animations
* 📱 Mobile navigation menu
* ⚡ No framework required
* 🚀 Can be hosted on GitHub Pages, Netlify, Vercel, etc.

---

# 📁 Project Structure
wedding-site/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── wedding-hero.mp4
│   └── wedding-music.mp3
│
└── README.md

# 🚀 How to Run

You don't need Node.js, React or any other framework.

### Option 1 — Directly open

Open:
index.html
in your browser.

### Option 2 — VS Code

Install the **Live Server** extension.

Then:
Right Click → Open with Live Server

# 📝 How to Customize the Website

Most changes can be made directly inside:

index.html
The styling is inside:
css/style.css

The functionality is inside:
js/script.js
---

# 1. 💑 Change Couple Names

Open:
index.html
Search for:
Nikhil
and:
Tanvi
You will find them in multiple places.
For example:
<h1>
    Nikhil
    <span>&</span>
    Tanvi
</h1>
Change to:

<h1>
    Rahul
    <span>&</span>
    Priya
</h1>
Also change the names in:
* Hero
* Formal Invitation
* Couple Message
* Footer
---

# 2. 📅 Change Wedding Date

There are two places that should be changed.

## HTML

Search:
24
and:
DECEMBER
and:
2026
Example:

<div class="hero-date">
    <span>24</span>
    <div>
        <small>DECEMBER</small>
        <strong>2026</strong>
    </div>
</div>

Change according to your wedding date.
---

# 3. ⏳ Change Countdown Date

This is very important.
Open:
js/script.js
Find:
```javascript
const weddingDate = new Date(
    "December 24, 2026 19:00:00"
).getTime();
```
Change it.
Example:

```javascript
const weddingDate = new Date(
    "January 15, 2027 18:30:00"
).getTime();
```

### Format
Use:

Month DD, YYYY HH:MM:SS
Example:
December 24, 2026 19:00:00
---

# 4. 📍 Change Venue

Open:
index.html
Find:
<h3>
    Ghazipur
</h3>

<p class="venue-location">
    Uttar Pradesh, India
</p>
Change it to your venue.
Example:
<h3>
    The Grand Palace
</h3>

<p class="venue-location">
    Lucknow, Uttar Pradesh, India
</p>
---

# 5. 🏛️ Change Wedding Date and Time in Venue

Find:

<div class="venue-info">
    <div>
        <span>DATE</span>
        <strong>24 December 2026</strong>
    </div>
    <div>
        <span>TIME</span>
        <strong>7:00 PM onwards</strong>
    </div>
</div>
```
Change:
<strong>24 December 2026</strong>
```
and:
<strong>7:00 PM onwards</strong>
```
Example:
<strong>15 January 2027</strong>
<strong>6:30 PM onwards</strong>
---

# 6. 🗺️ Change Google Maps Location
Find:

<a
    href="https://www.google.com/maps/search/?api=1&query=Ghazipur%2C%20Uttar%20Pradesh"
    target="_blank"
    class="map-btn">

Replace the `href` with your location.

### Easy method

Go to Google Maps.

Search your exact venue.

Copy the Google Maps URL.
Then replace:
href="YOUR_GOOGLE_MAPS_URL"
Example:
<a
    href="https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Lucknow"
    target="_blank"
    class="map-btn">
---

# 7. 🖼️ Change Gallery Photos

Gallery images are inside:

```text
index.html
```
Search:
```html
gallery-item
```
You will find sections like:
```html
<div class="gallery-item reveal">

    <img
        src="IMAGE_URL"
        alt="Wedding moment">

    <div class="gallery-overlay">
        <span>01</span>
    </div>

</div>
```
Simply replace:
```html
src="IMAGE_URL"
```
with your image URL.
---

# 8. 📷 Use Your Own Gallery Images
You don't have to use online images.
Create:
```text
assets/images/
```
Then put your photos there:

```text
assets/
│
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   └── photo4.jpg
│
├── wedding-hero.mp4
└── wedding-music.mp3
Then use:
```html
<img
    src="assets/images/photo1.jpg"
    alt="Wedding moment">
```

Another:

```html
<img
    src="assets/images/photo2.jpg"
    alt="Wedding ceremony">
```

### Recommended image formats

```text
.jpg
.jpeg
.png
.webp
```

For photographs, `.jpg` or `.webp` is recommended.

---

# 9. ❤️ Change "Our Story" Message

Find:

```html
<div class="couple-content">
```

Inside it you will see:

```html
<h2>
    We found
    <em>home</em>
    in each other.
</h2>
```

Change the heading.

Example:

```html
<h2>
    Two hearts.
    <em>One journey.</em>
</h2>
```

Then change the paragraphs:

```html
<p>
    Somewhere between ordinary days and
    unexpected moments, our paths crossed.
</p>

<p>
    What started as two separate stories slowly
    became one — filled with laughter, memories,
    dreams and countless little moments that
    brought us closer.
</p>
```

Replace them with your own story.

Example:

```html
<p>
    Our story began with a simple meeting,
    but slowly became something much more beautiful.
</p>

<p>
    Through every smile, every conversation and
    every unforgettable moment, we discovered
    something special in each other.
</p>

<p>
    Today, we are excited to begin our next
    chapter together.
</p>
```

---

# 10. 💌 Change Formal Invitation

Find:

```html
<section class="invitation section-dark" id="invitation">
```

The main invitation text is:

```html
<h2>
    Together with<br>
    our families
</h2>
```

Change it if required.

Example:

```html
<h2>
    With joyful hearts,<br>
    we invite you
</h2>
```

Then change:

```html
<p class="invitation-text">
    We invite you to join us as we celebrate
    the beginning of a new chapter in our lives.
</p>
```

You can write your own formal invitation.

---

# 11. 🎬 Change Landing Page Video

The hero video is:

```text
assets/wedding-hero.mp4
```

The HTML is:

```html
<video
    autoplay
    muted
    loop
    playsinline
    preload="auto">

    <source
        src="assets/wedding-hero.mp4"
        type="video/mp4">

</video>
```

To change the video:

### Step 1

Delete or replace:

```text
assets/wedding-hero.mp4
```

### Step 2

Put your new video inside:

```text
assets/
```

Example:

```text
assets/
└── wedding-video.mp4
```

### Step 3

Change:

```html
src="assets/wedding-hero.mp4"
```

to:

```html
src="assets/wedding-video.mp4"
```

---

# 12. 🖼️ Change Hero Video Poster

The poster is displayed while the video is loading.

Find:

```html
poster="https://images.unsplash.com/..."
```

Replace it with your own image:

```html
poster="assets/images/hero-poster.jpg"
```

Recommended:

```text
1920 × 1080
```

---

# 13. 🎵 Change Background Music

Put your music file here:

```text
assets/wedding-music.mp3
```

The HTML already contains:

```html
<audio
    id="weddingMusic"
    loop
    preload="auto">

    <source
        src="assets/wedding-music.mp3"
        type="audio/mpeg">

</audio>
```

If your file has a different name:

```text
romantic-song.mp3
```

change it to:

```html
<source
    src="assets/romantic-song.mp3"
    type="audio/mpeg">
```

### Important

Modern browsers can block automatic audio playback with sound.

The website therefore attempts autoplay and also starts the music after the visitor interacts with the page.

---

# 14. 🎨 Change Main Website Colors

Open:

```text
css/style.css
```

At the beginning you will find:

```css
:root {

    --black: #0b0b0b;

    --cream: #eeeae2;

    --gold: #b69a68;

}
```

These are the main colors.

---

## Current Theme

```text
Black
Cream
Muted Gold
White
```

This creates the luxury wedding look.

---

## Change Gold Color

Current:

```css
--gold: #b69a68;
```

Example:

```css
--gold: #c6a15b;
```

or:

```css
--gold: #d4af37;
```

---

## Change Background

Current:

```css
--black: #0b0b0b;
```

For a slightly lighter dark theme:

```css
--black: #121212;
```

For almost-black:

```css
--black: #050505;
```

---

# 15. 🔤 Change Fonts

The fonts are loaded inside:

```html
<head>
```

Current fonts:

```text
Cormorant Garamond
DM Sans
Italianno
```

They are used for:

### Cormorant Garamond

Main headings:

```css
--serif: "Cormorant Garamond", serif;
```

### DM Sans

Normal text:

```css
--sans: "DM Sans", sans-serif;
```

### Italianno

Decorative wedding text:

```css
--script: "Italianno", cursive;
```

If you change fonts, also update the Google Fonts import.

---

# 16. 🖱️ Change Hover Effects

The website has hover effects for:

* Navigation links
* Enter Our Story
* Map button
* Gallery images
* Couple image
* Venue image
* Music button
* Mobile menu

For example:

```css
.map-btn:hover {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--black);
}
```

This controls the Maps button hover.

---

# 17. 🖼️ Gallery Hover Effect

Find:

```css
.gallery-item:hover img {
    transform: scale(1.06);
    filter: brightness(.72);
}
```

The image zooms slightly when the mouse moves over it.

To increase zoom:

```css
transform: scale(1.10);
```

To reduce zoom:

```css
transform: scale(1.03);
```

---

# 18. 📱 Mobile Design

The website automatically changes its layout for:

```text
Desktop
Tablet
Mobile
```

Important breakpoints are:

```css
@media (max-width: 800px)
```

and:

```css
@media (max-width: 550px)
```

If you want to modify the mobile layout, make changes inside these sections.

---

# 19. 🔢 Change Section Numbers

The website currently has:

```text
01 / 06
02 / 06
03 / 06
04 / 06
05 / 06
06 / 06
```

They represent:

```text
01 → Landing
02 → Formal Invitation
03 → Couple Message
04 → Venue
05 → Countdown
06 → Gallery
```

You can change them directly in `index.html`.

---

# 20. ➕ Adding More Gallery Images

To add another image, copy:

```html
<div class="gallery-item reveal">

    <img
        src="YOUR_IMAGE_URL"
        alt="Wedding moment">

    <div class="gallery-overlay">
        <span>05</span>
    </div>

</div>
```

Change:

```text
YOUR_IMAGE_URL
```

and:

```text
05
```

---

# 21. ❌ Removing a Gallery Image

Simply remove the complete block:

```html
<div class="gallery-item reveal">

    ...

</div>
```

---

# 22. ✏️ Change Footer

Find:

```html
<footer class="footer">

    <div class="footer-names">
        Nikhil <span>&</span> Tanvi
    </div>

    <p>
        Made with love · 2026
    </p>

</footer>
```

Change it to your preferred text.

Example:

```html
<footer class="footer">

    <div class="footer-names">
        Rahul <span>&</span> Priya
    </div>

    <p>
        Forever begins here · 2027
    </p>

</footer>
```

---

# 23. 🔧 Main Files — What They Control

| File                       | Purpose                                              |
| -------------------------- | ---------------------------------------------------- |
| `index.html`               | Text, sections, images, video, links                 |
| `css/style.css`            | Colors, layout, fonts, animations, responsive design |
| `js/script.js`             | Countdown, menu, music, animations, cursor           |
| `assets/wedding-hero.mp4`  | Hero video                                           |
| `assets/wedding-music.mp3` | Background music                                     |
| `assets/images/`           | Your local photos                                    |

---

# 24. ⭐ Quick Customization Checklist

Before publishing your wedding website, change these:

### Couple

* [ ] Bride name
* [ ] Groom name
* [ ] Couple story

### Wedding

* [ ] Wedding date
* [ ] Wedding time
* [ ] Countdown date

### Venue

* [ ] Venue name
* [ ] City
* [ ] State
* [ ] Country
* [ ] Google Maps link
* [ ] Venue image

### Gallery

* [ ] Gallery image 01
* [ ] Gallery image 02
* [ ] Gallery image 03
* [ ] Gallery image 04

### Media

* [ ] Hero video
* [ ] Hero poster
* [ ] Background music

### Design

* [ ] Gold color
* [ ] Background color
* [ ] Fonts

---

# 25. 🌐 Deploy Website

You can host this website using:

```text
GitHub Pages
Netlify
Vercel
Any normal web hosting
```

No backend server is required.

---

# 26. 🚀 GitHub Pages

Create a GitHub repository.

Example:

```text
nikhil-tanvi-wedding
```

Upload:

```text
index.html
css/
js/
assets/
README.md
```

Then:

```text
GitHub Repository
        ↓
Settings
        ↓
Pages
        ↓
Deploy from branch
        ↓
main
        ↓
Save
```

GitHub will provide your website URL.

---

# 27. ⚠️ Common Problems

## Video not playing

Check:

```text
assets/wedding-hero.mp4
```

Make sure the filename exactly matches:

```html
src="assets/wedding-hero.mp4"
```

Remember that filenames are case-sensitive on many hosting servers.

---

## Music not playing

Check:

```text
assets/wedding-music.mp3
```

Also remember that browsers may prevent autoplay with sound until the visitor interacts with the website.

---

## Image not showing

Check:

```html
src="..."
```

If using a local image:

```html
src="assets/images/photo1.jpg"
```

Make sure the file actually exists.

---

## CSS not working

Check:

```html
<link rel="stylesheet" href="css/style.css">
```

Your folder should be:

```text
wedding-site/
│
├── index.html
│
└── css/
    └── style.css
```

---

## JavaScript not working

Check:

```html
<script src="js/script.js"></script>
```

Your folder should be:

```text
wedding-site/
│
├── index.html
│
└── js/
    └── script.js
```

---

# ❤️ Final Customization Flow

If you want to create your own version, follow this order:

```text
1. Change Names
       ↓
2. Change Wedding Date
       ↓
3. Change Wedding Time
       ↓
4. Change Venue
       ↓
5. Change Google Maps
       ↓
6. Write Your Story
       ↓
7. Replace Gallery Images
       ↓
8. Replace Hero Video
       ↓
9. Add Music
       ↓
10. Check Mobile View
       ↓
11. Test Every Button
       ↓
12. Deploy
```

---

## 🎉 That's it!

The website is intentionally built using plain:

```text
HTML
CSS
JavaScript
```

so that you can easily customize it without learning React or another framework.

The most important file for normal customization is:

```text
index.html
```

For visual/design changes use:

```text
css/style.css
```

For functionality changes use:

```text
js/script.js
```
