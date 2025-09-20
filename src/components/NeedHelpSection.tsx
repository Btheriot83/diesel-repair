import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const NeedHelpSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-accent to-accent/90 rounded-2xl p-12 max-w-3xl mx-auto shadow-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            NEED HELP NOW?
          </h2>
          <Button variant="emergency" className="text-2xl font-black px-12 py-6">
            <Phone className="w-8 h-8 mr-3" />
            CALL (480) 307-7434
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NeedHelpSection;