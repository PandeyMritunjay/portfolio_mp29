# AI/ML Engineer Portfolio

An advanced, animated portfolio website showcasing AI/ML engineering skills, projects, and experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Advanced Animations**: Smooth transitions, particle effects, and interactive elements
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **High Performance**: Built with Next.js for optimal loading and SEO
- 🎯 **Modern Design**: Glass morphism, gradient effects, and dark theme
- 🔄 **Smooth Scrolling**: Seamless navigation between sections
- ✨ **Interactive Elements**: Hover effects, 3D transforms, and animated progress bars

## Sections

1. **Hero**: Animated introduction with particle background
2. **About**: Personal information and expertise areas
3. **Skills**: Technical skills with animated progress indicators
4. **Projects**: Showcase of AI/ML projects with interactive cards
5. **Experience**: Work history and education timeline
6. **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update social media links
   - Modify the main heading and description

2. **About Section** (`components/About.tsx`):
   - Edit the personal description
   - Update statistics and expertise areas

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skill categories
   - Adjust skill levels (0-100)

4. **Projects Section** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Update GitHub and demo links

5. **Experience Section** (`components/Experience.tsx`):
   - Add your work experience
   - Update education details

6. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Connect form to your email service (e.g., Formspree, SendGrid)

### Styling

- Colors: Edit `tailwind.config.js` to customize the color scheme
- Animations: Modify Framer Motion variants in individual components
- Fonts: Update `app/layout.tsx` to use different Google Fonts

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Intersection Observer**: Scroll animations

## License

MIT License - feel free to use this portfolio for your own projects!

