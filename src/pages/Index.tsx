import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const cinemaAlphabet = "АБВВГГИМНОПРТ".split("");
const literatureAlphabet = "ДЛМПППСЦ".split("");

const cinemaWorksData: Record<number, { title: string; author: string }> = {
  1: { title: "Аватар", author: "Джеймс Кэмерон" },
  2: { title: "Безумный Макс: Дорога ярости", author: "Джордж Миллер" },
  3: { title: "ВАЛЛ-И", author: "Эндрю Стэнтон" },
  4: { title: "Во все тяжкие", author: "Винс Гиллиган" },
  5: { title: "Гонка на вымирание", author: "Луи Сайхойос" },
  6: { title: "Геошторм", author: "Дин Девлин" },
  7: { title: "Интерстеллар", author: "Кристофер Нолан" },
  8: { title: "Марсианин", author: "Ридли Скотт" },
  9: { title: "Наша планета", author: "Netflix" },
  10: { title: "Обливион", author: "Джозеф Косински" },
  11: { title: "Планета людей", author: "Джефф Гиббс" },
  12: { title: "Рио", author: "Карлос Салданья" },
  13: { title: "Тёмные воды", author: "Тодд Хейнс" }
};

const literatureWorksData: Record<number, { title: string; author: string }> = {
  16: { title: "Дюна", author: "Фрэнк Герберт" },
  17: { title: "Лоракс", author: "Теодор Сьюз" },
  18: { title: "Маленький принц", author: "Антуан де Сент-Экзюпери" },
  19: { title: "Прощание с Матёрой", author: "Валентин Распутин" },
  20: { title: "Под куполом", author: "Стивен Кинг" },
  21: { title: "Пикник на обочине", author: "Аркадий и Борис Стругацкие" },
  22: { title: "Светлячок", author: "Харлан Эллисон" },
  23: { title: "Царь-рыба", author: "Виктор Астафьев" }
};

const createWorks = (
  dataMap: Record<number, { title: string; author: string }>, 
  alphabet: string[], 
  idOffset: number
) => {
  return alphabet.map((letter, index) => {
    const id = index + 1 + idOffset;
    const workInfo = dataMap[id] || {
      title: `Произведение на букву ${letter}`,
      author: "Автор не указан"
    };
    
    return {
      id,
      letter,
      title: workInfo.title,
      author: workInfo.author,
      preview: index % 3 === 0 
        ? "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0f08bb4e-3d78-4ec7-ba7e-0a99899040dd.jpg"
        : index % 3 === 1
        ? "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0ef1b41e-b0cd-4f88-8f30-a35bb0771584.jpg"
        : "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/728fad1a-c3a7-4a06-acb0-8a298cd4c87c.jpg"
    };
  });
};

const cinemaWorks = createWorks(cinemaWorksData, cinemaAlphabet, 0);
const literatureWorks = createWorks(literatureWorksData, literatureAlphabet, 15);

const WorksGrid = ({ works }: { works: typeof cinemaWorks }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
    {works.map((work, index) => (
      <Link 
        key={work.id} 
        to={`/work/${work.id}`}
        className="group"
        style={{ animationDelay: `${index * 30}ms` }}
      >
        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border/60 animate-fade-in">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img 
              src={work.preview} 
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute top-3 left-3 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-primary/30">
              <span className="text-2xl font-serif font-bold text-primary">{work.letter}</span>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm md:text-base">
              {work.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{work.author}</p>
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center">
            Экология в искусстве:
            <br />
            <span className="text-3xl md:text-4xl">от А до Я</span>
          </h1>
          <div className="max-w-3xl mx-auto mt-4 space-y-3">
            <p className="text-center text-muted-foreground text-lg">
              Сборник произведений о взаимосвязи природы и творчества
            </p>
            <p className="text-center text-muted-foreground text-base leading-relaxed">
              Этот проект представляет собой исследование того, как кинематограф и литература осмысляют экологические проблемы современности. Здесь собраны анализы произведений, которые поднимают вопросы взаимодействия человека и природы, показывают последствия экологических катастроф и призывают к ответственному отношению к окружающему миру.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="cinema" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="cinema" className="gap-2">
              <Icon name="Film" size={18} />
              Кино
            </TabsTrigger>
            <TabsTrigger value="literature" className="gap-2">
              <Icon name="BookOpen" size={18} />
              Литература
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="cinema" className="mt-6">
            <WorksGrid works={cinemaWorks} />
          </TabsContent>
          
          <TabsContent value="literature" className="mt-6">
            <WorksGrid works={literatureWorks} />
          </TabsContent>
        </Tabs>
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

export default Index;