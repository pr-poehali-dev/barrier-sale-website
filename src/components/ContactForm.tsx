import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-montserrat text-slate-900">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку, и наш специалист проконсультирует вас по всем
              вопросам установки шлагбаумов
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Телефон</div>
                  <a
                    href="tel:88005508522"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    88005508522
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href="mailto:3160001@mail.ru"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    3160001@mail.ru
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Адрес</div>
                  <div className="text-gray-600">
                    СПб Ириновский пр. 2 БЦ Ника оф. 218
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Заказать консультацию</CardTitle>
              <CardDescription>
                Заполните форму, и мы перезвоним в течение 30 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Сообщение (необязательно)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
