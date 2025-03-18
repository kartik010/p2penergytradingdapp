import { Leaf, Shield, Zap } from "lucide-react";
const features = [
    { icon: Leaf, title: "Better Returns", description: "Get higher returns for your renewable energy compared to grid buyback rates." },
    { icon: Zap, title: "Direct P2P Trading", description: "Connect directly with energy consumers in your community through our platform." },
    { icon: Shield, title: "Secure Platform", description: "Trade with confidence using Solana blockchain security." }
  ];
  
  export default function FeatureCards() {
    return (
      <section id="FeatureCards" className="ml-8 mt-16 py-10 bg-white mr-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg shadow-sm hover:shadow-md">
              <feature.icon className="h-20 w-20 rounded-xl text-energy-primary pt-4 pb-4 pr-4 pl-4 mb-4 text-[#34D399] bg-[#34d39920]" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }