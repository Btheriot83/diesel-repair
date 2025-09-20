import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you offer 24/7 roadside service in Phoenix?",
      answer: "Yes, we provide 24/7 mobile diesel repair services throughout the Phoenix metro area, including all major corridors like I-10, I-17, and Loop 101/202/303. Our team responds to emergency breakdowns on highways, at truck stops, distribution centers, and job sites. Whether you're broken down near Sky Harbor Airport on I-10 or stalled on the I-17 corridor through central Phoenix, we coordinate with DPS for safe roadside positioning and provide rapid emergency response. Our technicians are equipped to handle most common failures on-site, from fuel system issues to cooling problems that plague trucks in Arizona's extreme desert heat. Call (480) 307-7434 for immediate dispatch and we'll get you back on the road quickly and safely."
    },
    {
      question: "Can you service trucks directly on I-10 or I-17?",
      answer: "Absolutely. We specialize in roadside repairs on Phoenix's major freight corridors, including I-10 from Tolleson to Chandler and I-17 from the I-10 split north to Anthem. Our mobile service trucks are equipped with safety equipment, hazard lighting, and communication systems to work safely on highway shoulders. We coordinate with DPS when necessary for traffic control and use proper safety protocols for roadside positioning. The I-10 corridor is particularly critical for freight movement, so we maintain fast response times from our strategically positioned service vehicles. Whether it's a breakdown at the I-10/I-17 interchange or along the busy freight zones near Sky Harbor, our technicians can perform most repairs on-site including fuel system diagnostics, cooling system repairs, electrical troubleshooting, and brake adjustments to get your truck moving safely."
    },
    {
      question: "Can you perform DPF regens and emissions checks on-site?",
      answer: "Yes, we carry the diagnostic equipment necessary to perform DPF regeneration cycles, check emissions system codes, and troubleshoot aftertreatment issues right at your location. Arizona's stop-and-go traffic around Phoenix, particularly on Loop 101 and during rush hour on I-10, can prevent proper DPF cycling, leading to clogged filters and reduced power. Our mobile diagnostic tools can force manual regens, clear fault codes, and assess the health of your emissions system components including the DPF, DOC, and SCR catalyst. We also handle DEF system issues, from faulty sensors to contaminated fluid that's common in Arizona's extreme heat. For fleet vehicles operating in the Phoenix metro's challenging conditions—extreme heat, heavy traffic, and frequent stops at distribution centers—we provide comprehensive emissions diagnostics and repairs to keep your trucks compliant and running efficiently without requiring a trip to a shop."
    },
    {
      question: "What payment methods and PO options are available for fleets?",
      answer: "We accept all major credit cards, cash, checks, and offer comprehensive fleet billing solutions including purchase orders, consolidated monthly invoicing, and direct corporate billing arrangements. For Phoenix-area fleet operations—whether you're running distribution routes on I-10, servicing construction sites across the Valley, or managing delivery schedules through major freight corridors—we understand the importance of streamlined billing processes. We can set up accounts for priority dispatch, track service history across your entire fleet, and provide detailed maintenance records for compliance documentation. Our billing department works with fleet managers to establish credit terms, approve emergency repair authorizations, and provide cost tracking by vehicle or location. Whether you need immediate roadside assistance for a breakdown on the I-17 corridor or scheduled maintenance at your Phoenix facility, we'll work within your existing procurement and accounting processes to keep your operation running smoothly."
    },
    {
      question: "Do you service construction and agricultural diesel equipment?",
      answer: "Yes, we service all types of diesel equipment beyond over-the-road trucks, including construction machinery, agricultural equipment, generators, and industrial diesel engines. Phoenix's booming construction industry and surrounding agricultural operations in the Valley rely on heavy equipment that faces unique challenges from Arizona's extreme heat, dust, and demanding operating conditions. We service excavators, bulldozers, cranes, irrigation pumps, generators, and farm equipment at job sites, agricultural facilities, and equipment yards throughout the Phoenix metro area. Our technicians are experienced with the hydraulic systems, cooling challenges, and dust infiltration issues common to equipment operating in desert conditions. Whether it's a construction project along the growing I-10 corridor, agricultural equipment in the West Valley farming areas, or backup generators at Phoenix-area facilities, we provide on-site diagnostics and repairs to minimize downtime and keep your operations productive."
    },
    {
      question: "What areas of the Phoenix Metro do you cover?",
      answer: "We provide comprehensive coverage throughout the 21-city Phoenix metropolitan area, from Buckeye and Avondale in the west to Queen Creek and Gilbert in the east, and from Anthem and Scottsdale in the north to Ahwatukee and Chandler in the south. Our primary service corridors include I-10 (from the I-17 split west to Buckeye and east to Chandler), I-17 (from the I-10 interchange north to Anthem), Loop 101 (complete circumference), Loop 202 (Red Mountain and Santan freeways), and Loop 303 (west valley connector). We maintain strategic positioning to serve major freight zones including the Tolleson logistics hub, Sky Harbor cargo area, and distribution centers along the I-10 corridor. Whether you're broken down in downtown Phoenix, need service at a remote job site in the desert, or require fleet maintenance at your West Valley facility, our mobile service trucks can reach any location within our coverage area with competitive response times and full repair capabilities."
    },
    {
      question: "How fast can you arrive during peak traffic or heat advisories?",
      answer: "Our typical response time ranges from 60-90 minutes, but we adjust expectations and routing during Phoenix's challenging conditions like rush hour traffic (7-9 AM and 4-6 PM) or extreme heat advisories when temperatures exceed 115°F. During peak traffic on I-10, I-17, or the Loop system, we use real-time traffic monitoring to optimize routes and provide accurate ETAs. When excessive heat warnings are issued—common during Phoenix summers—we prioritize safety and may recommend moving disabled vehicles to shaded areas when possible. Our mobile units are equipped with extra cooling equipment and our technicians take safety precautions during extreme heat conditions. For urgent breakdowns on major freight corridors during peak hours, we coordinate with DPS for traffic control when necessary. We maintain priority response protocols for fleet accounts and critical freight operations, ensuring that even during challenging Phoenix traffic and weather conditions, you receive professional service as quickly and safely as possible."
    },
    {
      question: "What information should I have ready when I call dispatch?",
      answer: "When you call (480) 307-7434, have your exact location ready including mile markers, nearest exit numbers, or cross streets if you're on surface roads. For highway breakdowns on I-10, I-17, or Loop systems, note whether you're on the shoulder or able to reach a safe location. Describe your symptoms clearly: won't start, overheating, loss of power, warning lights, unusual noises, or fluid leaks. Have your vehicle information available: year, make, model, and any fleet or company details. Let us know if you're carrying hazardous materials, have passengers, or face safety concerns from traffic or location. For fleet vehicles, provide your authorization contacts and billing information. If possible, note the ambient temperature (crucial during Phoenix summers when heat affects repair priorities) and whether you have shade or safe waiting areas. This information helps our dispatch team select the right technician, equipment, and parts for your specific situation and location within the Phoenix metro area."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get Answers to Common Questions about Our Phoenix Mobile Diesel Repair Services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;