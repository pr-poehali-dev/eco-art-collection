import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ".split("");

const defaultGallery = [
  "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0f08bb4e-3d78-4ec7-ba7e-0a99899040dd.jpg",
  "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0ef1b41e-b0cd-4f88-8f30-a35bb0771584.jpg",
  "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/728fad1a-c3a7-4a06-acb0-8a298cd4c87c.jpg"
];

const galleryData: Record<number, string[]> = {
  1: [
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/b8a6e5fa-ae36-4e33-90cf-05318c8cb3d5.jpg",
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0f08bb4e-3d78-4ec7-ba7e-0a99899040dd.jpg",
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0ef1b41e-b0cd-4f88-8f30-a35bb0771584.jpg",
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/728fad1a-c3a7-4a06-acb0-8a298cd4c87c.jpg"
  ],
  3: [
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/e659f408-fd97-4294-a3c1-caae2416aa38.jpg",
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0f08bb4e-3d78-4ec7-ba7e-0a99899040dd.jpg",
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0ef1b41e-b0cd-4f88-8f30-a35bb0771584.jpg"
  ],
  4: [
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/c2dcd2f0-2f6b-4f79-899b-c79497f8a0a1.jpg",
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/728fad1a-c3a7-4a06-acb0-8a298cd4c87c.jpg",
    "https://cdn.poehali.dev/projects/d409d741-12c4-419f-af5b-acc9a2b3292b/files/0ef1b41e-b0cd-4f88-8f30-a35bb0771584.jpg"
  ]
};

const workData: Record<number, { title: string; author: string; content: JSX.Element }> = {
  1: {
    title: "Аватар",
    author: "Джеймс Кэмерон",
    content: (
      <>
        <h4 className="text-xl font-serif font-semibold text-foreground mb-3">1. Отношение автора и персонажей к экологической проблеме</h4>
        <p className="mb-4">
          Режиссёр Джеймс Кэмерон очень чётко выражает своё глубокое уважение к природе и серьёзное беспокойство по поводу её разрушения. В фильме «Аватар» экология — неотъемлемая часть сюжета и символ отношения к окружающему миру. Персонажи, живущие на Пандоре, племя на'ви, гармонично сосуществуют с природой, испытывают к ней благоговение и защищают её весь мир. Для них природа — это не просто среда обитания, а живая структура, с которой они связаны духовно. Противопоставляются им люди, которые вторгаются на планету ради добычи ресурсов, без разбирательств уничтожая экологическую систему. Такой конфликт подчёркивает конфликт человека и природы, и негативное отношение автора к эксплуататорскому отношению к экологии.
        </p>
        <h4 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">2. Выражение собственного мнения</h4>
        <p className="mb-4">
          Лично я считаю, что «Аватар» — очень важный фильм, который заставляет задуматься о последствиях бездумного использования природных ресурсов. В нашем мире, с учётом глобального потепления, вырубки лесов и загрязнения природы, тема сохранения экологии становится всё актуальнее. Фильм показывает, что устойчивое и уважительное отношение к природе возможно и необходимо. Сочетание фантастики с реальностью делает послание фильма более сильным и вдохновляющим для зрителя.
        </p>
        <h4 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">3. Анализ пересечения с реальностью</h4>
        <p className="mb-4">
          Конфликт в «Аватаре» близок к реальным ситуациям — вырубка тропических лесов Амазонии, добыча полезных ископаемых на экваторе, загрязнение планеты ради прибыли. Мир Пандоры — метафора нашей Земли, где борьба за выживание и противостояние человеку-созидателю и человеку-разрушителю происходит ежедневно. Также фильм затрагивает вопросы культурного уничтожения коренных народов и их традиционного образа жизни, что актуально для многих регионов мира. Таким образом, «Аватар» — не только фантастический боевик, но и серьёзное социально-экологическое высказывание, призывающее к переосмыслению нашего отношения к природе и друг к другу.
        </p>
        <p className="text-right text-muted-foreground mt-6 italic">Матин Матвей</p>
      </>
    )
  },
  3: {
    title: "ВАЛЛ-И",
    author: "Эндрю Стэнтон",
    content: (
      <>
        <h4 className="text-xl font-serif font-semibold text-foreground mb-3">Даже роботы могут чувствовать!</h4>
        <p className="mb-4">
          Мультфильм «ВАЛЛ-И» режиссера Эндрю Стэнтона — это не только увлекательная научно-фантастическая история, но и мощное экологическое послание. Автор через образ главного героя, робота ВАЛЛ-И, и окружающую его постапокалиптическую Землю поднимает важные вопросы о состоянии окружающей среды и ответственности человека за будущее планеты.
        </p>
        <p className="mb-4">
          Отношение автора к экологической проблеме очевидно: он показывает, что безответственное потребление и загрязнение привели к разрушению Земли. Мусор, заполонивший планету, символизирует последствия человеческой бездумной деятельности. ВАЛЛ-И, несмотря на свою механическую природу, проявляет заботу о природе, собирая интересные предметы и проявляя любопытство к окружающему миру. Его искреннее желание сохранить красоту и уникальность планеты отражает надежду на возможность перемен и восстановления.
        </p>
        <p className="mb-4">
          Герои мультфильма — ВАЛЛ-И и ЕВА — представляют разные отношения к экологической проблеме. ВАЛЛ-И — это символ стойкости и любви к природе, он заботится о своем мире, несмотря на его разрушенность. ЕВА, вначале — робот, предназначенный для поиска жизни на Земле, символизирует надежду и возможность возрождения. Их взаимодействие показывает, что даже в безнадежных условиях есть место для добрых поступков и заботы о будущем.
        </p>
        <p className="mb-4">
          Лично я считаю персонажей очень трогательными и вдохновляющими. ВАЛЛ-И вызывает симпатию своей искренностью и добротой, а ЕВА — своей решимостью и способностью к чувствам. Они демонстрируют, что даже механические существа могут обладать человеческими качествами, что подчеркивает важность ценностей, таких как любовь, забота и ответственность.
        </p>
        <p className="mb-4">
          Пересечение с реальностью очевидно: современное общество сталкивается с экологическими вызовами — загрязнением, изменением климата, истощением ресурсов. Мультфильм напоминает нам о необходимости пересмотреть наши привычки и начать заботиться о природе.
        </p>
        <p className="text-right text-muted-foreground mt-6 italic">Голик Роман</p>
      </>
    )
  },
  4: {
    title: "Во все тяжкие",
    author: "Винс Гиллиган",
    content: (
      <>
        <p className="mb-4">
          Сериал «Во все тяжкие» (английское название «Breaking Bad»), на первый взгляд, сосредоточен на криминальной драме, моральном падении и личных трансформациях персонажей. Однако важной, хотя и редко обсуждаемой, составляющей произведения является экологическая проблема, проявляющаяся как в прямых сюжетных линиях, так и в косвенном изображении разрушительных последствий химического производства и наркотрафика. Авторы сериала используют экологическую тему не как центральную, но как постоянно присутствующий подспудный элемент, усиливающий ощущение реальности и социальной критики.
        </p>
        <h4 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">1. Собственное мнение</h4>
        <p className="mb-4">
          Одним из ключевых мотивов сериала является производство метамфетамина—высокотоксичного химического вещества. Создание наркотика в кустарных лабораториях сопровождается массовым загрязнением окружающей среды: в реальности известно, что на каждый килограмм «мета» приходится до шести килограммов опасных химических отходов. Одним из первых и наиболее заметных проявлений экологической угрозы становится эпизод с растворением тела в кислоте. Неумелая попытка Джесси Пинкмана избавиться от трупа приводит к разрушению ванной и распространению опасных химикатов по дому. Эта сцена отражает суть проблемы: преступная деятельность неизбежно создаёт побочный экологический ущерб, при этом преступники зачастую не обладают ни знаниями, ни этикой, чтобы минимизировать его. С развитием сюжета экологическая составляющая становится системной. Мобильные лаборатории, подпольные производства—всё это напоминает о реальной проблеме нелегального производства наркотиков, которое в США и других странах сопровождается загрязнением почвы, водоёмов и воздуха.
        </p>
        <h4 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">2. Отношение персонажей и автора к экологической проблеме</h4>
        <p className="mb-4">
          Уолтер Уайт, главный персонаж сериала,—профессиональный химик, который, как специалист, прекрасно понимает, насколько опасным является производство наркотиков для экологии. Но его моральная деградация проявляется и в том, что экологический вред его почти не волнует. Авторская позиция здесь очевидна: утрата моральных ориентиров делает человека безразличным к последствиям собственных действий, которые выходят далеко за пределы личной сферы. Авторы сериала не акцентируют внимание зрителя на экологической проблеме напрямую—нет публичных дискуссий или сюжетных линий, посвящённых экологическим движениям. Но именно эта «вневидимость» является ключом к пониманию замысла: экологический ущерб становится естественным фоном криминальной деятельности, как если бы загрязнение природы было неизбежной составляющей человеческого зла. Тем самым сериал говорит зрителю: разрушение природы—это не абстрактная проблема, а прямое следствие человеческих поступков, зачастую рутинных и незаметных. Уничтожение окружающей среды в сериале—это не отдельная тема, а «симптом моральной болезни», поразившей персонажей и общество.
        </p>
        <h4 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">3. Пересечение фильма с реальностью</h4>
        <p className="mb-4">
          Нелегальное производство метамфетамина — одна из самых серьёзных экологических проблем в ряде штатов США. По оценкам экологических служб, на каждый килограмм произведённого вещества приходится от нескольких до десятков килограммов токсичных отходов. Эти отходы часто выливаются в землю, канализацию или выбрасываются на свалки, вызывая загрязнение воды, почвы, отравления животных и людей. Сериал тонко отражает эту реальность: от сцен с выбрасыванием химикатов до мобильных лабораторий в лесах и пустынях. В отличие от художественного допущения о почти стерильной лаборатории Густаво Фринга, одного из ключевых антагонистов сериала, реальная практика куда более опасна и приводит к разрушению целых домов и участков земли. В этом смысле «Во все тяжкие» создаёт умеренно реалистичное, но всё же смягчённое изображение экологического урона, показывая лишь часть проблемы.
        </p>
        <h4 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">Заключение</h4>
        <p className="mb-4">
          Экологическая проблематика в «Во все тяжкие»—это не фоновый шум, а важный элемент комплексного изображения разрушения—личного, социального и экологического. Авторы показывают, что последствия моральных выборов персонажей выходят далеко за пределы их жизни, затрагивая природу и общество. В сериале много сцен, которые демонстрируют: когда человек перестаёт видеть в мире ценность, он разрушает не только других людей, но и саму среду, в которой живёт. Экологическая катастрофа здесь—это продолжение катастрофы человеческой души.
        </p>
        <p className="text-right text-muted-foreground mt-6 italic">Спицын Кирилл</p>
      </>
    )
  }
};

const Work = () => {
  const { id } = useParams();
  const workId = parseInt(id || "1");
  const [selectedImage, setSelectedImage] = useState(0);
  
  const isCinema = workId <= 26;
  const letterIndex = isCinema ? workId - 1 : workId - 27;
  const letter = alphabet[letterIndex] || "А";
  
  const nextId = isCinema 
    ? (workId < 26 ? workId + 1 : 1)
    : (workId < 52 ? workId + 1 : 27);
  const prevId = isCinema
    ? (workId > 1 ? workId - 1 : 26)
    : (workId > 27 ? workId - 1 : 52);
  
  const gallery = galleryData[workId] || defaultGallery;
  
  const currentWork = workData[workId] || {
    title: `Произведение на букву ${letter}`,
    author: "Автор не указан",
    content: (
      <>
        <p>
          Здесь будет размещён детальный анализ произведения, подготовленный вашими одногруппниками. 
          Вы сможете добавить текст, описывающий экологические темы, затронутые в этом произведении искусства.
        </p>
        <p>
          Анализ может включать описание сюжета, символов природы, отношения автора к экологическим проблемам, 
          а также влияние произведения на общественное восприятие экологических вопросов.
        </p>
      </>
    )
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="ArrowLeft" size={18} />
                {isCinema ? 'Кино' : 'Литература'}
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
                {currentWork.title}
              </h2>
              <p className="text-muted-foreground mt-1">Автор: {currentWork.author}</p>
            </div>
          </div>

          <Card className="overflow-hidden mb-8 animate-scale-in border-border/60">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={gallery[selectedImage]} 
                  alt="Основное изображение"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex gap-2 overflow-x-auto">
                {gallery.map((img, index) => (
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
                {currentWork.content}
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