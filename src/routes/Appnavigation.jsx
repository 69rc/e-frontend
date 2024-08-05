import HomePage from '../components/Home';
import Footer from '../components/footer/footer'


const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/', component: <Footer />, exact: true },
  
];

export default routes;
