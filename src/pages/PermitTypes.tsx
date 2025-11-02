import { useTranslation } from 'react-i18next';
import { FileText, Clock, Infinity, UserCheck, CreditCard } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const PermitTypes = () => {
  const { t } = useTranslation();

  const permitTypes = [
    {
      id: 'fixed-term',
      icon: Clock,
      title: t('permitTypes.fixedTerm.title'),
      sections: [
        {
          title: t('permitTypes.fixedTerm.definition'),
          content: t('permitTypes.fixedTerm.definitionText'),
        },
        {
          title: t('permitTypes.fixedTerm.extension'),
          content: t('permitTypes.fixedTerm.extensionText'),
          points: t('permitTypes.fixedTerm.extensionPoints', { returnObjects: true }) as string[],
        },
      ],
    },
    {
      id: 'indefinite',
      icon: Infinity,
      title: t('permitTypes.indefinite.title'),
      sections: [
        {
          title: t('permitTypes.indefinite.requirements'),
          content: t('permitTypes.indefinite.requirementsText'),
        },
        {
          title: t('permitTypes.indefinite.rights'),
          content: t('permitTypes.indefinite.rightsText'),
        },
        {
          title: t('permitTypes.indefinite.restrictions'),
          content: t('permitTypes.indefinite.restrictionsText'),
        },
        {
          title: t('permitTypes.indefinite.renewal'),
          content: t('permitTypes.indefinite.renewalText'),
        },
      ],
    },
    {
      id: 'independent',
      icon: UserCheck,
      title: t('permitTypes.independent.title'),
      sections: [
        {
          title: t('permitTypes.independent.definition'),
          content: t('permitTypes.independent.definitionText'),
        },
        {
          title: t('permitTypes.independent.criteria'),
          content: t('permitTypes.independent.criteriaText'),
          points: t('permitTypes.independent.criteriaPoints', { returnObjects: true }) as string[],
        },
      ],
    },
    {
      id: 'turquoise',
      icon: CreditCard,
      title: t('permitTypes.turquoise.title'),
      sections: [
        {
          title: t('permitTypes.turquoise.conditions'),
          content: t('permitTypes.turquoise.conditionsText'),
        },
        {
          title: t('permitTypes.turquoise.rights'),
          content: t('permitTypes.turquoise.rightsText'),
        },
        {
          title: t('permitTypes.turquoise.relatives'),
          content: t('permitTypes.turquoise.relativesText'),
        },
        {
          title: t('permitTypes.turquoise.exclusions'),
          content: t('permitTypes.turquoise.exclusionsText'),
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">{t('permitTypes.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('permitTypes.subtitle')}
          </p>
        </div>

        {/* Permit Types Accordion */}
        <div className="space-y-6">
          {permitTypes.map((permit) => (
            <Card key={permit.id} className="overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={permit.id} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <permit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold text-left">{permit.title}</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6 pt-4">
                      {permit.sections.map((section, index) => (
                        <div key={index} className="space-y-3">
                          <h3 className="text-lg font-semibold text-primary">
                            {section.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {section.content}
                          </p>
                          {section.points && (
                            <ul className="space-y-2 ml-4">
                              {section.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start space-x-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="text-muted-foreground">{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PermitTypes;
