import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useI18n } from './i18n';

const App: React.FC = () => {
  const { t, setLocale } = useI18n();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p dangerouslySetInnerHTML={{ __html: t('getting_started') }} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn_react')}
        </a>
      </header>
      <footer className="App-Footer">
        <span className="App-Locale" onClick={() => setLocale('en-US')}>English</span>
        {' | '}
        <span className="App-Locale" onClick={() => setLocale('zh-TW')}>正體中文</span>
      </footer>
    </div>
  );
}

export default App;
