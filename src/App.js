import './App.css';
import ContentWrapper from './components/ContentWrapper';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div id="wrapper">
		<SideBar />
		<ContentWrapper />
	</div>
  )
}

export default App;
