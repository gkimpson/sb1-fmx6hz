import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, EuroIcon } from 'lucide-react';

interface PlayerCardProps {
  player: {
    name: string;
    position: string;
    club: string;
    age: number;
    value: string;
    image: string;
    attributes: {
      pace: number;
      shooting: number;
      passing: number;
      dribbling: number;
      defending: number;
      physical: number;
    };
    overall: number;
  };
}

export function PlayerCard({ player }: PlayerCardProps) {
  const getAttributeColor = (value: number) => {
    if (value >= 85) return 'bg-emerald-500';
    if (value >= 75) return 'bg-lime-500';
    if (value >= 65) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="flex items-start p-4 gap-4">
        <div className="relative flex-shrink-0">
          <img 
            src={player.image} 
            alt={player.name} 
            className="w-20 h-20 object-cover rounded-lg"
          />
          <Badge 
            variant="secondary" 
            className={`absolute -top-2 -right-2 text-sm font-bold ${
              player.overall >= 85 ? 'bg-emerald-500 text-white' : 
              player.overall >= 80 ? 'bg-lime-500 text-white' : 
              'bg-yellow-500 text-white'
            }`}
          >
            {player.overall}
          </Badge>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base mb-1 truncate">{player.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="font-mono text-xs">{player.position}</Badge>
            <span className="text-xs text-muted-foreground truncate">{player.club}</span>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{player.age} yrs</span>
            </div>
            <div className="flex items-center gap-1">
              <EuroIcon className="w-3 h-3" />
              <span>{player.value}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {Object.entries(player.attributes).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="capitalize">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
              <Progress 
                value={value} 
                className={`h-1 ${getAttributeColor(value)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}