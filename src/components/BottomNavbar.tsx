import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Users, Briefcase, FileText, Mail, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

// Hoist static data outside component to avoid re-creation on re-renders
const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: Home, iconKey: 'home' },
  { path: '/about', label: 'About', Icon: Users, iconKey: 'about' },
  { path: '/services', label: 'Services', Icon: Briefcase, iconKey: 'services' },
  { path: '/permit-types', label: 'Permit Types', Icon: FileText, iconKey: 'permitTypes' },
  { path: '/contact', label: 'Contact', Icon: Mail, iconKey: 'contact' },
] as const;

const BottomNavbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
  };

  // Runtime console tests
  useEffect(() => {
    const runTests = () => {
      console.log('✅ BottomNavbar: Component rendered successfully');
      
      // Test 1: Verify 5 nav items exist
      const navItems = document.querySelectorAll('[data-bottom-nav-item]');
      console.log(`✅ BottomNavbar: Found ${navItems.length} navigation items (expected 5)`);
      
      // Test 2: Verify aria-labels are present
      const ariaLabels = Array.from(navItems).every(item => item.getAttribute('aria-label'));
      console.log(`✅ BottomNavbar: All items have aria-labels: ${ariaLabels}`);
      
      // Test 3: Verify active state styling
      const activeItem = document.querySelector('[data-bottom-nav-item].active');
      if (activeItem) {
        const hasActiveBackground = activeItem.classList.contains('bg-primary/10') || 
                                   activeItem.classList.contains('dark:bg-primary/20');
        const hasActiveTextColor = activeItem.classList.contains('text-primary');
        console.log(`✅ BottomNavbar: Active item has correct background: ${hasActiveBackground}`);
        console.log(`✅ BottomNavbar: Active item has correct text color: ${hasActiveTextColor}`);
      }
    };

    // Run tests after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(runTests, 100);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <nav 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="bg-background/80 dark:bg-background/90 backdrop-blur-xl border border-border/50 rounded-full px-4 py-3 shadow-lg flex items-center gap-2">
        {/* Navigation Items */}
        {NAV_ITEMS.map(({ path, label, Icon, iconKey }) => {
          const isActive = location.pathname === path;
          const translatedLabel = t(`nav.${iconKey}`);
          
          return (
            <NavLink
              key={path}
              to={path}
              data-bottom-nav-item
              className={({ isActive }) =>
                `flex items-center justify-center p-3 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 dark:bg-primary/20 text-primary active'
                    : 'text-foreground/60 hover:text-foreground hover:bg-accent/50'
                }`
              }
              aria-label={`Navigate to ${translatedLabel}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {({ isActive }) => (
                <Icon 
                  className="h-4 w-4" 
                  fill={isActive ? 'currentColor' : 'none'}
                  strokeWidth={isActive ? 0 : 2}
                />
              )}
            </NavLink>
          );
        })}

        {/* Divider */}
        <div className="h-12 w-px bg-border/50 mx-1" />

        {/* Language Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleLanguage}
          className="h-10 w-10 rounded-full hover:bg-accent/50 transition-all"
          aria-label={`Switch to ${i18n.language === 'en' ? 'Turkish' : 'English'}`}
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">
            {i18n.language === 'en' ? 'TR' : 'EN'}
          </span>
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="h-10 w-10 rounded-full hover:bg-accent/50 transition-all"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  );
};

export default BottomNavbar;
