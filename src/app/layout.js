import SideNavbar from './components/SideNavbar';
import './globals.css';

export const metadata = {
  title: 'DSA Visualizer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideNavbar />
          <main className="flex-1 ml-60 p-6 bg-gray-200 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
