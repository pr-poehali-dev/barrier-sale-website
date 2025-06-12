import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Shield",
      title: "Высокое качество",
      description:
        "Все изделия сертифицированы и проходят строгий контроль качества",
    },
    {
      icon: "Wrench",
      title: "Установка и обслуживание",
      description:
        "Полный цикл услуг: от проектирования до гарантийного обслуживания",
    },
    {
      icon: "Clock",
      title: "Быстрая доставка",
      description:
        "Собственный склад и логистика — доставим в кратчайшие сроки",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Более 15 лет опыта в сфере систем контроля доступа",
    },
    {
      icon: "Settings",
      title: "Индивидуальные решения",
      description: "Разработаем систему под ваши конкретные требования",
    },
    {
      icon: "Headphones",
      title: "Техподдержка 24/7",
      description: "Круглосуточная поддержка и оперативное решение проблем",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-slate-900">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексные решения с гарантией качества и надежности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat text-slate-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
