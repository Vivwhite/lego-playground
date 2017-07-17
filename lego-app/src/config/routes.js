import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import LibraryContainer from '../containers/LibraryContainer'
import OneLego from '../components/OneLego'
import CreateLego from '../components/CreateLego'
import Home from '../components/Home'

export default (
  <Route exact path='/' component={App}>
    <Route path='/home' component={Home} />
    {/* TODO: To have RESTFUL routes, consider making your index view `/legos` instead of `/lego-library` */}
    <Route path='/lego-library' component={LibraryContainer} />
    <Route path='/legos/:id' component={OneLego} />
    {/* TODO: To have RESTFUL routes, consider making your create path a `/legos` POST instead of `/create-lego` */}
    <Route path='/create-lego' component={CreateLego} />
  </Route>
)
