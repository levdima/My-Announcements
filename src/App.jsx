import AddTodo  from './DeleateAddAnnouncements/AddTodo'
import ListTodo  from './DeleateAddAnnouncements/ListTodo';
import Header  from './Header/Header';
import TodoContexProvider  from './Provider/TodoContexProvider';
import Search from './SearchAnnouncements/Search';
import {Switch, BrowserRouter as Router,Route} from  'react-router-dom'



function App() {
  return (
    <TodoContexProvider>
   <Router>
   <Header/>
     <Switch>
       <Route path='/list' exact>
       <ListTodo/>
       </Route>
       <Route path='/create-todo' exact>
       <AddTodo/>
</Route>
<Route path='/search' exact>
       <Search/>
</Route>
     </Switch>
   </Router>
   </TodoContexProvider>
  );
}

export default App;
