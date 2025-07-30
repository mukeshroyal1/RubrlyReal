import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Rubrly improve productivity?",
      answer: "Rubrly improves productivity by allowing you to edit documents through natural language commands, eliminating the need for manual formatting and revisions. Our AI understands context and implements changes instantly while maintaining perfect document formatting."
    },
    {
      question: "What makes Rubrly different from Microsoft 365 Copilot?",
      answer: "While Microsoft 365 Copilot focuses on content generation, Rubrly specializes in precision document editing and revision workflows. We provide advanced comparison tools, comment implementation, and seamless integration specifically designed for professional document workflows."
    },
    {
      question: "Why should I choose Rubrly over other AI tools?",
      answer: "Rubrly is purpose-built for document professionals who need precision, collaboration features, and enterprise-grade security. Unlike general AI tools, we understand document workflows and provide specialized features like auto comment implementation and predictive navigation."
    }
  ];

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Questions
            <br />
            <span className="text-primary">Answered</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Rubrly
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;