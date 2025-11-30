import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ".split("");

const mockGallery = [
  "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0f08bb4e-3d78-4ec7-ba7e-0a99899040dd.jpg",
  "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0ef1b41e-b0cd-4f88-8f30-a35bb0771584.jpg",
  "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/728fad1a-c3a7-4a06-acb0-8a298cd4c87c.jpg"
];

const Work = () => {
  const { id } = useParams();
  const workId = parseInt(id || "1");
  const [selectedImage, setSelectedImage] = useState(0);
  
  const letter = alphabet[workId - 1] || "А";
  const nextId = workId < 26 ? workId + 1 : 1;
  const prevId = workId > 1 ? workId - 1 : 26;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="ArrowLeft" size={18} />
                К каталогу
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Экология в искусстве
            </h1>
            <div className="w-24" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
              <span className="text-3xl font-serif font-bold text-primary">{letter}</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Произведение на букву {letter}
              </h2>
              <p className="text-muted-foreground mt-1">Автор: Не указан</p>
            </div>
          </div>

          <Card className="overflow-hidden mb-8 animate-scale-in border-border/60">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={mockGallery[selectedImage]} 
                  alt="Основное изображение"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex gap-2 overflow-x-auto">
                {mockGallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? "border-primary scale-105" 
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Миниатюра ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 animate-fade-in border-border/60" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="FileText" size={24} className="text-primary" />
                Анализ произведения
              </h3>
              <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
                <p>
                  Здесь будет размещён детальный анализ произведения, подготовленный вашими одногруппниками. 
                  Вы сможете добавить текст, описывающий экологические темы, затронутые в этом произведении искусства.
                </p>
                <p>
                  Анализ может включать описание сюжета, символов природы, отношения автора к экологическим проблемам, 
                  а также влияние произведения на общественное восприятие экологических вопросов.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 animate-fade-in border-border/60" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Lightbulb" size={24} className="text-primary" />
                Экологический контекст
              </h3>
              <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
                <p>
                  В этом разделе можно раскрыть более глубокие связи между произведением и экологическими темами. 
                  Как автор использует художественные средства для передачи экологических идей?
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between gap-4 pt-8 border-t border-border/40">
            <Link to={`/work/${prevId}`}>
              <Button variant="outline" className="gap-2">
                <Icon name="ChevronLeft" size={18} />
                <span className="hidden sm:inline">Предыдущее</span>
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <Icon name="Grid3x3" size={18} />
                <span className="hidden sm:inline">Каталог</span>
              </Button>
            </Link>
            <Link to={`/work/${nextId}`}>
              <Button variant="outline" className="gap-2">
                <span className="hidden sm:inline">Следующее</span>
                <Icon name="ChevronRight" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 mt-16 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Icon name="Leaf" size={16} className="text-primary" />
            <span>Проектная деятельность • Экология в искусстве</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Work;
