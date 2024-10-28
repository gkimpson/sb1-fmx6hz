import { useState } from 'react';
import { SearchForm } from '@/components/SearchForm';
import { PlayerCard } from '@/components/PlayerCard';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, ListFilter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Pagination } from '@/components/Pagination';

// ... existing interfaces remain the same ...

function App() {
  const [attributes, setAttributes] = useState({
    pace: 70,
    shooting: 70,
    passing: 70,
    dribbling: 70,
    defending: 70,
    physical: 70,
  });

  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState<'overall' | 'position'>('overall');
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 9;

  // Extended mock data
  const mockPlayers = Array.from({ length: 50 }, (_, i) => ({
    name: `Player ${i + 1}`,
    position: ['ST', 'CAM', 'CM', 'CB', 'GK'][Math.floor(Math.random() * 5)],
    club: ['Manchester City', 'Liverpool', 'Arsenal', 'Chelsea'][Math.floor(Math.random() * 4)],
    age: 20 + Math.floor(Math.random() * 15),
    value: `€${(10 + Math.floor(Math.random() * 90))}M`,
    image: `https://picsum.photos/seed/${i}/200/200`,
    attributes: {
      pace: 60 + Math.floor(Math.random() * 40),
      shooting: 60 + Math.floor(Math.random() * 40),
      passing: 60 + Math.floor(Math.random() * 40),
      dribbling: 60 + Math.floor(Math.random() * 40),
      defending: 60 + Math.floor(Math.random() * 40),
      physical: 60 + Math.floor(Math.random() * 40),
    },
    overall: 75 + Math.floor(Math.random() * 20),
  }));

  const totalPages = Math.ceil(mockPlayers.length / playersPerPage);
  const currentPlayers = mockPlayers.slice(
    (currentPage - 1) * playersPerPage,
    currentPage * playersPerPage
  );

  const handleAttributeChange = (key: string, value: number) => {
    setAttributes(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSearch = () => {
    setShowResults(true);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Professional Player Scout</h1>
          <p className="text-emerald-200">Advanced player search based on performance attributes</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
          <div className="lg:sticky lg:top-6 space-y-6">
            <SearchForm 
              attributes={attributes}
              onAttributeChange={handleAttributeChange}
              onSearch={handleSearch}
            />
            
            {showResults && (
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <ListFilter className="w-4 h-4" />
                  <span>Sort Results</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={sortBy === 'overall' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('overall')}
                  >
                    By Rating
                  </Button>
                  <Button 
                    variant={sortBy === 'position' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('position')}
                  >
                    By Position
                  </Button>
                </div>
              </div>
            )}
          </div>

          {showResults && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Matching Players</h2>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-emerald-100">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="text-sm">{mockPlayers.length} players found</span>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {currentPlayers.map((player, index) => (
                  <PlayerCard key={index} player={player} />
                ))}
              </div>

              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;