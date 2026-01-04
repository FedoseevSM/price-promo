import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { LegoColor } from './LegoModule';
interface LegoIndustryPackageProps {
  title: string;
  description: string;
  imageUrl: string;
  modules: string[];
  price: string;
  color: LegoColor;
}
const colorMap = {
  red: {
    accent: 'border-l-4 border-[#E3000F]',
    text: 'text-[#E3000F]',
    button: 'bg-[#E3000F] hover:bg-[#C4000D] text-white',
    bg: 'bg-red-50'
  },
  blue: {
    accent: 'border-l-4 border-[#0055BF]',
    text: 'text-[#0055BF]',
    button: 'bg-[#0055BF] hover:bg-[#004499] text-white',
    bg: 'bg-blue-50'
  },
  yellow: {
    accent: 'border-l-4 border-[#FFD700]',
    text: 'text-yellow-700',
    button: 'bg-[#FFD700] hover:bg-[#E6C200] text-black',
    bg: 'bg-yellow-50'
  },
  green: {
    accent: 'border-l-4 border-[#00A550]',
    text: 'text-[#00A550]',
    button: 'bg-[#00A550] hover:bg-[#008540] text-white',
    bg: 'bg-green-50'
  }
};
export function LegoIndustryPackage({
  title,
  description,
  imageUrl,
  modules,
  price,
  color
}: LegoIndustryPackageProps) {
  const theme = colorMap[color];
  return <article className="group flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
      {/* Image Section */}
      <div className="md:w-2/5 relative overflow-hidden h-48 md:h-auto">
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10`} />
        <img src={imageUrl} alt={`${title} industry context`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute bottom-4 left-4 z-20">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm ${theme.text}`}>
            Индустрия
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className={`md:w-3/5 p-6 flex flex-col ${theme.accent}`}>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mb-6 flex-grow">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            В комплекте:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {modules.map((module, index) => <li key={index} className="flex items-center text-sm text-gray-700">
                <Check className={`w-4 h-4 mr-2 flex-shrink-0 ${theme.text}`} />
                <span>{module}</span>
              </li>)}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div>
            <span className="block text-xs text-gray-500">
              Стоимость набора
            </span>
            <span className="text-2xl font-bold text-gray-900">{price}</span>
          </div>
          <button className={`flex items-center px-5 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-sm ${theme.button}`} aria-label={`Выбрать набор ${title}`}>
            Выбрать
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </article>;
}