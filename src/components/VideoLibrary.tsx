import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Alimentação Saudável: Guia Completo",
    thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    duration: "15:30",
    category: "Nutrição",
  },
  {
    id: 2,
    title: "Exercícios em Casa: Rotina de 20 minutos",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    duration: "20:45",
    category: "Fitness",
  },
  {
    id: 3,
    title: "Saúde Mental: Técnicas de Relaxamento",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    duration: "12:15",
    category: "Bem-estar",
  },
  {
    id: 4,
    title: "Prevenção de Doenças Cardíacas",
    thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc",
    duration: "18:20",
    category: "Saúde",
  },
  {
    id: 5,
    title: "Yoga para Iniciantes",
    thumbnail: "https://images.unsplash.com/photo-1588286840104-8957b019727f",
    duration: "25:00",
    category: "Fitness",
  },
  {
    id: 6,
    title: "Importância do Sono de Qualidade",
    thumbnail: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
    duration: "10:30",
    category: "Bem-estar",
  },
];

const VideoLibrary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="group cursor-pointer hover:shadow-large transition-all duration-300 overflow-hidden"
        >
          <CardContent className="p-0">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary-foreground" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
              <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-medium">
                {video.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VideoLibrary;
