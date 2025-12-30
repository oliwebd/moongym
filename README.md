# 🌑 MoonGYM - Cyber-Industrial Fitness Website

Welcome to **MoonGYM**! This is a modern, high-end gym website built with **React.js** and **Tailwind CSS**. It features a cyberpunk-inspired design with neon accents, full multilingual support (English & Arabic), and smooth animations.

![MoonGYM Preview](/public/images/home_arabic_1767079576639.png)

## 🚀 Features

*   **⚡ Cyber-Industrial Aesthetic**: Dark mode by default ("Pitch Black"), neon "Toxic Lime" accents, and glassmorphism effects.
*   **🌍 Multilingual Support (RTL)**: Fully supports **Arabic (Right-to-Left)** and **English (Left-to-Right)**. Switch languages instantly with a click.
*   **🌓 Dark/Light Mode**: Toggle between a dark "underground gym" vibe and a bright professional look.
*   **📱 Fully Responsive**: Looks great on mobile, tablets, and desktops.
*   **🖼️ Dynamic Routing**: Dedicated pages for Workouts, Trainers, Pricing, News, and Contact.
*   **✨ Smooth Animations**: Powered by **Framer Motion** for a premium feel.

---

## 🛠️ Tech Stack

*   [**React 19**](https://react.dev/): The library for web and native user interfaces.
*   [**Vite**](https://vitejs.dev/): Next generation frontend tooling.
*   [**Tailwind CSS v4**](https://tailwindcss.com/): A utility-first CSS framework (configured with the new v4 engine).
*   [**Framer Motion**](https://www.framer.com/motion/): Production-ready motion library for React.
*   [**React Router**](https://reactrouter.com/): Declarative routing for React web applications.
*   [**Lucide React**](https://lucide.dev/): Beautiful & consistent icons.

---

## 🏁 Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

You need to have **Node.js** installed. We recommend using the latest LTS version.
*   [Download Node.js](https://nodejs.org/)

We also recommend using **pnpm** (it's faster!), but `npm` works too.
To install `pnpm`:
```bash
npm install -g pnpm
```

### 1. Clone the Repository

Open your terminal (Command Prompt, Git Bash, or Terminal) and run:

```bash
git clone https://github.com/oliwebd/moongym.git
cd moongym
```

### 2. Install Dependencies

Install all the necessary libraries:

```bash
pnpm install
# OR if you use npm:
npm install
```

### 3. Run the Development Server

Start the website on your local computer:

```bash
pnpm run dev
# OR if you use npm:
npm run dev
```

You should see an output like `Local: http://localhost:5173/`. Open that link in your browser!

---

## 📂 Project Structure

Here is a quick overview of the important files:

```
moongym/
├── src/
│   ├── components/      # Reusable UI parts (Navbar, Footer, Hero, etc.)
│   ├── contexts/        # Global state (Language, Theme)
│   ├── data/            # Text content & translations (Edit text here!)
│   ├── pages/           # Full pages (Home, News, Contact, etc.)
│   ├── App.jsx          # Main application setup & Routing
│   └── index.css        # Global styles & Tailwind config
├── public/              # Images and static assets
└── vite.config.js       # Configuration for Vite
```

---

## 🎨 How to Customize

### key Configuration
Most project-wide settings (colors, fonts) are defined in `src/index.css` using the new Tailwind v4 `@theme` block.

### Changing Text / Adding Translations
All text content is stored in `src/data/translations.js`.
To add a new language or change text:
1.  Open `src/data/translations.js`.
2.  Edit the strings inside the `en` (English) or `ar` (Arabic) objects.

### Adding New Images
1.  Place your image files in the `public/images/` folder.
2.  Reference them in your code like `/images/your-image-name.png`.

---

## 🤝 Contributing

Feel free to fork this project and submit pull requests. Any contributions to improve the design or add features are welcome!

1.  Fork the repo
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
