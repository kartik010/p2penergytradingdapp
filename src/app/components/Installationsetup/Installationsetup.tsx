import { AudioWaveform, Wifi, Settings } from "lucide-react";
const features = [
    { icon: AudioWaveform, title: "Smart Meter", description: "Our advanced smart meter accurately measures your energy production and consumption in real-time, enabling precise trading." },
    { icon: Wifi, title: "IoT Gateway", description: "Securely connects your smart meter to our platform, enabling automated trading and real-time monitoring of your energy." },
    { icon: Settings, title: "Easy Setup", description: "Professional installation service available. Our team ensures your system is properly configured and ready to trade." }
  ];  
export default function Installationsetup() {
    return (
      <section id="Installationsetup" className="py-16 bg-[#fff]">
        <h2 className="text-3xl font-bold mb-6 text-center">Smart Grid Integration</h2>
        <p className="text-gray-700 text-center">Get started with our easy-to-install smart meter and IoT device kit to begin trading your renewable energy.</p>
        <section className="mt-16 py-10 bg-white ml-10 mr-10 rounded-lg shadow-lg bg-[#10ad3a22]">
        <div className="container mx-auto grid md:grid-cols-3 gap-1">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg shadow-sm hover:shadow-md ">
              <feature.icon className="h-20 w-20 rounded-xl text-energy-primary pt-4 pb-4 pr-4 pl-4 mb-4 text-[#34D399] bg-[#34d39920]" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      </section>
      
    );
  }