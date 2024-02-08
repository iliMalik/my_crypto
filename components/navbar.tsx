import Link from 'next/link';

const links = [
  { href: '/client', label: 'Client' },
  { href: '/drinks', label: 'Drinks' },
  { href: '/grid', label: 'Grid' },
  { href: '/tasks', label: 'Tasks' },
];

export default function NavBar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          HOME
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
