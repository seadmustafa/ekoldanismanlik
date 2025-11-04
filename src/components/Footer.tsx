import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-xl">Ekol Danışmanlık</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('nav.services')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  {t('services.application.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  {t('services.renewal.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  {t('services.consultation.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('nav.contact')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+905054383837" className="hover:text-primary transition-colors">
                  {t('contact.info.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:ekoldanismanlik06@gmail.com" className="hover:text-primary transition-colors">
                  {t('contact.info.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-sm text-muted-foreground">
            <p>
              © {currentYear} Ekol Danışmanlık. {t('footer.rights')}.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-primary transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
