
import Navbar from "@/components/Navbar";
import FeaturedFilm from "@/components/FeaturedFilm";
import FilmGrid from "@/components/FilmGrid";

const mockFilms = [
  {
    id: "1",
    title: "The Silent Echo",
    genre: "Drama",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Beyond the Horizon",
    genre: "Sci-Fi",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Urban Dreams",
    genre: "Documentary",
    imageUrl: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    title: "The Last Summer",
    genre: "Romance",
    imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <FeaturedFilm />
        <FilmGrid title="New Releases" films={mockFilms} />
      </main>
    </div>
  );
};

export default Index;
