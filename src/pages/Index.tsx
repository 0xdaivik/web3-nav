import { useState } from "react";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";
import { Database, Zap, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const navigate = useNavigate();

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const getDisplayedCards = () => {
    // If no filter is selected, show all real product cards (no coming soon cards)
    if (!selectedFilter) {
      return [
        {
          title: "Blockchain Node Engine",
          subtitle: "By Microsoft",
          description: "Fully managed node hosting for building on Ethereum",
          buttonText: "Create a node",
          icon: <Database className="w-6 h-6 text-blue-400" />,
          buttonLink: "https://azure-web3.gitbook.io/azure-blockchain-node-engine"
        },
        {
          title: "Blockchain RPC",
          subtitle: "By Microsoft",
          description: "Enterprise-grade RPC solution for Ethereum",
          buttonText: "Quickstart",
          icon: <Zap className="w-6 h-6 text-blue-400" />,
          onClick: () => navigate("/blockchain-rpc")
        },
        {
          title: "Real-time Analytics",
          subtitle: "By Microsoft",
          description: "Stream and analyze blockchain data in real-time",
          buttonText: "Get started",
          icon: <Activity className="w-6 h-6 text-blue-400" />,
          buttonLink: "https://web3-ai-six.vercel.app/"
        }
      ];
    }

    if (selectedFilter === "Infrastructure") {
      return [
        {
          title: "Blockchain Node Engine",
          subtitle: "By Microsoft",
          description: "Fully managed node hosting for building on Ethereum",
          buttonText: "Create a node",
          icon: <Database className="w-6 h-6 text-blue-400" />,
          buttonLink: "https://azure-web3.gitbook.io/azure-blockchain-node-engine"
        },
        {
          title: "Blockchain RPC",
          subtitle: "By Microsoft",
          description: "Enterprise-grade RPC solution for Ethereum",
          buttonText: "Quickstart",
          icon: <Zap className="w-6 h-6 text-blue-400" />,
          onClick: () => navigate("/blockchain-rpc")
        }
      ];
    }

    if (selectedFilter === "Real-time Data") {
      return [
        {
          title: "Real-time Analytics",
          subtitle: "By Microsoft",
          description: "Stream and analyze blockchain data in real-time",
          buttonText: "Get started",
          icon: <Activity className="w-6 h-6 text-blue-400" />,
          buttonLink: "https://web3-ai-six.vercel.app/"
        },
        {
          title: "",
          subtitle: "",
          description: "",
          buttonText: "",
          isComingSoon: true,
          key: "real-time-coming-soon"
        }
      ];
    }

    // Show coming soon cards for other filters
    return Array.from({ length: 2 }, (_, i) => ({
      title: "",
      subtitle: "",
      description: "",
      buttonText: "",
      isComingSoon: true,
      key: `${selectedFilter}-${i}`
    }));
  };

  const displayedCards = getDisplayedCards();

  return (
    <div className="min-h-screen bg-black font-inter">
      {/* Grid Background */}
      <div 
        className="fixed inset-0 bg-grid-pattern bg-grid opacity-50" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)'
        }} 
      />
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <h1 className="text-white font-inter font-bold text-5xl mb-4 leading-tight">
            Discover blockchain technology with Azure Web3
          </h1>
          <p className="text-white/80 font-inter text-xl max-w-4xl leading-relaxed">
            Find all the different products Microsoft Azure that and the community have built for blockchain developers
          </p>
        </div>

        {/* Main Layout */}
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar 
            selectedFilter={selectedFilter} 
            onFilterChange={handleFilterChange} 
          />

          {/* Content Area */}
          <div className="flex-1">
            {selectedFilter && (
              <div className="mb-6">
                <h2 className="text-white/60 font-inter text-sm mb-2">
                  Displaying {displayedCards.length} items
                </h2>
                <h3 className="text-purple-400 font-inter font-semibold text-2xl">
                  {selectedFilter}
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCards.map((card, index) => (
                <ProductCard
                  key={card.key || index}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  buttonText={card.buttonText}
                  icon={card.icon}
                  isComingSoon={card.isComingSoon}
                  onClick={card.onClick}
                  buttonLink={card.buttonLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
