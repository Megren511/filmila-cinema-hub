
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Film {
  id: string;
  title: string;
  genre: string;
  imageUrl: string;
}

interface FilmGridProps {
  title: string;
  films: Film[];
}

const FilmGrid = ({ title, films }: FilmGridProps) => {
  return (
    <section className="py-8">
      <div className="container">
        <h2 className="font-serif text-2xl font-semibold mb-6">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {films.map((film) => (
            <Card key={film.id} className="film-card group cursor-pointer">
              <div className="aspect-[2/3] relative overflow-hidden rounded-t-lg">
                <img
                  src={film.imageUrl}
                  alt={film.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 space-y-2">
                <Badge variant="secondary" className="mb-2">
                  {film.genre}
                </Badge>
                <h3 className="font-medium line-clamp-1">{film.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmGrid;
