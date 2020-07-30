import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import { ResponsiveIframe } from './components/BannerMain/components/VideoIframeResponsive/styles';

const Pagina404 = () => (
  <div>
    <h1 className="page-not-found">Página não encontrada!</h1>
    <ResponsiveIframe src="https://mariosouto.com/flappy-bird-devsoutinho/"></ResponsiveIframe>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);