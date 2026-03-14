import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNames: { [key: string]: string } = {
    'products': 'Products',
    'about': 'About Us',
    'contact': 'Contact',
    'feedback': 'Feedback',
    'business': 'Business Opportunities',
    'founder': 'Founder'
  };

  if (!pathnames.length) return null;

  return (
    <nav className="bg-muted/30 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNames[name] || name;

            return (
              <li key={name} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                {isLast ? (
                  <span className="text-foreground font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-muted-foreground hover:text-primary transition-colors">
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;