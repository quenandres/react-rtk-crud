# React y Redux Toolkit CRUD (con TailwindCSS)

<img src="./src/assets/redux.png" style="width:650;height:600px;">
<img src="./src/assets/redux2.jpg" style="width:650;height:600px;">

Hacemos limpieza de los archivos innecesarios.

_configureStore_: Nos devuelve un objeto donde podremos dividir los estados de miltiples archivos de la app. ConfigureStore los agrupa en uno solo para poder accederlos a cualquier lugar.

_Provider_: Componente que va a englobar toda la aplicación para que sin importar donde este la aplicacion va a llamar al provider
```js
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
```

__Reducers__: Son la forma en la que actualizaremos el estado (setState) actualiza un estado.
__Slice__: Un slice es una parte de todo el estado.
```js
import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name:'tasks',
    initialState: [],
    reducers: { //Funcionaes

    }
});

export default taskSlice.reducer;
```
 El taskSlice es un objeto creado a partir de _createSlice_. Por defecto se debe exportar por default sus reducers. Lo que espera el store son los reducers, ya que con estos hacemos los cambios del estado del slice.

```js
import taskReducers from './../features/tasks/taskSlice';
```
---
```js
import {useDispatch, useSelector} from 'react-redux';
```
__useDispatch__: Funciones que se utilizan para llamar a actualizar el estado.
__useSelector__: Forma en la que se traen los datos dentro del estado.

*archivo.js*
```js
const taksSelect = useSelector(state => state.tasks);
```
----
*store.js*
```js
import { configureStore } from '@reduxjs/toolkit';
import taskReducers from './../features/tasks/taskSlice';

export const store = configureStore({
    reducer: {
        tasks: taskReducers
    }
});
```

