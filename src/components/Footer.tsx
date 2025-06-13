import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">
              Шлагбаум СП
            </h3>
            <p className="text-gray-300 mb-4">
              Надежные системы контроля доступа для вашего бизнеса. 15 лет опыта
              и тысячи довольных клиентов.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:88005508522"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Icon name="Phone" size={16} />
              </a>
              <a
                href="mailto:3160001@mail.ru"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Icon name="Mail" size={16} />
              </a>
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
              <a
                href="tel:88005508522"
                className="text-blue-400 hover:text-blue-300"
              >
                8 800 550 85 22
              </a>
              <a
                href="mailto:3160001@mail.ru"
                className="text-blue-400 hover:text-blue-300"
              >
                3160001@mail.ru
              </a>
              <div>СПб Ириновский пр. 2 БЦ Ника оф. 218</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 СигмаПаркигн. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
