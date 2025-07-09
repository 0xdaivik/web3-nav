
import { useState } from "react";
import { ArrowLeft, Copy, Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const BlockchainRPC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const { toast } = useToast();
  
  const networks = [{
    name: "Ethereum (Sepolia)",
    location: "us-central1",
    jsonRpcEndpoint: "http://35.226.223.236:8545",
    webSocketEndpoint: "wss://blockchain.googleapis.com/v1/projects/agile-being-..."
  }, {
    name: "Beacon (Sepolia)", 
    location: "us-central1",
    jsonRpcEndpoint: "http://35.226.223.236:3500",
    webSocketEndpoint: "wss://blockchain.googleapis.com/v1/projects/agile-being-..."
  }];
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "RPC endpoint has been copied successfully.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

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
          <div className="flex items-center gap-4 mb-6">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Blockchain RPC</span>
              <span>/</span>
              <span>Blockchain API</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h1 className="text-white font-inter font-bold text-5xl mb-4 leading-tight">
              Blockchain RPC
            </h1>
            <p className="text-white/80 font-inter text-xl max-w-4xl leading-relaxed">
              Blockchain RPC is an enterprise-grade service to read and write to blockchains via their native APIs.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          {/* Table Container */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/80 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      Chain (Network)
                      <button className="text-white/40 hover:text-white/60 transition-colors">↑</button>
                    </div>
                  </th>
                  
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/80 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      JSON-RPC endpoint
                      <button className="text-white/40 hover:text-white/60 transition-colors">?</button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {networks.map((network, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
                      {network.name}
                    </td>
                    
                    <td className="px-6 py-4 text-sm text-white/80">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => copyToClipboard(network.jsonRpcEndpoint)} 
                          className="text-blue-400 hover:text-blue-300 transition-colors p-1 rounded hover:bg-white/10"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <span className="font-mono text-sm text-white/90 bg-white/5 px-3 py-1 rounded border border-white/10">
                          {network.jsonRpcEndpoint}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainRPC;
