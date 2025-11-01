import { useTranslation } from 'react-i18next';
import { Award, Zap, Headphones, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Award,
      title: t('features.expert.title'),
      description: t('features.expert.description'),
    },
    {
      icon: Zap,
      title: t('features.fast.title'),
      description: t('features.fast.description'),
    },
    {
      icon: Headphones,
      title: t('features.support.title'),
      description: t('features.support.description'),
    },
    {
      icon: DollarSign,
      title: t('features.transparent.title'),
      description: t('features.transparent.description'),
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
