

const IntegrationSection = () => {
  return (
    <section className="py-20 bg-background" id="platform">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">PLATFORM</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Seamless Integration
            <br />
            <span className="text-primary">with Overleaf</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a natural chat interface that works right within your documents in Overleaf
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-5xl w-full">
            <img 
              src="/image.png" 
              alt="Rubrly Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;