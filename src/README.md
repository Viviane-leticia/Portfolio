# UX & Frontend Designer Portfolio

An interactive portfolio showcasing experience in UX design, frontend development, and graphic design.

## Features

- 🎨 Modern, animated interface using Motion (Framer Motion)
- 📱 Fully responsive design
- 🎯 Smooth scroll navigation
- ✨ Interactive hover effects and transitions
- 🎓 Comprehensive education and experience showcase
- 💼 Skills and expertise breakdown

## Technologies Used

- React
- TypeScript
- Tailwind CSS v4
- Motion/React (Framer Motion)
- Lucide React (icons)
- Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project can be easily deployed to:

- **GitHub Pages**: Use the `gh-pages` package
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder or connect via GitHub
- **Cloudflare Pages**: Connect your GitHub repository

### Quick Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## Customization

### Update Your Information

- Edit the content in each component file in `/components`
- Update contact links in `/components/Contact.tsx`
- Modify colors and styling in the component files

### Add Your Projects

Create a new `Projects.tsx` component to showcase your work portfolio with images and descriptions.

## Project Structure

```
/
├── App.tsx                 # Main application component
├── components/
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # About section
│   ├── Education.tsx      # Education section
│   ├── Experience.tsx     # Work experience section
│   ├── Skills.tsx         # Skills showcase
│   └── Contact.tsx        # Contact section
└── README.md
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using React and Tailwind CSS
