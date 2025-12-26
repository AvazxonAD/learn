import { Pencil } from 'lucide-react';
import PromtHistory from './promtHistory';
import { TPromtHistory } from '../../shared/type/promtHistory';

const promtHistory: TPromtHistory[] = [
  {
    date: 'Today',
    links: [
      {
        title: 'Promt 1',
        url: '/',
      },
      {
        title: 'Promt 2',
        url: '/',
      },
    ],
  },
  {
    date: 'Yesterday',
    links: [
      {
        title: 'Promt 1',
        url: '/',
      },
      {
        title: 'Promt 2',
        url: '/',
      },
    ],
  },
];

export function Sidebar() {
  return (
    <nav className="h-screen w-80 border-r p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold"> AI Writer</h1>
        <button>
          <Pencil size={24} />
        </button>
      </div>
      <PromtHistory items={promtHistory} />
    </nav>
  );
}
