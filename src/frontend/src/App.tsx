import ValentineProposal from './pages/ValentineProposal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background pattern - using fun bubble/dot pattern */}
      <div 
        className="fixed inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/generated/bubble-pattern-bg.dim_400x400.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px'
        }}
      />
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center relative z-10">
        <ValentineProposal />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
