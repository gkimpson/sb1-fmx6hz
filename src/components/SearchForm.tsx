import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, SlidersHorizontal, Footprints, Brain, Heart, Zap, Trophy } from 'lucide-react';

interface SearchFormProps {
  attributes: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
  onAttributeChange: (key: string, value: number) => void;
  onSearch: () => void;
}

export function SearchForm({ attributes, onAttributeChange, onSearch }: SearchFormProps) {
  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-500" />
              <h3 className="font-semibold">Pace</h3>
              <span className="ml-auto font-mono text-sm bg-emerald-100 px-2 py-1 rounded">
                {attributes.pace}
              </span>
            </div>
            <Slider
              value={[attributes.pace]}
              onValueChange={(value) => onAttributeChange('pace', value[0])}
              max={99}
              step={1}
              className="[&_[role=slider]]:bg-amber-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Footprints className="w-5 h-5 text-red-500" />
              <h3 className="font-semibold">Shooting</h3>
              <span className="ml-auto font-mono text-sm bg-emerald-100 px-2 py-1 rounded">
                {attributes.shooting}
              </span>
            </div>
            <Slider
              value={[attributes.shooting]}
              onValueChange={(value) => onAttributeChange('shooting', value[0])}
              max={99}
              step={1}
              className="[&_[role=slider]]:bg-red-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold">Passing</h3>
              <span className="ml-auto font-mono text-sm bg-emerald-100 px-2 py-1 rounded">
                {attributes.passing}
              </span>
            </div>
            <Slider
              value={[attributes.passing]}
              onValueChange={(value) => onAttributeChange('passing', value[0])}
              max={99}
              step={1}
              className="[&_[role=slider]]:bg-blue-500"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-purple-500" />
              <h3 className="font-semibold">Dribbling</h3>
              <span className="ml-auto font-mono text-sm bg-emerald-100 px-2 py-1 rounded">
                {attributes.dribbling}
              </span>
            </div>
            <Slider
              value={[attributes.dribbling]}
              onValueChange={(value) => onAttributeChange('dribbling', value[0])}
              max={99}
              step={1}
              className="[&_[role=slider]]:bg-purple-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold">Defending</h3>
              <span className="ml-auto font-mono text-sm bg-emerald-100 px-2 py-1 rounded">
                {attributes.defending}
              </span>
            </div>
            <Slider
              value={[attributes.defending]}
              onValueChange={(value) => onAttributeChange('defending', value[0])}
              max={99}
              step={1}
              className="[&_[role=slider]]:bg-emerald-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-orange-500" />
              <h3 className="font-semibold">Physical</h3>
              <span className="ml-auto font-mono text-sm bg-emerald-100 px-2 py-1 rounded">
                {attributes.physical}
              </span>
            </div>
            <Slider
              value={[attributes.physical]}
              onValueChange={(value) => onAttributeChange('physical', value[0])}
              max={99}
              step={1}
              className="[&_[role=slider]]:bg-orange-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={onSearch}>
          <Search className="w-4 h-4 mr-2" />
          Search Players
        </Button>
      </div>
    </Card>
  );
}