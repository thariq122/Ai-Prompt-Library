import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Beranda', icon: 'home' },
  { path: '/favorites', label: 'Favorit', icon: 'favorite' },
  { path: '/about', label: 'Tentang', icon: 'info' },
];

function BottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex justify-around items-center px-4 py-3 bg-surface border-[3px] border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center justify-center transition-colors ${
            location.pathname === item.path
              ? 'text-primary'
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="font-label-sm text-[10px]">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default BottomNav;