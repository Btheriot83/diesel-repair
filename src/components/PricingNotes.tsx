import { DollarSign, FileText, Package, AlertCircle } from "lucide-react";

const PricingNotes = () => {
  const notes = [
    {
      icon: DollarSign,
      title: "Standard dispatch fee",
      description: "Waived when you authorize the repair"
    },
    {
      icon: FileText,
      title: "Upfront estimate",
      description: "Before work begins"
    },
    {
      icon: Package,
      title: "Parts options",
      description: "Where available (OEM/aftermarket)"
    },
    {
      icon: AlertCircle,
      title: "No surprise charges",
      description: "We communicate changes immediately"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparent Pricing Notes
            </h2>
            <p className="text-lg text-muted-foreground">
              Trust-first pricing with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {notes.map((note, index) => {
              const IconComponent = note.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/50"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {note.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {note.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingNotes;