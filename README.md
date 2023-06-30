Crear pagina de contactos en REACTJS
Accede al directorio de tu aplicación:
cd myreactapp 
3.	Dentro de tu aplicación de React, encontrarás una carpeta llamada src. Aquí es donde se encuentra el código fuente de tu aplicación.
4.	Dentro de la carpeta src, crea un nuevo archivo llamado Home.js 
 Abre el archivo Home.js en tu editor de código y agrega el siguiente código para crear tu página de inicio básica:
import React from 'react';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
}
export default App;
Si deseas establecer la página Home como la página de inicio de tu aplicación React, hay algunas formas de lograrlo. Aquí te mostraré una forma común de hacerlo utilizando React Router:
1.	Asegúrate de tener instalado React Router en tu proyecto. Si aún no lo has hecho, puedes instalarlo ejecutando el siguiente comando en tu terminal:
npm install react-router-dom
2.	Abre el archivo src/App.js y realiza las siguientes modificaciones:
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega más rutas y componentes aquí según sea necesario */}
      </Routes>
    </Router>
  );
}
export default App;
Para agregar Bootstrap a tu proyecto de React, puedes seguir los siguientes pasos:
1.	Instala Bootstrap utilizando npm ejecutando el siguiente comando en tu terminal:
npm install react-bootstrap
Esto descargará Bootstrap y lo agregará como una dependencia en tu proyecto.
2.	En tu archivo src/index.js, agrega la siguiente importación para importar los estilos de Bootstrap:
jsxCopy code
import 'bootstrap/dist/css/bootstrap.css';
Verifica que la importación en tu archivo src/Home.js sea correcta. Debería verse así:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  // Contenido de tu componente Home
}
export default Home;

Para integrar un menú de Bootstrap en tu proyecto de React, sigue estos pasos:
1.	Crea un nuevo componente en React para el menú. Por ejemplo, puedes crear un archivo llamado Navbar.js en la carpeta src y copiar el código del menú en ese archivo.
2.	Importa los estilos de Bootstrap en tu componente Navbar.js agregando la siguiente línea de importación:
import 'bootstrap/dist/css/bootstrap.css';

Para llamar al componente Navbar en ese código, simplemente necesitas agregarlo dentro del componente App antes de las rutas. Aquí tienes un ejemplo de cómo puedes hacerlo:
const App = () => {
  return (
    <Router>
      <Navbar /> {/* Llamada al componente Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega más rutas y componentes aquí según sea necesario */}
      </Routes>
    </Router>
  );
}


















Como resultado final tenemos una página de contactos adaptable a móviles y web de escritorio.
 


 


