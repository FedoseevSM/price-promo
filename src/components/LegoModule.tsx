import React from 'react';
import { BoxIcon } from 'lucide-react';
export type LegoColor = 'red' | 'blue' | 'yellow' | 'green';
interface LegoModuleProps {
  title: string;
  description: string;
  price: string;
  color: LegoColor;
  icon: BoxIcon;
}
const colorMap = {
  red: {
    bg: 'bg-[#E3000F]',
    stud: 'bg-[#C4000D]',
    shadow: 'shadow-red-900/20',
    text: 'text-white',
    button: 'bg-white text-[#E3000F] hover:bg-gray-100'
  },
  blue: {
    bg: 'bg-[#0055BF]',
    stud: 'bg-[#004499]',
    shadow: 'shadow-blue-900/20',
    text: 'text-white',
    button: 'bg-white text-[#0055BF] hover:bg-gray-100'
  },
  yellow: {
    bg: 'bg-[#FFD700]',
    stud: 'bg-[#E6C200]',
    shadow: 'shadow-yellow-900/20',
    text: 'text-black',
    button: 'bg-black text-[#FFD700] hover:bg-gray-800'
  },
  green: {
    bg: 'bg-[#00A550]',
    stud: 'bg-[#008540]',
    shadow: 'shadow-green-900/20',
    text: 'text-white',
    button: 'bg-white text-[#00A550] hover:bg-gray-100'
  }
};
export function LegoModule({
  title,
  description,
  price,
  color,
  icon: Icon
}: LegoModuleProps) {
  const theme = colorMap[color];
  return <div className="group relative pt-4 transition-transform hover:-translate-y-2 duration-300">
      {/* Lego Studs on top */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-6 z-0">
        {[1, 2, 3, 4].map(i => <div key={i} className={`h-6 w-10 rounded-t-lg ${theme.stud} shadow-inner`} />)}
      </div>

      {/* Main Brick Body */}
      <div className={`relative z-10 ${theme.bg} ${theme.text} p-6 rounded-xl shadow-xl ${theme.shadow} border-b-8 border-black/10`}>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <Icon className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold tracking-tight">{price}</span>
        </div>

        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className={`mb-6 text-sm ${color === 'yellow' ? 'text-black/70' : 'text-white/90'}`}>
          {description}
        </p>

        <button className={`w-full py-3 px-4 rounded-lg font-bold transition-colors shadow-md ${theme.button}`} aria-label={`Купить модуль ${title}`}>
          Купить модуль
        </button>
      </div>
    </div>;
}