import { Link } from 'react-router-dom';
import type { TPromtHistory } from '../../shared/type/promtHistory';

type TPromtHistoryLinks = {
  items: TPromtHistory[];
};

export default function PromtHistory({ items }: TPromtHistoryLinks) {
  return (
    <nav className="mt-8">
      {items.map((item, index) => {
        return (
          <div key={index} className="mb-4">
            <h5 className="text-sm text-gray-400 font-semibold">{item.date}</h5>
            <nav className="mt-2">
              {item.links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    to={link.url}
                    className="flex items-center rounded-md font-medium text-sm hover:bg-neutral-100 px-3 py-2"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        );
      })}
    </nav>
  );
}
