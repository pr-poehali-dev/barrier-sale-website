import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const packages = [
    {
      name: "Базовый",
      price: "от 15 000 ₽",
      description: "Идеально для небольших объектов",
      features: [
        "Ручной шлагбаум",
        "Базовая установка",
        "Гарантия 1 год",
        "Консультация специалиста",
      ],
      popular: false,
    },
    {
      name: "Стандартный",
      price: "от 45 000 ₽",
      description: "Оптимальное решение для большинства задач",
      features: [
        "Автоматический шлагбаум",
        "Пульт дистанционного управления",
        "Профессиональная установка",
        "Гарантия 2 года",
        "Техподдержка 24/7",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "от 85 000 ₽",
      description: "Для промышленных объектов",
      features: [
        "Промышленный шлагбаум",
        "Система контроля доступа",
        "Интеграция с СКУД",
        "Установка и настройка",
        "Гарантия 3 года",
        "Приоритетная техподдержка",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-slate-900">
            Пакеты услуг
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий пакет или закажите индивидуальное решение
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.popular ? "ring-2 ring-blue-500 shadow-lg" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-montserrat">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600 my-2">
                  {pkg.price}
                </div>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-3"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"}`}
                >
                  Заказать консультацию
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
