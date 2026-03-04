

## Overview

NEO-OS reimagines the traditional portfolio website by creating a fully functional desktop-like experience in your browser. Users can interact with multiple applications simultaneously through draggable, resizable windows—just like a real OS. The clean typography, glowing effects, and dark theme create an authentic retro-computing atmosphere that perfectly showcases your technical skills.

<img width="1908" height="912" alt="Screenshot 2026-02-26 203141" src="https://github.com/user-attachments/assets/981821f0-d2e9-4fb4-9770-568bc06d739c" />
<img width="1915" height="916" alt="Screenshot 2026-02-26 203208" src="https://github.com/user-attachments/assets/c6ce6b0e-1722-43f1-a7d3-ee65fe5ffb54" />


### Key Concept
Instead of scrolling through a standard portfolio page, visitors explore your work through interactive applications:
- **Terminal.io** - Interactive command-line interface
- **Bio.exe** - Your professional biography
- **Projects.sh** - Portfolio project showcase
- **Skills.bin** - Technical skills and expertise
- **Files** - File explorer for browsing content
- **Password Cracker** - Interactive security simulation
- **Network Monitor** - System network activity display
- **System Monitor** - Real-time system stats
- **Notepad** - Quick notes and information
- And more custom apps!

---

## Features

✨ **Interactive Desktop Environment**
- Multiple draggable and resizable windows
- Full multitasking capability
- Realistic OS-like interactions

🎨 **Stunning Retro Aesthetics**
- Dark theme with glowing cyan/neon accents
- Authentic hacker terminal styling
- Smooth animations and transitions
- Professional typography

💻 **Multiple Applications**
- Terminal interface with command simulation
- Portfolio and project showcase
- Skills and expertise display
- Contact and networking tools
- File browser and more

📱 **Fully Responsive**
- Works seamlessly on desktop, tablet, and mobile
- Touch-friendly interactions
- Adaptive UI for all screen sizes

⚡ **High Performance**
- Built with Vite for lightning-fast load times
- Optimized React component structure
- Smooth animations with Motion library

🔒 **Interactive Security Features**
- Network monitoring simulation
- Password cracker demo
- System monitoring tools

🎯 **Customizable & Extensible**
- Easy to add new applications
- Configurable app components
- Modular architecture

---

## Tech Stack

### Frontend
- **React 19** - UI library for building interactive components
- **TypeScript** - Type-safe JavaScript for robust code
- **Vite** - Next-generation build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful and consistent icon library

### Libraries & Tools
- **Motion (Framer Motion)** - Smooth animations and transitions
- **@tailwindcss/vite** - Tailwind CSS plugin for Vite
- **@google/genai** - Google Generative AI integration

### Backend (Optional)
- **Express.js** - Node.js web framework
- **Better SQLite3** - Lightweight database
- **dotenv** - Configuration management

### Development Tools
- **TypeScript** - Static type checking
- **TSX** - TypeScript executor for Node.js
- **Autoprefixer** - CSS vendor prefix automation

---

## Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- Git (for cloning the repository)

### Step-by-Step Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/augustdev290/NEO-OS-Hacking-Portfolio.git
cd NEO-OS-Hacking-Portfolio
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Configuration
Create a `.env` file in the root directory for any required environment variables:
```env
VITE_API_KEY=your_api_key_here
```

#### 4. Development Server
Start the development server with hot reload:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

#### 5. Build for Production
Create an optimized production build:
```bash
npm run build
```

#### 6. Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

#### 7. Clean Build Artifacts
Remove the dist folder:
```bash
npm run clean
```

#### 8. Type Checking
Run TypeScript type checking:
```bash
npm run lint
```

---

## Project Structure

```
neo-os-hacking-portfolio/
├── src/
│   ├── components/
│   │   ├── Window.tsx          # Draggable window component
│   │   ├── Apps.tsx            # Application components
│   │   └── ...
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles
│   └── types.ts                # TypeScript type definitions
├── public/                      # Static assets
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # This file
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run clean` | Remove dist folder |
| `npm run lint` | Run TypeScript type checking |

---

## Customization

### Adding New Applications
To add custom applications to your NEO-OS portfolio:

1. Create a new component in `src/components/Apps.tsx`
2. Add the app configuration to the `APPS` array in `src/App.tsx`
3. Define the app type in `src/types.ts`

### Styling
- Modify colors and theme in `tailwind.config.js`
- Global styles can be updated in `src/index.css`

### Configuration
Update `metadata.json` for project information and customize window behaviors in the component files.

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Tips

- Use the production build for deployment
- Enable gzip compression on your server
- Leverage browser caching for static assets
- Consider using a CDN for faster content delivery

---

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is already in use, modify `package.json` scripts:
```json
"dev": "vite --port=3001 --host=0.0.0.0"
```

### TypeScript Errors
Run `npm run lint` to check for type errors and fix them before building.

### Build Issues
- Clear `node_modules` and `dist` folders: `rm -rf node_modules dist`
- Reinstall dependencies: `npm install`
- Rebuild: `npm run build`

---

## License

This project is open source and available under the MIT License.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with passion and code by Lunia290** ❤️
