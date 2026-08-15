# Anime Landing Page

A responsive, modern landing page template for showcasing popular anime series, trailers, and character profiles. This project is built with plain HTML, CSS, and JavaScript and is intended as a portfolio/demonstration site or starting point for themed landing pages.

## Project Description

Anime Landing Page is a single-page, visually rich website that highlights featured anime titles using a dynamic slider, embedded trailer modals, and interactive character showcases. It's optimized for performance and responsiveness across desktop, tablet, and mobile devices, using CSS techniques such as glassmorphism, blurred backgrounds, and smooth transitions to create a cinematic feel.

## Features

- Dynamic Anime Slider: A carousel showcasing featured anime with title, brief description, and navigation controls.
- Video Trailer Popups: Watch trailers inline with modal/video overlays so users stay on the page while previewing content.
- Character Showcases: Dedicated panels for characters including thumbnails, traits, and short bios.
- Responsive Design: Layouts and breakpoints for multiple screen sizes (desktop, tablet, mobile).
- Modern UI/UX: Uses glassmorphism, blurred background images, and CSS transitions for polished visual presentation.

## Technologies Used

- HTML5 for structure and media embedding.
- CSS3 for styling, animations, layout (flexbox/grid), and responsive rules.
- Vanilla JavaScript for slider behavior, modal controls, and DOM interactions.

## File Structure

- `index.html` - Main page markup with navigation, search bar, and the anime showcase sections.
- `style.css`, `style2.css` - Primary stylesheets for layout, themes, and responsive behavior.
- `script.js` - JavaScript handling sliders, trailer popups, character navigation, and event listeners.
- `img/`, `bg-img/`, `video/`, `chr-bg/`, `char-img/` - Media folders expected to contain images and videos referenced by the site.

## Demo / Preview

Open `index.html` in a web browser to see the landing page locally. If you host the site (GitHub Pages or other), the index page will display with the included assets.

## How to Run Locally

1. Clone this repository:

```bash
git clone https://github.com/razesoni/Anime-Landing-Page.git
```

2. Change into the project folder:

```bash
cd Anime-Landing-Page
```

3. Open the `index.html` file in your browser (double-click or use a local server):

```bash
# using Python 3's simple HTTP server (optional)
python -m http.server 8000
# then visit http://localhost:8000 in your browser
```

Notes:
- Ensure the media folders (`img`, `video`, etc.) are present and populated so images and trailers load correctly.

## Customization

- Replace images/videos inside the media folders to update content shown in the slider and character panels.
- Adjust `style.css` / `style2.css` to tweak colors, spacing, or responsive breakpoints.
- Edit `script.js` to add/remove anime entries and customize slider behavior.

## Contributing

Contributions are welcome. If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-change`.
3. Commit your changes and push to your fork.
4. Open a pull request describing your changes.

## License

This project is provided under the MIT License. See the LICENSE file for details.

## Contact

If you'd like to reach out, open an issue or contact the repository owner (`razesoni`) via GitHub.
