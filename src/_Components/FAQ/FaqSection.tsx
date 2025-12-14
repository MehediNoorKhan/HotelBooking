import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Types
export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  faqs: FAQ[];
}

interface FAQComponentProps {
  sections: FAQSection[];
}

// Single FAQ Item Component
const FAQItem = ({ question, answer }: FAQ) => {
  return (
    <AccordionItem 
      value={question}
      className="bg-background rounded-lg mb-3 border-0 shadow-sm overflow-hidden"
    >
      <AccordionTrigger className="px-5 py-4 text-left font-medium text-base hover:no-underline hover:bg-foreground/10 transition-colors ">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-5 pb-4 pt-1 text-sm text-foreground/80 leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

// FAQ Section Component
const FAQSectionComponent = ({ title, faqs }: FAQSection) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-background mb-6">{title}</h2>
      <Accordion type="single" collapsible className="space-y-0">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </Accordion>
    </div>
  );
};

// Main FAQ Component (EXPORTED)
export const FAQComponent = ({ sections }: FAQComponentProps) => {
  return (
    <div className="min-h-screen py-12 px-6">
      {sections.map((section, index) => (
        <FAQSectionComponent 
          key={index} 
          title={section.title} 
          faqs={section.faqs} 
        />
      ))}
    </div>
  );
};