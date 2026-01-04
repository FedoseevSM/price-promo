import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { LegoColor } from './LegoModule';
interface LegoPackageProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  color: LegoColor;
}
const colorMap = {
  red: {
    border: 'border-[#E3000F]',
    bg: 'bg-white',
    header: 'bg-[#E3000F]',
    text: 'text-gray-800',
    check: 'text-[#E3000F]',
    button: 'bg-[#E3000F] hover:bg-[#C4000D] text-white'
  },
  blue: {
    border: 'border-[#0055BF]',
    bg: 'bg-white',
    header: 'bg-[#0055BF]',
    text: 'text-gray-800',
    check: 'text-[#0055BF]',
    button: 'bg-[#0055BF] hover:bg-[#004499] text-white'
  },
  yellow: {
    border: 'border-[#FFD700]',
    bg: 'bg-white',
    header: 'bg-[#FFD700]',
    text: 'text-gray-800',
    check: 'text-[#D4B200]',
    button: 'bg-[#FFD700] hover:bg-[#E6C200] text-black'
  },
  green: {
    border: 'border-[#00A550]',
    bg: 'bg-white',
    header: 'bg-[#00A550]',
    text: 'text-gray-800',
    check: 'text-[#00A550]',
    button: 'bg-[#00A550] hover:bg-[#008540] text-white'
  }
};
export function LegoPackage({
  title,
  price,
  features,
  isPopular,
  color
}: LegoPackageProps) {
  const theme = colorMap[color];
  return <div className={`relative flex flex-col h-full rounded-2xl border-4 ${theme.border} ${theme.bg} shadow-xl transition-transform hover:scale-105 duration-300`}>
      {isPopular && <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-bold py-1 px-4 rounded-full shadow-md flex items-center gap-2 z-20 whitespace-nowrap">
          <Sparkles className="w-4 h-4" />
          Популярный выбор
        </div>}

      {/* Header with Studs effect */}
      <div className={`${theme.header} p-6 pt-8 relative overflow-hidden`}>
        {/* Decorative circles pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 gap-2 p-2">
            {Array.from({
            length: 24
          }).map((_, i) => <div key={i} className="w-full pt-[100%] rounded-full bg-white" />)}
          </div>
        </div>

        <div className="relative z-10 text-center">
          <h3 className={`text-2xl font-bold mb-2 ${color === 'yellow' ? 'text-black' : 'text-white'}`}>
            {title}
          </h3>
          <div className={`text-4xl font-black ${color === 'yellow' ? 'text-black' : 'text-white'}`}>
            {price}
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
              <div className={`mt-1 p-0.5 rounded-full ${theme.bg} border ${theme.border}`}>
                <Check className={`w-3 h-3 ${theme.check}`} strokeWidth={4} />
              </div>
              <span className="text-gray-700 font-medium">{feature}</span>
            </li>)}
        </ul>

        <button className={`w-full py-4 rounded-xl font-bold text-lg shadow-md transition-all active:scale-95 ${theme.button}`} aria-label={`Выбрать пакет ${title}`}>
          Выбрать пакет
        </button>
      </div>
    </div>;
}