import { FileText, Users, Edit, Monitor, FileCheck } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: FileText,
      title: "Professional Documents",
      description: "Implement changes across documents automatically while preserving consistent formatting."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Compare and control changes instantly as your team rapidly collaborates with Rubrly."
    },
    {
      icon: Edit,
      title: "Personal Writing",
      description: "Polish your writing with AI assistance that helps refine your message and voice."
    },
    {
      icon: Monitor,
      title: "Content Creation",
      description: "Refine your messaging and brand voice while maintaining consistency across your content."
    },
    {
      icon: FileCheck,
      title: "Resume Updates",
      description: "Take the hassle out of keeping your resume updated and tailored for every opportunity."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="use-cases">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">USE CASES</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built for
            <br />
            <span className="text-primary">Efficiency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful document editing for professionals and creators alike
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.slice(0, 3).map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <useCase.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {useCases.slice(3).map((useCase, index) => (
            <div key={index + 3} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <useCase.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;