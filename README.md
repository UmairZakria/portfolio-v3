# 🚀 Umair Zakria - Personal Portfolio v2

A stunning, modern personal portfolio built with React.js, featuring advanced animations, GSAP/Framer Motion transitions, and a vibrant UI. This version showcases my current skill set with a focus on motion design, interactivity, and responsive layouts.

**🌐 Live Demo:** [umairzakria.vercel.app](https://umairzakria.vercel.app/)

![Hero Section](/hero.png)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)

## 🎯 About

This is my latest personal portfolio showcasing my skills in modern web development, motion design, and interactive UI/UX. Built with React and enhanced with smooth animations using GSAP and Framer Motion, it provides an engaging user experience with interactive elements and responsive design.

### Key Features:
- **Advanced Animations** - GSAP and Framer Motion powered transitions
- **Motion Design** - Focus on smooth, engaging user interactions
- **Interactive Elements** - Mouse trails, scroll effects, and hover animations
- **Responsive Layouts** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, professional design with attention to detail
- **Portfolio Showcase** - Dynamic project gallery with filtering
- **Contact Integration** - Easy communication channels

## ✨ Features

- 🎨 **Smooth Animations** - GSAP and Framer Motion powered animations
- 📱 **Responsive Design** - Optimized for all devices
- 🎯 **Interactive Elements** - Mouse trails, scroll effects, and hover animations
- 🚀 **Performance Optimized** - Built with Vite for fast development and production
- 🎭 **Modern UI/UX** - Clean, professional design with attention to detail
- 📊 **Portfolio Showcase** - Dynamic project gallery with filtering
- 📞 **Contact Integration** - Easy communication channels

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: 
  - GSAP (GreenSock)
  - Framer Motion
  - SplitType
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis
- **3D Graphics**: Three.js
- **Development**: ESLint, TypeScript support

## 🚀 Installation

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/UmairZakria/my-portfolio-v2.git
   cd my-portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📖 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx       # Hero section with animations
│   ├── Service.jsx    # Services showcase
│   ├── About.jsx      # Portfolio/About section
│   ├── Navbar.jsx     # Navigation component
│   ├── Footer.jsx     # Footer component
│   └── ...            # Other components
├── assets/            # Static assets
├── App.jsx           # Main application component
└── main.jsx          # Application entry point

public/               # Public assets
├── logoL.png        # Main logo
├── bg.jpg           # Background images
├── custom.png       # Custom graphics
└── ...              # Other assets
```



## 🎨 Key Components

### Hero Section
- Animated text reveals
- Smooth scroll effects
- Interactive mouse trails
- Professional branding

### Services Showcase
- Hover effects with image previews
- Smooth transitions
- Responsive grid layout
- Service descriptions

### Portfolio Gallery
- Dynamic filtering by category
- Image distortion effects
- Smooth animations
- Project showcases

### Contact Section
- Professional contact form
- Social media integration
- Call-to-action buttons

## 🔧 Customization

### Adding New Projects
Edit the `data` array in `src/components/About.jsx`:

```javascript
const data = [
  { 
    name: 'Project Name', 
    category: "Category", 
    img: "path/to/image.png" 
  }
];
```

### Modifying Animations
- GSAP animations are in individual components
- Framer Motion variants can be adjusted
- Scroll triggers can be modified in component files

### Styling
- Uses Tailwind CSS for styling
- Custom fonts in `public/fonts/`
- Color scheme can be modified in Tailwind config

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Performance

- Optimized with Vite for fast builds
- Lazy loading for images
- Efficient animation handling
- Minimal bundle size

## 📞 Contact

- **Portfolio:** [umairzakria.vercel.app](https://umairzakria.vercel.app/)
- **GitHub:** [@UmairZakria](https://github.com/UmairZakria)
- **Repository:** [my-portfolio-v2](https://github.com/UmairZakria/my-portfolio-v2)

---

**Built with ❤️ using React, Vite, and modern web technologies**
