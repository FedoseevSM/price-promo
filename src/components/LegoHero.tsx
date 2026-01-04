import React from 'react';
import { Blocks } from 'lucide-react';
export function LegoHero() {
  return <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-lg rotate-12 opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-lg -rotate-12 opacity-20"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-400 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-500 rounded-lg -rotate-6 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-lg mb-8 animate-bounce">
          <Blocks className="w-10 h-10 text-blue-600 mr-3" />
          <span className="text-blue-900 font-bold tracking-wide uppercase text-sm">
            Конструктор Веб-Сервисов
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
          Построй свой <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500">
            воздушный замок
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Собирайте идеальное решение для вашего бизнеса модуль за модулем, как
          в любимом конструкторе, или выберите готовый набор.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all hover:-translate-y-1">
            Выбрать модули
          </button>
          <button className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all">
            Смотреть пакеты
          </button>
        </div>
      </div>
    </section>;
}