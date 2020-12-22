import { Provider } from 'react-redux';
import storeFactory from '../store';
import JobsPage from '../components/JobsPage';
const store = storeFactory();

const Index = () => {
  return (
    <Provider store={store}>
      <JobsPage />
    </Provider>
  )
}

export default Index;