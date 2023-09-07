import Footer from './Partials/Footer';
import Navigation from './Partials/Navigation';

export default function HomeLayout({ children }) {
  return (
    <>
        <div className="min-h-screen max-w-5xl mx-auto">
          <div className="mx-8">
            <Navigation />

            {children}
          </div>

          <Footer />
        </div>
    </>
  );
}
