import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 1. 타입 선언 패키지 설치 @types/~
// 2. tsconfig.json
// 3. 모든 JS => JSX
// 4. 개별 하나씩 TSX
