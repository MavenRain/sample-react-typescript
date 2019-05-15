import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';

const Link: React.FC<{text : string}> = ({text}) => (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
)

const Paragraph: React.FC<{path: string, action: string}> = ({path, action}) => (
  <p>
    Edit <code>{path}</code> {action}
  </p>
)

const Image: React.FC<{logo: string, className: string, alt: string}> =
  ({logo, className, alt}) => (
    <img src={logo} className={className} alt={alt} />
  )

interface ClassWithChildren {
  className: string,
  children: ReactElement[]
}

const Header: React.FC<ClassWithChildren> = ({className, children}) => (
    <header className={className} style={{
      "background-color": "#282c34",
      "min-height": "100vh",
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center",
      "justify-content": "center",
      "font-size": "calc(10px + 2vmin)",
      "color": "white"
    }}>
      {children}
    </header>
)

const Div: React.FC<ClassWithChildren> = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
)

const headerChildren: ReactElement[] = [
  <Image logo={logo} className="App-logo" alt="logo" />,
  <Paragraph path="src/App.tsx" action="and save to reload." />,
  <Link text="Learn React" />
]

const App: React.FC = () => (
    <Div className="App" children={[
      <Header className="App" children={headerChildren} />
    ]} />
  )

export default App;
