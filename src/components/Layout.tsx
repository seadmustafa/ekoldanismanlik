import { ReactNode } from 'react';
import FloatingNavbar from './FloatingNavbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <FloatingNavbar />
      <main className="flex-1">{children}</main>
      <BottomNavbar />
      <Footer />
    </div>
  );
};

export default Layout;
