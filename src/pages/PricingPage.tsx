import React, { useEffect, useState } from 'react';
import { MessageSquare, MessageCircle, Calculator, Image as ImageIcon, Star, HelpCircle } from 'lucide-react';
import { LegoHero } from '../components/LegoHero';
import { LegoModule, LegoColor } from '../components/LegoModule';
import { LegoPackage } from '../components/LegoPackage';
import { LegoIndustryPackage } from '../components/LegoIndustryPackage';
// Internal component for floating background bricks
const FloatingBrick = ({
  color,
  className,
  delay
}: {
  color: 'red' | 'blue' | 'yellow' | 'green';
  className: string;
  delay: string;
}) => {
  const colors = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-400',
    green: 'bg-green-500'
  };
  return <div className={`absolute w-8 h-6 rounded opacity-20 animate-float ${colors[color]} ${className}`} style={{
    animationDelay: delay
  }}>
      <div className="absolute -top-1 left-0 flex gap-1 w-full justify-center px-1">
        <div className={`w-2 h-1 rounded-t-sm ${colors[color]} brightness-90`} />
        <div className={`w-2 h-1 rounded-t-sm ${colors[color]} brightness-90`} />
      </div>
    </div>;
};
// Data for Modules
const modules = [{
  id: 1,
  title: 'Форма обратной связи',
  price: '5 000 ₽',
  description: 'Удобная форма для сбора заявок от клиентов с валидацией.',
  color: 'blue' as LegoColor,
  icon: MessageSquare
}, {
  id: 2,
  title: 'Виджет чата',
  price: '7 000 ₽',
  description: 'Живое общение с посетителями сайта в реальном времени.',
  color: 'red' as LegoColor,
  icon: MessageCircle
}, {
  id: 3,
  title: 'Калькулятор услуг',
  price: '6 000 ₽',
  description: 'Позвольте клиентам самим рассчитать стоимость услуг.',
  color: 'yellow' as LegoColor,
  icon: Calculator
}, {
  id: 4,
  title: 'Галерея работ',
  price: '4 000 ₽',
  description: 'Красивое портфолио для демонстрации ваших проектов.',
  color: 'green' as LegoColor,
  icon: ImageIcon
}, {
  id: 5,
  title: 'Виджет отзывов',
  price: '5 500 ₽',
  description: 'Покажите доверие клиентов через реальные отзывы.',
  color: 'blue' as LegoColor,
  icon: Star
}, {
  id: 6,
  title: 'Блок FAQ',
  price: '3 500 ₽',
  description: 'Ответы на частые вопросы для снижения нагрузки на поддержку.',
  color: 'red' as LegoColor,
  icon: HelpCircle
}];
// Data for Industry Packages
const industryPackages = [{
  id: 'beauty',
  title: 'Бьюти & Салоны красоты',
  description: 'Идеальное решение для салонов красоты, барбершопов и частных мастеров. Поможет привлечь клиентов и упростить запись.',
  imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
  modules: ['Форма онлайн-записи', 'Галерея работ', 'Виджет отзывов', 'Калькулятор услуг'],
  price: '22 000 ₽',
  color: 'red' as LegoColor
}, {
  id: 'restaurant',
  title: 'Рестораны & Кафе',
  description: 'Комплекс инструментов для общепита. Демонстрируйте меню, принимайте брони и заказы на доставку.',
  imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  modules: ['Онлайн меню', 'Система бронирования', 'Виджет доставки', 'Галерея блюд'],
  price: '28 000 ₽',
  color: 'yellow' as LegoColor
}, {
  id: 'factory',
  title: 'Производство & Заводы',
  description: 'Серьезные инструменты для B2B сектора. Помогите партнерам рассчитать стоимость и найти ответы на технические вопросы.',
  imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  modules: ['Калькулятор стоимости', 'Форма заявки', 'FAQ по производству', 'Каталог продукции'],
  price: '32 000 ₽',
  color: 'blue' as LegoColor
}, {
  id: 'medical',
  title: 'Медицина & Клиники',
  description: 'Доверие и удобство для пациентов. Запись к врачам и первичная консультация в удобном формате.',
  imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  modules: ['Запись на прием', 'Онлайн консультация', 'База врачей', 'FAQ по услугам'],
  price: '30 000 ₽',
  color: 'green' as LegoColor
}, {
  id: 'realestate',
  title: 'Недвижимость',
  description: 'Инструменты для риелторов и застройщиков. Покажите объекты во всей красе и помогите с расчетами.',
  imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  modules: ['Каталог объектов', 'Калькулятор ипотеки', 'Виртуальный тур', 'Форма обратной связи'],
  price: '35 000 ₽',
  color: 'red' as LegoColor
}, {
  id: 'education',
  title: 'Образование',
  description: 'Для школ, курсов и репетиторов. Организуйте учебный процесс и общение со студентами.',
  imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  modules: ['Расписание занятий', 'Личный кабинет', 'Система тестирования', 'Чат с преподавателем'],
  price: '26 000 ₽',
  color: 'blue' as LegoColor
}];
// Data for Standard Packages
const packages = [{
  id: 'starter',
  title: 'Стартовый',
  price: '15 000 ₽',
  features: ['Форма обратной связи', 'Блок FAQ', 'Галерея работ', 'Базовая настройка'],
  color: 'green' as LegoColor,
  isPopular: false
}, {
  id: 'business',
  title: 'Бизнес',
  price: '25 000 ₽',
  features: ['Все из Стартового', 'Виджет чата', 'Калькулятор услуг', 'Расширенная аналитика', 'Месяц поддержки'],
  color: 'blue' as LegoColor,
  isPopular: true
}, {
  id: 'premium',
  title: 'Премиум',
  price: '35 000 ₽',
  features: ['Все модули включены', 'Приоритетная поддержка', 'Персональный менеджер', 'Индивидуальный дизайн', 'SEO оптимизация'],
  color: 'red' as LegoColor,
  isPopular: false
}];
export function PricingPage() {
  // Simple scroll reveal effect
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden relative">
      {/* Global Floating Bricks Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full">
        <FloatingBrick color="red" className="top-[20%] left-[5%]" delay="0s" />
        <FloatingBrick color="blue" className="top-[40%] right-[8%]" delay="2s" />
        <FloatingBrick color="yellow" className="bottom-[30%] left-[10%]" delay="4s" />
        <FloatingBrick color="green" className="top-[60%] right-[15%]" delay="1s" />
        <FloatingBrick color="red" className="bottom-[10%] right-[5%]" delay="3s" />
        <FloatingBrick color="blue" className="top-[15%] right-[25%]" delay="5s" />
      </div>

      <LegoHero />

      {/* Modules Section */}
      <section className="py-20 px-4 container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-black text-gray-900 mb-4 hover:scale-105 transition-transform cursor-default inline-block">
            Модули по кирпичикам
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Соберите свой уникальный набор функций. Платите только за то, что
            действительно нужно вашему бизнесу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {modules.map((module, index) => <div key={module.id} className={`transition-all duration-700 delay-[${index * 100}ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <LegoModule title={module.title} price={module.price} description={module.description} color={module.color} icon={module.icon} />
            </div>)}
        </div>
      </section>

      {/* Animated Divider */}
      <div className="w-full h-24 relative overflow-hidden my-8">
        <div className="absolute inset-0 bg-lego-pattern opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        {/* Connector bumps */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8">
          {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-gray-200 shadow-inner"></div>)}
        </div>
      </div>

      {/* Industry Packages Section */}
      <section className="py-20 px-4 bg-gray-100 relative z-10">
        {/* Decorative background blob */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 hover:scale-105 transition-transform cursor-default inline-block">
              Готовые решения по отраслям
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специализированные наборы, адаптированные под конкретную
              индустрию. Мы уже подобрали лучшие кирпичики для вашего бизнеса.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {industryPackages.map(pkg => <LegoIndustryPackage key={pkg.id} title={pkg.title} description={pkg.description} imageUrl={pkg.imageUrl} modules={pkg.modules} price={pkg.price} color={pkg.color} />)}
          </div>
        </div>
      </section>

      {/* Animated Divider */}
      <div className="w-full h-24 relative overflow-hidden my-8">
        <div className="absolute inset-0 bg-lego-pattern opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8">
          {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-gray-200 shadow-inner"></div>)}
        </div>
      </div>

      {/* Standard Packages Section */}
      <section className="py-20 px-4 bg-white relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 hover:scale-105 transition-transform cursor-default inline-block">
              Универсальные пакеты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Сбалансированные пакеты решений для быстрого старта. Выгоднее, чем
              собирать по отдельности.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            {packages.map(pkg => <LegoPackage key={pkg.id} title={pkg.title} price={pkg.price} features={pkg.features} color={pkg.color} isPopular={pkg.isPopular} />)}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-900 text-white text-center px-4 relative overflow-hidden">
        {/* Footer background animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-spin-slow origin-center scale-150"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:text-yellow-400 transition-colors cursor-default">
            Не нашли нужную комбинацию?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Мы поможем спроектировать индивидуальное решение под ваши задачи,
            как сложный замок из тысяч деталей.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20">
            Связаться с архитектором
          </button>
        </div>
      </section>
    </div>;
}