import { MessageSquare, GitCompare, Zap, CheckSquare, Edit3, Navigation } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Edit Documents Through Chat",
      description: "Simply describe your desired changes in natural language, and our AI implements them instantly with perfect formatting. Save hours on revisions and focus on high-value work.",
      comingSoon: false
    },
    {
      icon: GitCompare,
      title: "Compare Proposed Edits",
      description: "Preview changes with a clear side-by-side comparison of old and new text. Approve or reject edits with a single click to maintain quality control and iterate rapidly.",
      comingSoon: false
    },
    {
      icon: Zap,
      title: "Perfect Formatting",
      description: "Maintain the exact formatting of your documents when implementing Rubrly's content and suggestions. Focus on the language, not the formatting.",
      comingSoon: false
    },
    {
      icon: CheckSquare,
      title: "Auto Comment Implementation",
      description: "Proactively responds to your comments and implements them across entire documents. Streamline collaboration by making the review process seamless.",
      comingSoon: true
    },
    {
      icon: Edit3,
      title: "Smart Rewrites",
      description: "Real-time context-aware suggestions based on your recent activity to accelerate the drafting process. Predicts your next edits and suggest them to you.",
      comingSoon: true
    },
    {
      icon: Navigation,
      title: "Predictive Navigation Assistance",
      description: "Predicts the next section you'll edit based on document context, enabling seamless navigation across large files to save you time.",
      comingSoon: true
    }
  ];

  return (
    <section className="py-20 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">FEATURES</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Accelerate Your
            <br />
            <span className="text-primary">Document Workflows</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features that transform how you work with documents
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                {feature.comingSoon && (
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Coming Soon
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;