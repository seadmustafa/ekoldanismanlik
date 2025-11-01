import { useTranslation } from 'react-i18next';
import { Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Award, label: t('about.stats.experience'), value: '10+' },
    { icon: Users, label: t('about.stats.clients'), value: '500+' },
    { icon: TrendingUp, label: t('about.stats.success'), value: '95%' },
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t('about.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-muted/50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
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

export default About;
