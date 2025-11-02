import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Briefcase, FileText, Mail, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const FloatingNavbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [time, setTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
  };

  const navLinks = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/about', label: t('nav.about'), icon: Users },
    { path: '/services', label: t('nav.services'), icon: Briefcase },
    { path: '/permit-types', label: t('nav.permitTypes'), icon: FileText },
    { path: '/contact', label: t('nav.contact'), icon: Mail },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 animate-fade-in hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Section - Timezone */}
            <div className="flex items-center space-x-2 bg-background/70 dark:bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-4 py-2 shadow-lg">
              <span className="text-2xl">{i18n.language === 'en' ? '🇬🇧' : '🇹🇷'}</span>
              <div className="h-4 w-px bg-border/50" />
              <span className="text-sm font-medium text-foreground/80">Europe/Istanbul</span>
            </div>

            {/* Center Section - Navigation Pill */}
            <nav className="flex items-center space-x-1 bg-background/70 dark:bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-3 py-2 shadow-lg">
              {navLinks.map((link, index) => (
                <div key={link.path} className="flex items-center">
                  {index > 0 && <div className="h-6 w-px bg-border/50 mx-1" />}
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      location.pathname === link.path
                        ? 'bg-primary/10 dark:bg-primary/20 text-primary shadow-inner'
                        : 'text-foreground/70 hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                </div>
              ))}
              
              <div className="h-6 w-px bg-border/50 mx-1" />
              
              {/* Dark Mode Toggle inside navbar */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9 rounded-full hover:scale-105 transition-transform"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </nav>

            {/* Right Section - Clock & Language */}
            <div className="flex items-center space-x-3 bg-background/70 dark:bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-4 py-2 shadow-lg">
              <div className="font-mono text-sm font-medium text-foreground/80 tabular-nums">
                {formatTime(time)}
              </div>
              <div className="h-4 w-px bg-border/50" />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="h-8 px-3 rounded-full hover:scale-105 transition-transform"
              >
                {i18n.language === 'en' ? '🇹🇷 TR' : '🇬🇧 EN'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="hidden md:block h-24" />
    </>
  );
};

export default FloatingNavbar;
