import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/06dad277-0be7-4ab2-89c2-9033f54ea14c.png')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/75 z-10"></div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <h1 className="text-5xl font-bold mb-6 font-montserrat">
          Надежные шлагбаумы для вашего бизнеса
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Автоматические и ручные системы контроля доступа высочайшего качества.
          Защитите территорию с помощью проверенных решений от ведущего
          производителя.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            <Icon name="Phone" size={20} />
            Получить консультацию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-slate-900"
          >
            <Icon name="FileText" size={20} />
            Скачать каталог
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-300">15+</div>
            <div className="text-sm text-blue-100">лет опыта</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-300">500+</div>
            <div className="text-sm text-blue-100">установленных систем</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-300">24/7</div>
            <div className="text-sm text-blue-100">техподдержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
