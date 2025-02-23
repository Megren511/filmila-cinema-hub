
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const FeaturedFilm = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl space-y-4 animate-fade-up">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Featured Film
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold">The Last Journey</h1>
          <p className="text-lg text-muted-foreground">
            A captivating story of adventure and self-discovery across untamed landscapes.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <Button className="gap-2">
              <PlayCircle className="h-5 w-5" />
              Watch Now
            </Button>
            <Button variant="secondary">More Info</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFilm;
