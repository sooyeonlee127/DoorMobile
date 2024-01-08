import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import reportWebVitals from './reportWebVitals';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@/styles/index';
import theme from './styles/theme';
import { Provider } from 'react-redux' // 여러 컴포넌트에서 redux store에 접근할 수 있게 해줌
import { PersistGate } from 'redux-persist/integration/react' // 페이지를 새로고침해도 redux의 state를 유지해줌
import { persistor, store } from './store'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global styles={GlobalStyle} />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
