
const features = [
    {  title: "Solana Blockchains", description: "Benefit from lightning-fast transactions and minimal fees compared to traditional energy trading platforms." },
    {  title: "Real-Time Settlement", description: "Get paid instantly for your energy, unlike traditional systems that take days or weeks to process payments." },
    {  title: "Smart Contracts", description: "Automated, trustless trading with smart contracts ensures fair prices and immediate settlements." },
    {  title: "Lower Fees", description: "Save up to 80% on transaction fees compared to traditional energy trading platforms." }
  ];  
export default function FeaturesSection() {
    return (
      <section id="FeaturesSection" className="mt-16 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Platform?</h2>
        <p className="text-gray-700 text-center">Experience the future of energy trading with our cutting-edge technology and unique advantages.</p>
        <section className="py-10 bg-white ml-16 mr-16 mr-10 mt-16 rounded-lg ">
        <div className="container mx-auto grid md:grid-cols-4 gap-1">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg shadow-sm hover:shadow-md ">
    
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      </section>
      
    );
  }