import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">
              ШлагбаумПро
            </h3>
            <p className="text-gray-300 mb-4">
              Надежные системы контроля доступа для вашего бизнеса. 15 лет опыта
              и тысячи довольных клиентов.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={16} />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={16} />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={16} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Продукция</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Автоматические шлагбаумы</li>
              <li>Ручные шлагбаумы</li>
              <li>Промышленные системы</li>
              <li>Запчасти и аксессуары</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Консультации</li>
              <li>Проектирование</li>
              <li>Установка</li>
              <li>Техническое обслуживание</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <div>+7 (495) 123-45-67</div>
              <div>info@shlagbaum.ru</div>
              <div>г. Москва, ул. Примерная, д. 123</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ШлагбаумПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
