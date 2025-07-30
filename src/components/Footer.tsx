import tamLabsLogo from "@/assets/tamlabs-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <img src={tamLabsLogo} alt="Rubrly" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">Rubrly</span>
          </div>
          <p className="text-muted-foreground">Edit Overleaf documents with AI.</p>
          <p className="text-sm text-muted-foreground">
            © 2025 Rubrly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;