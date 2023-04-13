## Importante

- Se hace uso de Jest para realizar las pruebas unitarias.
- Además se tuvieron que instalar algunas depencias para poder hacer uso de Jest con typescript (ver package.json)
- Se creó un archivo babel.config.js para poder hacer uso de Jest con typescript.
- Se creó un archivo jest.config.js para dar compatibilidad al fetch API con Jest. Para eso se instaló la librería 'isomorphic-fetch'. (Esto no pasa si tenemos la versión 18 en adelante de Node.js)
- Por otra parte para ya empezar a hacer las pruebas en componentes de React se instalo @testing-library/react.
- Se instaló jest-environment-jsdom.
- Se agregó la línea "testEnvironment": "jest-environment-jsdom" en el archivo jest.config.js para poder hacer uso de Jest con React.
- Se agregó la línea ["@babel/preset-react", { runtime: 'automatic' }] en el archivo babel.config.js para poder hacer uso de Jest con React.
