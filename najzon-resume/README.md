# Najzon Weaver - Interactive 3D Resume Website

A modern, interactive resume website built with React, Three.js, and cutting-edge web technologies. Features 3D animations, glassmorphism design, and engaging user interactions.

## 🌟 Features

### Interactive 3D Elements
- **Particle Background**: Animated 3D particles using React Three Fiber
- **Bouncing Job Titles**: Hover to see job titles bounce with 3D animations
- **Balloon Modal Pop-ups**: Click job titles to reveal detailed information in 3D modal balloons
- **3D Skill Pills**: Animated skill tags with rotation and glow effects

### Modern UI/UX
- **Glassmorphism Design**: Beautiful glass-like interface elements
- **Dark/Light Mode**: Smooth toggle between themes with system preference detection
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### Smart Features
- **Device Detection**: Phone links work intelligently on mobile vs desktop
- **Functional Contact**: Email and phone links that actually work
- **Easter Egg**: Hidden cloud security roadmap feature
- **Scroll Animations**: Elements animate as they come into view
- **JSON Data Source**: Resume data is loaded from `resume.json` for easy updates

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Icons**: Heroicons
- **Build Tool**: Create React App
- **Data**: JSON-based resume data structure

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd najzon-resume

# Install dependencies
npm install

# Start development server
npm start
```

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Updating Resume Data
Edit `src/data/resume.json` to update:
- Personal information
- Work experience
- Skills and categories
- Cloud security roadmap
- Contact details

The JSON structure includes:
- `name`, `title`, `location`, `email`, `phone`, `summary`
- `experience[]` - Array of job experiences with descriptions and skills
- `skills[]` - Array of skills with categories and levels
- `cloudRoadmap[]` - Learning pathway for cloud security
- Additional fields for certifications, education, projects, languages, and interests

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization
- Component-specific styles are in individual component files

### Colors & Themes
The color scheme uses:
- **Blue**: Primary brand color
- **Purple**: Accent color
- **Green**: Success/positive actions
- **Orange**: Productivity skills
- **Teal**: Operations skills

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## 🎯 Performance Optimizations

- Lazy loading of components
- Optimized particle count for mobile devices
- Efficient animations with `transform-gpu`
- Image optimization
- Minimal bundle size
- JSON data loading for fast updates

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎨 Design Philosophy

This resume website follows modern web design principles:

1. **User-Centered**: Every interaction serves a purpose
2. **Accessible**: Works for users with different abilities
3. **Performance-First**: Fast loading and smooth animations
4. **Mobile-First**: Designed for mobile, enhanced for desktop
5. **Progressive Enhancement**: Core functionality works without JavaScript
6. **Data-Driven**: Easy content updates through JSON structure

## 🚀 Future Enhancements

Potential features to add:
- [ ] PDF download functionality
- [ ] Blog/Portfolio section
- [ ] Project showcase with live demos
- [ ] Contact form with backend integration
- [ ] Analytics integration
- [ ] SEO optimization with React Helmet
- [ ] PWA capabilities
- [ ] Multi-language support
- [ ] CMS integration for easier content management

## 🤝 Contributing

This is a personal resume website, but feedback and suggestions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Share design ideas

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Najzon Weaver**
- Email: weaverj56@gmail.com
- Phone: +1 313 690 1673
- Location: Mount Clemens, MI

---

*Built with 💙 for the cloud security community*
