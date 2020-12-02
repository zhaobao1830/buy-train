import './App.css';
import { connect } from 'react-redux';
import Home from './Home/Home'
function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
