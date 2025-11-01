import { useTranslation } from 'react-i18next';
import { FileText, RefreshCw, Scale, FileCheck, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: FileText,
      title: t('services.application.title'),
      description: t('services.application.description'),
    },
    {
      icon: RefreshCw,
      title: t('services.renewal.title'),
      description: t('services.renewal.description'),
    },
    {
      icon: Scale,
      title: t('services.consultation.title'),
      description: t('services.consultation.description'),
    },
    {
      icon: FileCheck,
      title: t('services.appeals.title'),
      description: t('services.appeals.description'),
    },
    {
      icon: MapPin,
      title: t('services.tracking.title'),
      description: t('services.tracking.description'),
    },
    {
      icon: Briefcase,
      title: t('services.investor.title'),
      description: t('services.investor.description'),
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/contact">{t('services.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
