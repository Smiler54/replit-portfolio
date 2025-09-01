# Victor Lin - Portfolio Website

A modern, responsive portfolio website showcasing expertise in Full Stack Development, AI, and Blockchain technologies.

## Overview

This portfolio website features a clean, professional design with smooth animations and interactive elements. Built with modern web technologies, it showcases projects, skills, and contact information in an engaging way.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Navigation**: Fixed header with smooth scrolling between sections
- **Interactive Skills Chart**: Dynamic doughnut chart displaying technical proficiency
- **Project Showcase**: Grid layout featuring project screenshots and descriptions
- **Contact Form**: Functional contact form with validation
- **Modern UI**: Clean design with gradient text effects and hover animations
- **Social Media Integration**: Links to professional profiles

## Sections

### 1. Hero Section
- Professional introduction
- Call-to-action buttons
- Gradient text effects

### 2. About Section
- Professional background
- 8 years of experience highlight
- Key statistics and achievements

### 3. Projects Section
- Featured project gallery
- Project screenshots and descriptions
- Technology stack tags
- Live demo and code repository links

### 4. Skills Section
- Interactive doughnut chart showing technical proficiency
- Progress bars for core technologies
- Additional skills grid with icons
- Focus areas: Full Stack, AI, Blockchain

### 5. Contact Section
- Contact information display
- Functional contact form
- Social media links (LinkedIn, GitHub, X, Portfolio)

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for styling
- **Radix UI** components with shadcn/ui
- **Lucide React** for icons
- **Chart.js** for interactive charts
- **Wouter** for routing

### Backend
- **Node.js** with Express
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations
- **PostgreSQL** database

### Development Tools
- **Hot reload** development server
- **ESLint** and **Prettier** for code quality
- **PostCSS** for CSS processing

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
└── README.md
```

## Key Components

- **Navigation**: Fixed header with smooth scroll navigation
- **HeroSection**: Landing area with introduction and CTAs
- **AboutSection**: Professional background and statistics
- **ProjectsSection**: Project showcase with filtering capabilities
- **SkillsSection**: Interactive charts and skill visualization
- **ContactSection**: Contact form and social media links
- **Footer**: Copyright and additional information

## Customization

### Personal Information
Update personal details in the component files:
- Name and title in `HeroSection.tsx`
- Bio and experience in `AboutSection.tsx`
- Contact information in `ContactSection.tsx`

### Skills and Technologies
Modify the skills data in `SkillsSection.tsx`:
- Chart data for technical proficiency
- Progress bars for core skills
- Additional skills grid

### Projects
Add or modify projects in `ProjectsSection.tsx`:
- Project descriptions and images
- Technology stacks
- Demo and repository links

### Styling
Customize the design by modifying:
- Color scheme in `index.css`
- Component styles in individual component files
- Tailwind configuration in `tailwind.config.ts`

## Deployment

The website can be deployed on various platforms:

1. **Replit Deployments** (recommended)
2. **Vercel**
3. **Netlify**
4. **AWS Amplify**

For production deployment, ensure environment variables are properly configured.

## Performance Features

- **Optimized Images**: Responsive images with proper sizing
- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Components loaded as needed
- **Minified Assets**: Production builds are optimized
- **Modern JavaScript**: ES6+ features for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio website. For suggestions or improvements, please reach out through the contact form or social media links.

## License

© 2024 Victor Lin. All rights reserved.

## Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]
- **Website**: [Your Website URL]

---

Built with passion and modern web technologies to showcase professional expertise in Full Stack Development, AI, and Blockchain.