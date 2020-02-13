import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

function App() {

  const [modalShow, setModalShow] = React.useState(false);
  const [modalName, setModalName] = useState('');

  const sets = (name) => {
    setModalShow(true);
    setModalName(name);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <footer className="footer">
          <div className="footer-container">

                  <div onClick={() => sets('Ferretería')}> 
                    &copy; Ferretería
                  </div>

                  <div onClick={() => sets('Políticas de privacidad')}>
                    Políticas de privacidad
                  </div>

                  <div onClick={() => sets('FAQ')}>
                    FAQ
                  </div>

                  <div onClick={() => sets('Términos y condiciones')}>
                    Términos y condiciones
                  </div>

                  <Footer
                    name={modalName}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  >
                  </Footer>

          </div>
        </footer>
    </div>
  );
}

export default App;
