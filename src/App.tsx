import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SynergyShowcase from './components/SynergyShowcase';
import Footer from './components/Footer';
import './index.css'; // Importa o CSS global do Tailwind

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <SynergyShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
