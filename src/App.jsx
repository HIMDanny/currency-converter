import Converter from './components/Converter/Converter';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto grow flex justify-center items-center">
        <Converter />
      </main>
    </>
  );
};

export default App;
