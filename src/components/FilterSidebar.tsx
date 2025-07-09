
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronDown } from "lucide-react";

interface FilterSidebarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const filterOptions = [
  "Infrastructure",
  "Data Warehouse", 
  "Real-time Data"
];

export const FilterSidebar = ({ selectedFilter, onFilterChange }: FilterSidebarProps) => {
  return (
    <div className="w-80 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 h-fit">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-white font-inter font-semibold text-lg">Type</h3>
        <ChevronDown className="w-5 h-5 text-white/60" />
      </div>
      
      <RadioGroup value={selectedFilter} onValueChange={onFilterChange}>
        <div className="space-y-4">
          {filterOptions.map((filter) => (
            <div key={filter} className="flex items-center space-x-3">
              <RadioGroupItem
                value={filter}
                id={filter}
                className="border-white/30 text-blue-600"
              />
              <label
                htmlFor={filter}
                className="text-white/90 font-inter font-medium cursor-pointer hover:text-white transition-colors"
              >
                {filter}
              </label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
