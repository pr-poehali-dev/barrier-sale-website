import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import RALColorSelector, { RALColor } from "@/components/RALColorSelector";
import BarrierGatePreview from "@/components/BarrierGatePreview";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "Автоматический шлагбаум",
      description: "Высокоскоростная система с дистанционным управлением",
      image:
        "https://cdn.poehali.dev/files/06dad277-0be7-4ab2-89c2-9033f54ea14c.png",
      features: [
        "Дистанционное управление",
        "Скорость 3-6 сек",
        "Длина стрелы до 6м",
      ],
      price: "от 45 000 ₽",
    },
    {
      id: 2,
      title: "Ручной шлагбаум",
      description: "Надежное механическое решение для малых объектов",
      image:
        "https://cdn.poehali.dev/files/06dad277-0be7-4ab2-89c2-9033f54ea14c.png",
      features: ["Простая установка", "Низкие затраты", "Длина стрелы до 4м"],
      price: "от 15 000 ₽",
    },
    {
      id: 3,
      title: "Промышленный шлагбаум",
      description: "Усиленная конструкция для интенсивного использования",
      image:
        "https://cdn.poehali.dev/files/06dad277-0be7-4ab2-89c2-9033f54ea14c.png",
      features: [
        "Усиленная конструкция",
        "Работа при -40°C",
        "Длина стрелы до 8м",
      ],
      price: "от 85 000 ₽",
    },
  ];

  const [selectedColor, setSelectedColor] = useState<RALColor | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const getGateType = (
    productId: number,
  ): "automatic" | "manual" | "industrial" => {
    switch (productId) {
      case 1:
        return "automatic";
      case 2:
        return "manual";
      case 3:
        return "industrial";
      default:
        return "automatic";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-slate-900">
            Наша продукция
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент шлагбаумов для любых задач — от простых
            механических до сложных автоматизированных систем
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-montserrat">
                  {product.title}
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedProduct(product.id)}
                        >
                          <Icon name="Palette" size={16} className="mr-2" />
                          Цвета
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>
                            Выбор цвета - {product.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-6">
                          <RALColorSelector
                            selectedColor={selectedColor}
                            onColorSelect={setSelectedColor}
                          />
                          <BarrierGatePreview
                            selectedColor={selectedColor}
                            gateType={getGateType(product.id)}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
