'use client';
import * as Avatar from "@radix-ui/react-avatar";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube, FaFacebook, FaInstagram, FaDiscord, FaTiktok, FaGlobe, FaWhatsapp, FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaTools, FaUserAstronaut, FaHome, FaLayerGroup, FaCertificate, FaFolderOpen, FaEnvelopeOpenText } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { useState, useEffect } from "react";
import ImageSlider from "./image-slider";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);
  const [contactMethod, setContactMethod] = useState('whatsapp');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [activeSection, setActiveSection] = useState('hero');
  const [aboutLang, setAboutLang] = useState<'en' | 'id'>('en');

  // Certification data array
  const certifications = [
    {
      title: "Financial Literacy",
      issuer: "Dicoding X Laskar AI",
      image: "/assets/images/certificate/machine-learning/financial-literacy.jpg"
    },
    {
      title: "Visualisasi Data",
      issuer: "Dicoding X Laskar AI",
      image: "/assets/images/certificate/machine-learning/visualisasi-data.jpg"
    },
    {
      title: "Memulai Bahasa Pemrograman Python",
      issuer: "Dicoding X Laskar AI",
      image: "/assets/images/certificate/machine-learning/python-language.jpg"
    },
    {
      title: "Graduated from a Full-Stack Developer bootcamp",
      issuer: "PT Dumbways Indonesia",
      image: "/assets/images/certificate/dumbways/graduated.jpg"
    },
    {
      title: "Full-Stack Developer bootcamp",
      issuer: "PT Dumbways Indonesia",
      image: "/assets/images/certificate/dumbways/join.jpg"
    },
    {
      title: "Frontend and React Developer",
      issuer: "Dicoding X Indosat IDCamp",
      image: "/assets/images/certificate/frontend-react/aplikasi-react.jpg"
    },
    {
      title: "Belajar Frontend Web Pemula",
      issuer: "Dicoding X Indosat IDCamp",
      image: "/assets/images/certificate/frontend-react/frontend-pemula.jpg",
    },
    {
      title: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding X Indosat IDCamp",
      image: "/assets/images/certificate/frontend-react/dasar-javascript.jpg"
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding X Indosat IDCamp",
      image: "/assets/images/certificate/frontend-react/dasar-pemrograman-web.jpg"
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding X Indosat IDCamp",
      image: "/assets/images/certificate/frontend-react/dasar-ai.jpg"
    },
    {
      title: "Intro to Software Engineer",
      issuer: "Revoluse Cita Edukasi (Revou)",
      image: "/assets/images/certificate/revou/revou.jpg"
    },
    {
      title: "Program Microsoft Office",
      issuer: "LKP-Duta",
      image: "/assets/images/certificate/microsoft-office/LKP-DUTA.jpg"
    },
    {
      title: "Sertifikasi Microsoft Office",
      issuer: "Udemy",
      image: "/assets/images/certificate/microsoft-office/sertifikasi-Microsoft-office.jpg"
    }
  ];

  // Portfolio data array with multiple images and website URLs
  const portfolios = [
    {
      title: "EventHub",
      description: "A platform for event management featuring comprehensive booking and event administration functionalities. Built using Next.js, TypeScript, PostgreSQL, Prisma, and ShadCN for the frontend and backend. Integrated with Cloudinary for media management and Midtrans as the payment gateway. Key features include a booking system, secure payment processing, and an administrative dashboardPlatform event management dengan fitur booking dan management event. Dibangun dengan React, Node.js, dan PostgreSQL. Fitur utama meliputi sistem booking, payment gateway, dan dashboard admin.",
      images: [
        "/assets/images/portfolio/eventhub/1.png",
        "/assets/images/portfolio/eventhub/2.png",
        "/assets/images/portfolio/eventhub/3.png",
        "/assets/images/portfolio/eventhub/4.png",
        "/assets/images/portfolio/eventhub/5.png",
        "/assets/images/portfolio/eventhub/6.png",
        "/assets/images/portfolio/eventhub/7.png",
        "/assets/images/portfolio/eventhub/8.png",
        "/assets/images/portfolio/eventhub/9.png",
        "/assets/images/portfolio/eventhub/10.png",
        "/assets/images/portfolio/eventhub/qr.png",

      ],
      thumbnail: "/assets/images/portfolio/eventhub/1.png",
      alt: "EventHub Project",
      website: "https://eventhub-demo.vercel.app",
      github: "https://github.com/username/eventhub"
    },
    {
      title: "CoffeeShop",
      description: "Aplikasi pemesanan kopi dengan sistem pembayaran online. Menggunakan React Native untuk mobile app dan Express.js untuk backend. Integrasi dengan payment gateway dan sistem notifikasi real-time.",
      images: [
        "/assets/images/portfolio/coffe-shop/1.png",
        "/assets/images/portfolio/coffe-shop/2.png",
        "/assets/images/portfolio/coffe-shop/3.png",
        "/assets/images/portfolio/coffe-shop/4.png",
        "/assets/images/portfolio/coffe-shop/5.png",
        "/assets/images/portfolio/coffe-shop/6.png",
        "/assets/images/portfolio/coffe-shop/7.png",
        "/assets/images/portfolio/coffe-shop/8.png",
        "/assets/images/portfolio/coffe-shop/9.png",
        "/assets/images/portfolio/coffe-shop/10.png",
        "/assets/images/portfolio/coffe-shop/qr.png"
      ],
      thumbnail: "/assets/images/portfolio/coffe-shop/1.png",
      alt: "CoffeeShop Project",
      website: "https://coffeeshop-demo.vercel.app",
      github: "https://github.com/username/coffeeshop"
    },
    {
      title: "DumbMerch",
      description: "Developed a dynamic e-commerce platform using React and Express, providing a fast and seamless online shopping experience. Customers can easily browse for products, add items to their cart, and securely complete the checkout process. The platform includes secure payment options and streamlined messaging for customer inquiries and complaints, which enhances both user satisfaction and merchant engagement",
      images: [
        "/assets/images/portfolio/dumbmerch/1.png",
        "/assets/images/portfolio/dumbmerch/2.png",
        "/assets/images/portfolio/dumbmerch/3.png",
        "/assets/images/portfolio/dumbmerch/4.png"
      ],
      thumbnail: "/assets/images/portfolio/dumbmerch/1.png",
      alt: "DumbMerch Project",
      website: "https://dumbmerch-demo.vercel.app",
      github: "https://github.com/username/dumbmerch"
    },
    {
      title: "Book Library",
      description: "A comprehensive digital library management system designed to facilitate both online tracking and offline book lending. Built with Laravel, MySQL, Tailwind CSS, and managed using Composer and Artisan CLI. Users can browse and search for available books, submit loan requests for offline borrowing, and wait for approval from administrators. Once approved, the system records the transaction digitally. After reading, users can submit reviews and ratings for the books. The platform also features an intuitive admin dashboard for managing users, book inventory, loan approvals, and user feedback.",
      images: [
        "/assets/images/portfolio/book-library/1.png",
        "/assets/images/portfolio/book-library/2.png",
        "/assets/images/portfolio/book-library/3.png",
        "/assets/images/portfolio/book-library/4.png",
        "/assets/images/portfolio/book-library/qr.png"
      ],
      thumbnail: "/assets/images/portfolio/book-library/1.png",
      alt: "Book Library Project",
      website: "https://booklibrary-demo.vercel.app",
      github: "https://github.com/username/booklibrary"
    },
    
    
    {
      title: "NoteApp",
      description: "A simple and intuitive note-taking mobile application built with React Native. The app allows users to create and manage their personal notes through essential features such as adding new notes, editing existing ones, marking notes as completed, and deleting them. Designed with a clean and responsive interface, the application offers a seamless experience for organizing daily tasks ",
      images: [
        "/assets/images/portfolio/note-app/1.png",
        "/assets/images/portfolio/note-app/2.png",
        "/assets/images/portfolio/note-app/3.png",
        "/assets/images/portfolio/note-app/qr.png"
      ],  
      thumbnail: "/assets/images/portfolio/note-app/1.png",
      alt: "note-app",
      website: "https://booklibrary-demo.vercel.app",
      github: "https://github.com/username/booklibrary"
    },
    {
      title: "NoteWeb",
      description: "As a final project for the Dicoding Frontend Developer training, I developed a note-taking website. Similar to common note-taking applications, this website allows users to create new notes, delete existing ones, search for specific notes, and archive them. Each note consists of a title, creation date, and content. The website includes a form for adding new notes with built-in validation and utilizes local storage to save user data.",
      images: [
        "/assets/images/portfolio/note-Web/1.png",
        "/assets/images/portfolio/note-Web/2.png",
        "/assets/images/portfolio/note-Web/3.png",
        "/assets/images/portfolio/note-Web/4.png",
        "/assets/images/portfolio/note-Web/qr.png"
      ],
      thumbnail: "/assets/images/portfolio/note-Web/1.png",
      alt: "note-web",
      website: "https://booklibrary-demo.vercel.app",
      github: "https://github.com/username/booklibrary"
    },
    {
      title: "waysbeans",
      description: "Built with React Typescript and Express Typescript, providing a fast and seamless online shopping experience. Customers can easily browse for products, add items to their cart, and securely complete the checkout process. The platform includes secure payment options ",
      images: [
        "/assets/images/portfolio/waysbeans/1.png",
        "/assets/images/portfolio/waysbeans/2.png",
        "/assets/images/portfolio/waysbeans/3.png",
        "/assets/images/portfolio/waysbeans/4.png",
        "/assets/images/portfolio/waysbeans/qr.png",

      ],
      thumbnail: "/assets/images/portfolio/waysbeans/1.png",
      alt: "waysbeans",
      website: "https://booklibrary-demo.vercel.app",
      github: "https://github.com/username/booklibrary"
    },
    {
      title: "Review Film",
      description: "Built with React Typescript and Express Typescript,  providing a fast and Users can log in and register to create reviews to express their feelings and opinions about films they have watched and share them with everyone. They can also upload relevant images to strengthen their reviews of the films. Additionally, users can edit their profile photos.",
      images: [
        "/assets/images/portfolio/review-film/1.png",
        "/assets/images/portfolio/review-film/2.png",
        "/assets/images/portfolio/review-film/3.png",
        "/assets/images/portfolio/review-film/4.png",
        "/assets/images/portfolio/review-film/5.png",
        "/assets/images/portfolio/review-film/qr.png"
      ],
      thumbnail: "/assets/images/portfolio/review-film/1.png",
      alt: "Circle",
      website: "https://booklibrary-demo.vercel.app",
      github: "https://github.com/username/booklibrary"
    },
    {
      title: "circle",
      description: "Built with React Typescript and Express Typescript,  providing a fast and Users can log in and register to create reviews to express their feelings and opinions about films they have watched and share them with everyone. They can also upload relevant images to strengthen their reviews of the films. Additionally, users can edit their profile photos.",
      images: [
        "/assets/images/portfolio/circle/1.png",
        "/assets/images/portfolio/circle/2.png",
        "/assets/images/portfolio/circle/3.png",
        "/assets/images/portfolio/circle/4.png",
        "/assets/images/portfolio/circle/qr.png",
      ],
      thumbnail: "/assets/images/portfolio/circle/1.png",
      alt: "Circle",
      website: "https://booklibrary-demo.vercel.app",
      github: "https://github.com/username/booklibrary"
    }
  ];

  useEffect(() => {
    setMounted(true);
    // Sync dark mode with prefers-color-scheme
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Only apply dark mode classes after component is mounted
    if (!mounted) return;
    
    if (dark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [dark, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', offset: 0 },
        { id: 'about', offset: 0 },
        { id: 'techstack', offset: 0 },
        { id: 'certifications', offset: 0 },
        { id: 'portfolio', offset: 0 },
        { id: 'contact', offset: 0 },
      ];
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mapping warna solid khas untuk setiap tech
  const techColors: { [key: string]: string } = {
    javascript: '#f7e018',
    typescript: '#3178c6',
    php: '#777bb4',
    python: '#3776ab',
    'c#': '#512bd4',
    java: '#e76f00',
    react: '#61dafb',
    vue: '#42b883',
    vuetify: '#1867c0',
    next: '#000',
    shadcn: '#fff',
    tailwind: '#38bdf8',
    bootstrap: '#7952b3',
    'material-ui': '#007fff',
    chakra: '#319795',
    'ant-design': '#1677ff',
    quasar: '#1976d2',
    radix: '#fff',
    figma: '#f24e1e',
    express: '#444444',
    laravel: '#ff2d20',
    flask: '#000',
    springboot: '#6db33f',
    aspnet: '#512bd4',
    postgresql: '#336791',
    mysql: '#00758f',
    oracle: '#f80000',
    mongodb: '#47a248',
    sequelize: '#52b0e7',
    mongoose: '#800',
    git: '#f34f29',
    github: '#24292e',
    gitlab: '#fc6d26',
    docker: '#2496ed',
  };

  // Typewriter effect headline
  const typewriterWords = [
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer"
  ];
  const [twIndex, setTwIndex] = useState(0);
  const [twSub, setTwSub] = useState("");
  const [twDel, setTwDel] = useState(false);
  useEffect(() => {
    if (!mounted) return;
    let timeout: NodeJS.Timeout;
    const current = typewriterWords[twIndex];
    if (!twDel && twSub.length < current.length) {
      timeout = setTimeout(() => setTwSub(current.slice(0, twSub.length + 1)), 60);
    } else if (!twDel && twSub.length === current.length) {
      timeout = setTimeout(() => setTwDel(true), 1200);
    } else if (twDel && twSub.length > 0) {
      timeout = setTimeout(() => setTwSub(current.slice(0, twSub.length - 1)), 32);
    } else if (twDel && twSub.length === 0) {
      timeout = setTimeout(() => {
        setTwDel(false);
        setTwIndex((i) => (i + 1) % typewriterWords.length);
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [twSub, twDel, twIndex, mounted]);

  return (
    <>
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
        background: 'rgba(10,18,24,0.92)',
        boxShadow: '0 2px 16px #00f0ff22',
        borderBottom: '1.5px solid #00f0ff33',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 0 0 0',
        height: 62,
        backdropFilter: 'blur(8px) saturate(1.1)',
        width: '100vw',
        left: 0,
      }}>
        <div style={{
          maxWidth: 900,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}>
          {[
            { id: 'hero', label: 'Home', icon: <FaHome size={20} /> },
            { id: 'about', label: 'About', icon: <FaUserAstronaut size={20} /> },
            { id: 'techstack', label: 'Tech Stack', icon: <FaLayerGroup size={20} /> },
            { id: 'certifications', label: 'Certifications', icon: <FaCertificate size={20} /> },
            { id: 'portfolio', label: 'Portfolio', icon: <FaFolderOpen size={20} /> },
            { id: 'contact', label: 'Contact', icon: <FaEnvelopeOpenText size={20} /> },
          ].map(nav => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 18px',
                fontWeight: 700,
                fontSize: 17,
                color: activeSection === nav.id ? '#00f0ff' : '#ededed',
                background: activeSection === nav.id ? 'rgba(0,240,255,0.08)' : 'transparent',
                borderRadius: 16,
                border: activeSection === nav.id ? '1.5px solid #00f0ff' : '1.5px solid transparent',
                boxShadow: activeSection === nav.id ? '0 2px 12px #00f0ff33' : 'none',
                transition: 'all 0.18s',
                textDecoration: 'none',
                margin: '0 2px',
                cursor: 'pointer',
              }}
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById(nav.id);
                if (el) {
                  window.scrollTo({
                    top: el.offsetTop - 48,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              {nav.icon}
              <span>{nav.label}</span>
            </a>
          ))}
        </div>
      </nav>
      <div className={styles.page} style={{marginTop: 70}}>
        {/* Dark/Light Mode Toggle */}
        <button className={styles.themeToggle} onClick={() => setDark((d) => !d)}>
          {mounted && dark ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="7" fill="#00f0ff" /><path d="M11 2v2M11 18v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M2 11h2M18 11h2M4.22 17.78l1.42-1.42M16.36 5.64l1.42-1.42" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M17 11a6 6 0 1 1-6-6c0 3.31 2.69 6 6 6z" fill="#0a0a0a" /><circle cx="11" cy="11" r="7" stroke="#00f0ff" strokeWidth="1.5"/></svg>
          )}
        </button>
        {/* Hero Section */}
        <motion.section id="hero" className={styles.hero} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className={styles.heroBg}>
            {/* Futuristic animated grid/waves - TOP */}
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 900 400"
              preserveAspectRatio="none"
              className={styles.futuristicBg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1 }}
              style={{ top: 0, left: 0, position: 'absolute' }}
            >
              <motion.path
                d="M0 120 Q 150 40 300 120 T 600 120 T 900 120"
                stroke="#00f0ff"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                style={{ filter: 'drop-shadow(0 0 16px #00f0ff88)' }}
              />
              <motion.path
                d="M0 170 Q 150 70 300 170 T 600 170 T 900 170"
                stroke="#00f0ff99"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
                style={{ filter: 'drop-shadow(0 0 8px #00f0ff55)' }}
              />
            </motion.svg>
            {/* Futuristic animated grid/waves - MIDDLE */}
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 900 400"
              preserveAspectRatio="none"
              className={styles.futuristicBg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.2 }}
              style={{ top: 0, left: 0, position: 'absolute' }}
            >
              <motion.path
                d="M0 200 Q 150 100 300 200 T 600 200 T 900 200"
                stroke="#00f0ff"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.7 }}
                style={{ filter: 'drop-shadow(0 0 16px #00f0ff88)' }}
              />
              <motion.path
                d="M0 250 Q 150 150 300 250 T 600 250 T 900 250"
                stroke="#00f0ff99"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 1.2 }}
                style={{ filter: 'drop-shadow(0 0 8px #00f0ff55)' }}
              />
            </motion.svg>
            {/* Futuristic animated grid/waves - BOTTOM */}
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 900 400"
              preserveAspectRatio="none"
              className={styles.futuristicBg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.4 }}
              style={{ top: 0, left: 0, position: 'absolute' }}
            >
              <motion.path
                d="M0 320 Q 150 380 300 320 T 600 320 T 900 320"
                stroke="#00f0ff"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 1.5 }}
                style={{ filter: 'drop-shadow(0 0 16px #00f0ff88)' }}
              />
              <motion.path
                d="M0 370 Q 150 330 300 370 T 600 370 T 900 370"
                stroke="#00f0ff99"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 2 }}
                style={{ filter: 'drop-shadow(0 0 8px #00f0ff55)' }}
              />
            </motion.svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Avatar.Root className={styles.avatar}>
              <Avatar.Image src="/assets/images/profile.jpg" alt="Avatar" width={210} height={210} style={{borderRadius : '100%', boxShadow: '0 0 32px #00f0ff88, 0 2px 24px #0af2', border: '4px solid #00f0ff', background: '#fff'}} />
              <Avatar.Fallback delayMs={600}>NA</Avatar.Fallback>
            </Avatar.Root>
            <h1 className={styles.title}>Muhammad Dava Fahreza</h1>
            {/* Typewriter headline */}
            <h2 className={styles.headline}>
              {mounted ? (
                <>
                  <span
                    style={{
                      fontSize: 38,
                      fontWeight: 900,
                      letterSpacing: 1.5,
                      background: 'linear-gradient(90deg, #00f0ff 0%, #0af 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 24px #00f0ff99, 0 2px 8px #0af2',
                      display: 'inline-block',
                      transition: 'background 0.3s',
                    }}
                  >
                    {twSub}
                  </span>
                  <span
                    style={{
                      color: '#00f0ff',
                      fontWeight: 900,
                      fontSize: 38,
                      marginLeft: 2,
                      textShadow: '0 2px 16px #00f0ffcc',
                      animation: 'blinkTypeCursor 1s steps(1) infinite',
                    }}
                  >
                    |
                  </span>
                </>
              ) : null}
            </h2>
            <div className={styles.ctaRow}>
              <motion.a
                href="/assets/pdf/CV_ATS_MUHAMMAD_DAVA_FAHREZA.pdf"
                download
                style={{
                  background: 'linear-gradient(90deg, #00f0ff 0%, #0af 100%)',
                  color: '#171717',
                  border: 'none',
                  borderRadius: 28,
                  padding: '18px 44px',
                  fontSize: 20,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 2px 18px #00f0ff55',
                  transition: 'background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginRight: 12,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ scale: 1.09, boxShadow: "0 0 48px 8px #00f0ffcc, 0 2px 24px #0af2" }}
                whileTap={{ scale: 0.97 }}
              >
                <span style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#fff',borderRadius:'50%',padding:7,marginRight:6}}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M12 19l-5-5M12 19l5-5"/><rect x="4" y="20" width="16" height="2" rx="1" fill="#00f0ff"/></svg>
                </span>
                Download CV
              </motion.a>
              <motion.a
                href="/assets/pdf/portfolio.pdf"
                download
                style={{
                  background: 'linear-gradient(90deg, #0af 0%, #00f0ff 100%)',
                  color: '#171717',
                  border: 'none',
                  borderRadius: 28,
                  padding: '18px 44px',
                  fontSize: 20,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 2px 18px #00f0ff55',
                  transition: 'background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ scale: 1.09, boxShadow: "0 0 48px 8px #00f0ffcc, 0 2px 24px #0af2" }}
                whileTap={{ scale: 0.97 }}
              >
                <span style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#fff',borderRadius:'50%',padding:7,marginRight:6}}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="14" rx="2" stroke="#00f0ff" strokeWidth="2.2"/><path d="M9 2v4M15 2v4" stroke="#00f0ff" strokeWidth="2.2"/></svg>
                </span>
                Download Portfolio
              </motion.a>
            </div>
            <motion.div
              className={styles.glow}
              animate={{
                boxShadow: [
                  "0 0 40px 10px #00f0ff66",
                  "0 0 80px 20px #00f0ffcc",
                  "0 0 40px 10px #00f0ff66",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.section>
        

        {/* About Section */}
        <motion.section
          id="about"
          className={styles.section + ' aboutSection'}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(120deg, rgba(20,30,40,0.92) 60%, rgba(0,240,255,0.08) 100%)',
            border: '2.5px solid #00f0ff',
            boxShadow: '0 0 32px 0 #00f0ff55',
            borderRadius: 22,
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 32,
          }}
          whileHover={{ boxShadow: '0 0 64px 0 #00f0ffcc', borderColor: '#00f0ff' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10, justifyContent: 'center' }}>
            <FaUserAstronaut size={28} color="#00f0ff" />
            <h3 className={styles.sectionTitle} style={{ fontSize: 26, fontWeight: 800, color: '#00f0ff', margin: 0, letterSpacing: 1 }}>About Me</h3>
          </div>
          {/* Toggle Bahasa */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginBottom: 18 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontWeight: 600, color: aboutLang === 'en' ? '#00f0ff' : '#ededed', fontSize: 16 }}>
              <input type="radio" name="aboutLang" value="en" checked={aboutLang === 'en'} onChange={() => setAboutLang('en')} style={{ accentColor: '#00f0ff', marginRight: 4 }} />
              English
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontWeight: 600, color: aboutLang === 'id' ? '#00f0ff' : '#ededed', fontSize: 16 }}>
              <input type="radio" name="aboutLang" value="id" checked={aboutLang === 'id'} onChange={() => setAboutLang('id')} style={{ accentColor: '#00f0ff', marginRight: 4 }} />
              Bahasa Indonesia
            </label>
          </div>
          <motion.p
            className={styles.sectionText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontSize: 19, lineHeight: 1.7, color: '#ededed', textAlign: 'center', maxWidth: 700, margin: '0 auto', fontWeight: 500 }}
          >
            {aboutLang === 'en' ? (
              <>
                As a <span className={styles.highlight}>Full-Stack Developer</span>, I bridge vision and reality by building <span className={styles.highlight}>scalable</span>, high-performance digital solutions.<br />
                My expertise spans modern web technologies, including <span className={styles.highlight}>JavaScript/TypeScript (Next.js, React, Vue)</span>, backend frameworks (<span className={styles.highlight}>Laravel, Spring Boot, ASP.NET, Flask</span>), and database architecture—all engineered with <span className={styles.highlight}>clean, maintainable code</span>.<br /><br />
                Beyond technical execution, I thrive on solving complex problems and optimizing user experiences. Whether launching MVPs or refining enterprise systems, I balance <span className={styles.highlight}>innovation</span> with <span className={styles.highlight}>robustness</span>.<br /><br />
                <span style={{ color: '#00f0ff', fontWeight: 700, fontSize: 20 }}>Let&#39;s collaborate to transform ideas into impact—where technology meets purpose.</span>
              </>
            ) : (
              <>
                Sebagai <span className={styles.highlight}>Full-Stack Developer</span>, saya menjembatani visi dan realita dengan membangun solusi digital <span className={styles.highlight}>scalable</span> dan berkinerja tinggi.<br />
                Keahlian saya mencakup teknologi web modern seperti <span className={styles.highlight}>JavaScript/TypeScript (Next.js, React, Vue)</span>, framework backend (<span className={styles.highlight}>Laravel, Spring Boot, ASP.NET, Flask</span>), serta arsitektur database—semua dirancang dengan <span className={styles.highlight}>kode yang bersih dan mudah dirawat</span>.<br /><br />
                Lebih dari sekadar eksekusi teknis, saya menikmati tantangan memecahkan masalah kompleks dan mengoptimalkan pengalaman pengguna. Baik saat meluncurkan MVP maupun menyempurnakan sistem enterprise, saya selalu menyeimbangkan <span className={styles.highlight}>inovasi</span> dan <span className={styles.highlight}>ketangguhan</span>.<br /><br />
                <span style={{ color: '#00f0ff', fontWeight: 700, fontSize: 20 }}>Mari berkolaborasi untuk mengubah ide menjadi dampak nyata—di mana teknologi bertemu tujuan.</span>
              </>
            )}
          </motion.p>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section id="techstack" className={styles.techstackSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
          <h3 className={styles.sectionTitle}>Tech Stack & Tools</h3>
          {/* Bahasa Pemrograman */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              background: 'rgba(20,30,40,0.85)',
              borderRadius: 22,
              border: '2.5px solid #f7e018',
              boxShadow: '0 0 32px 0 #f7e01855',
              padding: 24,
              margin: '32px 0 0 0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s, border 0.3s',
            }}
            whileHover={{ boxShadow: '0 0 64px 0 #f7e018cc', borderColor: '#ffe600' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <FaCode size={28} color="#f7e018" />
              <h4 style={{ color: '#fff', fontSize: 24, fontWeight: 800, margin: 0 }}>Bahasa Pemrograman</h4>
            </div>
            <div className={styles.techGrid}>
              {[
                { key: 'javascript', name: 'Javascript', img: '/assets/images/tech/javascript.svg' },
                { key: 'typescript', name: 'Typescript', img: '/assets/images/tech/typescript.svg' },
                { key: 'php', name: 'PHP', img: '/assets/images/tech/php.svg' },
                { key: 'python', name: 'Python', img: '/assets/images/tech/python.svg' },
                { key: 'c#', name: 'C#', img: '/assets/images/tech/csharp.svg' },
                { key: 'java', name: 'Java', img: '/assets/images/tech/java.svg' },
              ].map(tech => (
                <div key={tech.key} className={styles.techItem} title={tech.name} style={{ background: techColors[tech.key] || '#222', boxShadow: `0 2px 16px 0 ${techColors[tech.key] || '#00f0ff22'}44`, border: 'none', transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s', cursor: 'pointer', minWidth: 120, maxWidth: 120, minHeight: 140, maxHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 16, margin: 0, padding: 18, position: 'relative', overflow: 'hidden' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <img src={tech.img} alt={tech.name} style={{ width: 48, height: 48, marginBottom: 12, filter: 'drop-shadow(0 0 8px #fff8)', background: '#fff', borderRadius: '50%', padding: 8 }} />
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, textShadow: '0 2px 8px #0008', textAlign: 'center' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Frontend Developer */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: 'rgba(20,30,40,0.85)',
              borderRadius: 22,
              border: '2.5px solid #38bdf8',
              boxShadow: '0 0 32px 0 #38bdf888',
              padding: 24,
              margin: '32px 0 0 0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s, border 0.3s',
            }}
            whileHover={{ boxShadow: '0 0 64px 0 #38bdf8cc', borderColor: '#00f0ff' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <FaLaptopCode size={28} color="#38bdf8" />
              <h4 style={{ color: '#fff', fontSize: 24, fontWeight: 800, margin: 0 }}>Frontend Developer</h4>
            </div>
            <div className={styles.techGrid}>
              {[
                { key: 'react', name: 'React', img: '/assets/images/tech/react.svg' },
                { key: 'vue', name: 'Vue', img: '/assets/images/tech/vue.svg' },
                { key: 'next', name: 'Next.js', img: '/assets/images/tech/next.svg' },
                { key: 'tailwind', name: 'Tailwind', img: '/assets/images/tech/tailwind.svg' },
                { key: 'bootstrap', name: 'Bootstrap', img: '/assets/images/tech/bootstrap.svg' },
                { key: 'material-ui', name: 'Material UI', img: '/assets/images/tech/material-ui.svg' },
                { key: 'chakra', name: 'Chakra UI', img: '/assets/images/tech/chakra-ui.svg' },
                { key: 'ant-design', name: 'Ant Design', img: '/assets/images/tech/ant-design.svg' },
                { key: 'quasar', name: 'Quasar', img: '/assets/images/tech/quasar.svg' },
                { key: 'vuetify', name: 'Vuetify', img: '/assets/images/tech/vuetify.svg' },
                { key: 'radix', name: 'Radix UI', img: '/assets/images/tech/radix.svg' },
                { key: 'shadcn', name: 'ShadCN UI', img: '/assets/images/tech/shadcn.png' },
              ].map(tech => (
                <div key={tech.key} className={styles.techItem} title={tech.name} style={{ background: techColors[tech.key] || '#222', boxShadow: `0 2px 16px 0 ${techColors[tech.key] || '#00f0ff22'}44`, border: 'none', transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s', cursor: 'pointer', minWidth: 120, maxWidth: 120, minHeight: 140, maxHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 16, margin: 0, padding: 18, position: 'relative', overflow: 'hidden' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <img src={tech.img} alt={tech.name} style={{ width: 48, height: 48, marginBottom: 12, filter: 'drop-shadow(0 0 8px #fff8)', background: '#fff', borderRadius: '50%', padding: 8 }} />
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, textShadow: '0 2px 8px #0008', textAlign: 'center' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Backend Developer */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              background: 'rgba(20,30,40,0.85)',
              borderRadius: 22,
              border: '2.5px solid #6db33f',
              boxShadow: '0 0 32px 0 #6db33f88',
              padding: 24,
              margin: '32px 0 0 0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s, border 0.3s',
            }}
            whileHover={{ boxShadow: '0 0 64px 0 #6db33fcc', borderColor: '#00ff55' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <FaServer size={28} color="#6db33f" />
              <h4 style={{ color: '#fff', fontSize: 24, fontWeight: 800, margin: 0 }}>Backend Developer</h4>
            </div>
            <div className={styles.techGrid}>
              {[
                { key: 'express', name: 'Express.js', img: '/assets/images/tech/express.svg' },
                { key: 'laravel', name: 'Laravel', img: '/assets/images/tech/laravel.svg' },
                { key: 'flask', name: 'Flask', img: '/assets/images/tech/flask.svg' },
                { key: 'springboot', name: 'Spring Boot', img: '/assets/images/tech/springboot.svg' },
                { key: 'aspnet', name: '.Net', img: '/assets/images/tech/dotnet.svg' },
              ].map(tech => (
                <div key={tech.key} className={styles.techItem} title={tech.name} style={{ background: techColors[tech.key] || '#222', boxShadow: `0 2px 16px 0 ${techColors[tech.key] || '#00f0ff22'}44`, border: 'none', transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s', cursor: 'pointer', minWidth: 120, maxWidth: 120, minHeight: 140, maxHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 16, margin: 0, padding: 18, position: 'relative', overflow: 'hidden' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <img src={tech.img} alt={tech.name} style={{ width: 48, height: 48, marginBottom: 12, filter: 'drop-shadow(0 0 8px #fff8)', background: '#fff', borderRadius: '50%', padding: 8 }} />
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, textShadow: '0 2px 8px #0008', textAlign: 'center' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Mobile Developer */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              background: 'rgba(20,30,40,0.85)',
              borderRadius: 22,
              border: '2.5px solid #61dafb',
              boxShadow: '0 0 32px 0 #61dafb88',
              padding: 24,
              margin: '32px 0 0 0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s, border 0.3s',
            }}
            whileHover={{ boxShadow: '0 0 64px 0 #61dafbcc', borderColor: '#00f0ff' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <FaMobileAlt size={28} color="#61dafb" />
              <h4 style={{ color: '#fff', fontSize: 24, fontWeight: 800, margin: 0 }}>Mobile Developer</h4>
            </div>
            <div className={styles.techGrid}>
              {[
                { key: 'react', name: 'React Native', img: '/assets/images/tech/react.svg' },
              ].map(tech => (
                <div key={tech.key} className={styles.techItem} title={tech.name} style={{ background: techColors[tech.key] || '#222', boxShadow: `0 2px 16px 0 ${techColors[tech.key] || '#00f0ff22'}44`, border: 'none', transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s', cursor: 'pointer', minWidth: 120, maxWidth: 120, minHeight: 140, maxHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 16, margin: 0, padding: 18, position: 'relative', overflow: 'hidden' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <img src={tech.img} alt={tech.name} style={{ width: 48, height: 48, marginBottom: 12, filter: 'drop-shadow(0 0 8px #fff8)', background: '#fff', borderRadius: '50%', padding: 8 }} />
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, textShadow: '0 2px 8px #0008', textAlign: 'center' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Database */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              background: 'rgba(20,30,40,0.85)',
              borderRadius: 22,
              border: '2.5px solid #336791',
              boxShadow: '0 0 32px 0 #33679188',
              padding: 24,
              margin: '32px 0 0 0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s, border 0.3s',
            }}
            whileHover={{ boxShadow: '0 0 64px 0 #336791cc', borderColor: '#00f0ff' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <FaDatabase size={28} color="#336791" />
              <h4 style={{ color: '#fff', fontSize: 24, fontWeight: 800, margin: 0 }}>Database</h4>
            </div>
            <div className={styles.techGrid}>
              {[
                { key: 'postgresql', name: 'PostgreSQL', img: '/assets/images/tech/postgresql.svg' },
                { key: 'mysql', name: 'MySQL', img: '/assets/images/tech/mysql.svg' },
                { key: 'oracle', name: 'Oracle', img: '/assets/images/tech/oracle.svg' },
                { key: 'mongodb', name: 'MongoDB', img: '/assets/images/tech/mongodb.svg' },
                { key: 'sequelize', name: 'Sequelize', img: '/assets/images/tech/sequelize.svg' },
                { key: 'mongoose', name: 'Mongoose', img: '/assets/images/tech/mongoose.svg' },
              ].map(tech => (
                <div key={tech.key} className={styles.techItem} title={tech.name} style={{ background: techColors[tech.key] || '#222', boxShadow: `0 2px 16px 0 ${techColors[tech.key] || '#00f0ff22'}44`, border: 'none', transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s', cursor: 'pointer', minWidth: 120, maxWidth: 120, minHeight: 140, maxHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 16, margin: 0, padding: 18, position: 'relative', overflow: 'hidden' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <img src={tech.img} alt={tech.name} style={{ width: 48, height: 48, marginBottom: 12, filter: 'drop-shadow(0 0 8px #fff8)', background: '#fff', borderRadius: '50%', padding: 8 }} />
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, textShadow: '0 2px 8px #0008', textAlign: 'center' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Tools & DevOps */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              background: 'rgba(20,30,40,0.85)',
              borderRadius: 22,
              border: '2.5px solid #7952b3',
              boxShadow: '0 0 32px 0 #7952b388',
              padding: 24,
              margin: '32px 0 0 0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s, border 0.3s',
            }}
            whileHover={{ boxShadow: '0 0 64px 0 #7952b3cc', borderColor: '#fff' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <FaTools size={28} color="#7952b3" />
              <h4 style={{ color: '#fff', fontSize: 24, fontWeight: 800, margin: 0 }}>Tools & DevOps</h4>
            </div>
            <div className={styles.techGrid}>
              {[
                { key: 'git', name: 'Git', img: '/assets/images/tech/git.svg' },
                { key: 'github', name: 'GitHub', img: '/assets/images/tech/github.svg' },
                { key: 'gitlab', name: 'GitLab', img: '/assets/images/tech/gitlab.svg' },
                { key: 'docker', name: 'Docker', img: '/assets/images/tech/docker.svg' },
                { key: 'figma', name: 'Figma', img: '/assets/images/tech/figma.svg' },
              ].map(tech => (
                <div key={tech.key} className={styles.techItem} title={tech.name} style={{ background: techColors[tech.key] || '#222', boxShadow: `0 2px 16px 0 ${techColors[tech.key] || '#00f0ff22'}44`, border: 'none', transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s', cursor: 'pointer', minWidth: 120, maxWidth: 120, minHeight: 140, maxHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 16, margin: 0, padding: 18, position: 'relative', overflow: 'hidden' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <img src={tech.img} alt={tech.name} style={{ width: 48, height: 48, marginBottom: 12, filter: 'drop-shadow(0 0 8px #fff8)', background: '#fff', borderRadius: '50%', padding: 8 }} />
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, textShadow: '0 2px 8px #0008', textAlign: 'center' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section id="certifications" className={styles.section} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
          <h3 className={styles.sectionTitle}>Certifications</h3>
          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <Dialog.Root key={cert.title}>
                <Dialog.Trigger asChild>
                  <div className={styles.certCard} style={{cursor: 'pointer'}}>
                    <img src={cert.image} alt={cert.title} />
                    <div>
                      <strong>{cert.title}</strong>
                      <p>{cert.issuer}</p>
                    </div>
                  </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 9999
                  }} />
                  <Dialog.Content
                    style={{
                      background: '#181c1f',
                      boxShadow: '0 8px 32px #00f0ff88, 0 2px 24px #0af2',
                      borderRadius: 18,
                      padding: 24,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 16,
                      maxWidth: '96vw',
                      maxHeight: '90vh',
                      zIndex: 10000,
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <Dialog.Title style={{color: '#00f0ff', fontSize: '1.5rem', marginBottom: '8px'}}>{cert.title}</Dialog.Title>
                    <Dialog.Description style={{color: '#ededed', textAlign: 'center', marginBottom: '16px'}}>{cert.issuer} - Sertifikat {cert.title}</Dialog.Description>
                    <img src={cert.image} alt={cert.title} style={{maxWidth: '90vw', maxHeight: '60vh', borderRadius: '18px', marginBottom: 16}} />
                    <div style={{textAlign: 'center', color: '#ededed', background: 'rgba(0,0,0,0.7)', borderRadius: 12, padding: '12px 18px', maxWidth: 400}}>
                      <strong style={{fontSize: 20, color: '#00f0ff'}}>{cert.title}</strong>
                      <p style={{margin: '8px 0 0 0', fontSize: 16}}>{cert.issuer}</p>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <motion.section id="portfolio" className={`${styles.section} ${ styles.asuMemek}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
          <h3 className={styles.sectionTitle}>Portfolio</h3>
          <div className={styles.portfolioGrid}>
            {portfolios.map((portfolio) => (
              <Dialog.Root key={portfolio.title}>
                <Dialog.Trigger asChild>
                  <button className={styles.portfolioCard}>
                    <img src={portfolio.thumbnail} alt={portfolio.alt} />
                    <span>{portfolio.title}</span>
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 9999
                  }} />
                  <Dialog.Content
                    style={{
                      background: '#181c1f',
                      boxShadow: '0 8px 32px #00f0ff88, 0 2px 24px #0af2',
                      borderRadius: 18,
                      padding: 24,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'stretch',
                      gap: 16,
                      maxWidth: '96vw',
                      maxHeight: '90vh',
                      overflow: 'auto',
                      zIndex: 10000,
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <Dialog.Title style={{color: '#00f0ff', fontSize: '1.5rem', marginBottom: '8px'}}>{portfolio.title}</Dialog.Title>
                    <ImageSlider images={portfolio.images} title={portfolio.title} />
                    <div style={{
                      textAlign: 'left', 
                      color: '#ededed', 
                      background: 'rgba(0,0,0,0.7)', 
                      borderRadius: 12, 
                      padding: '16px 20px', 
                      width: '100%'
                    }}>
                      <strong style={{fontSize: 18, color: '#00f0ff', display: 'block', marginBottom: '8px'}}>{portfolio.title}</strong>
                      <p style={{margin: 0, fontSize: 14, lineHeight: '1.4'}}>{portfolio.description}</p>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      marginTop: '20px',
                      justifyContent: 'center',
                      flexWrap: 'wrap'
                    }}>
                      <motion.a
                        href={portfolio.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: 'linear-gradient(90deg, #00f0ff 0%, #0af 100%)',
                          color: '#171717',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '12px 24px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: '0 4px 16px #00f0ff44'
                        }}
                        whileHover={{ scale: 1.05, boxShadow: '0 6px 20px #00f0ff66' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Visit Website
                      </motion.a>
                      
                      <motion.a
                        href={portfolio.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ededed',
                          border: '1px solid #00f0ff44',
                          borderRadius: '8px',
                          padding: '12px 24px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.3s'
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          background: 'rgba(0, 240, 255, 0.1)',
                          borderColor: '#00f0ff'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={16} />
                        View Code
                      </motion.a>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          {/* Pilihan metode kontak sebagai toggle button group */}
          <div style={{ display: 'flex', width: '100%', marginBottom: 28, borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px #00f0ff22', border: '1.5px solid #00f0ff44' }}>
            <button
              type="button"
              onClick={() => setContactMethod('whatsapp')}
              style={{
                flex: 1,
                padding: '18px 0',
                fontSize: 22,
                fontWeight: 700,
                background: contactMethod === 'whatsapp' ? 'linear-gradient(90deg, #25D366 0%, #00f0ff 100%)' : 'rgba(0,0,0,0.12)',
                color: contactMethod === 'whatsapp' ? '#171717' : '#ededed',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
                boxShadow: contactMethod === 'whatsapp' ? '0 2px 12px #25D36644' : 'none',
                borderRight: '1.5px solid #00f0ff44',
              }}
            >
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setContactMethod('email')}
              style={{
                flex: 1,
                padding: '18px 0',
                fontSize: 22,
                fontWeight: 700,
                background: contactMethod === 'email' ? 'linear-gradient(90deg, #0077B5 0%, #00f0ff 100%)' : 'rgba(0,0,0,0.12)',
                color: contactMethod === 'email' ? '#fff' : '#ededed',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
                boxShadow: contactMethod === 'email' ? '0 2px 12px #0077B544' : 'none',
              }}
            >
              Email
            </button>
          </div>
          <form className={styles.contactForm} onSubmit={e => e.preventDefault()} style={{ gap: 20, width: '100%' }}>
            <input
              type="text"
              placeholder="Nama"
              required
              value={contactName}
              onChange={e => setContactName(e.target.value)}
              style={{ fontSize: 20, padding: '18px 16px', height: 56, borderRadius: 12, width: '100%', boxSizing: 'border-box' }}
            />
            {contactMethod === 'whatsapp' ? (
              <input
                type="tel"
                placeholder="Nomor WhatsApp (cth: 6281234567890)"
                required
                value={contactPhone}
                onChange={e => setContactPhone(e.target.value)}
                style={{ fontSize: 20, padding: '18px 16px', height: 56, borderRadius: 12, width: '100%', boxSizing: 'border-box' }}
              />
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  style={{ fontSize: 20, padding: '18px 16px', height: 56, borderRadius: 12, width: '100%', boxSizing: 'border-box' }}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={contactSubject}
                  onChange={e => setContactSubject(e.target.value)}
                  style={{ fontSize: 20, padding: '18px 16px', height: 56, borderRadius: 12, width: '100%', boxSizing: 'border-box' }}
                />
              </>
            )}
            <textarea
              placeholder="Pesan"
              required
              value={contactMessage}
              onChange={e => setContactMessage(e.target.value)}
              style={{ fontSize: 20, padding: '18px 16px', minHeight: 120, borderRadius: 12, resize: 'vertical', width: '100%', boxSizing: 'border-box' }}
            />
          </form>
          <div className={styles.ctaRow} style={{ marginTop: 32, width: '100%' }}>
            {contactMethod === 'whatsapp' ? (
              <a
                href={`https://wa.me/6287863578170?text=${encodeURIComponent(`Halo, saya ${contactName}. ${contactMessage}`)}`}
                target="_blank"
                rel="noopener"
                className={styles.ctaButton}
                style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 22, padding: '18px 32px', borderRadius: 14, width: '100%', justifyContent: 'center' }}
              >
                <FaWhatsapp size={28} /> Kirim Pesan WhatsApp
              </a>
            ) : (
              <a
                href={`mailto:mdavafahreza05@gmail.com?subject=${encodeURIComponent(contactSubject)}&body=${encodeURIComponent(contactMessage)}`}
                className={styles.ctaButton}
                style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 22, padding: '18px 32px', borderRadius: 14, width: '100%', justifyContent: 'center' }}
              >
                <FaEnvelope size={28} /> Kirim Email
              </a>
            )}
          </div>
        </section>

        {/* Social Media Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Social Media</h3>
          <div className={styles.socialLinks} style={{ justifyContent: 'center', gap: 24 }}>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" className={styles.socialBtn} title="LinkedIn">
              <FaLinkedin size={28} color="#0077B5" />
            </a>
            <a href="https://discord.com/users/yourusername" target="_blank" rel="noopener" className={styles.socialBtn} title="Discord">
              <FaDiscord size={28} color="#5865F2" />
            </a>
            <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener" className={styles.socialBtn} title="TikTok">
              <FaTiktok size={28} color="#000" />
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener" className={styles.socialBtn} title="YouTube">
              <FaYoutube size={28} color="#FF0000" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener" className={styles.socialBtn} title="GitHub">
              <FaGithub size={28} color="#fff" />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener" className={styles.socialBtn} title="Facebook">
              <FaFacebook size={28} color="#1877F3" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener" className={styles.socialBtn} title="Instagram">
              <FaInstagram size={28} color="#E4405F" />
            </a>
            <a href="https://hackerrank.com/yourusername" target="_blank" rel="noopener" className={styles.socialBtn} title="HackerRank">
              <SiHackerrank size={28} color="#2EC866" />
            </a>
            <a href="https://www.sololearn.com/profile/yourusername" target="_blank" rel="noopener" className={styles.socialBtn} title="SoloLearn">
              <FaGlobe size={28} color="#36B37E" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
