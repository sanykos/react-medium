import React from 'react'
import {Switch, Route} from 'react-router-dom'
import GlobalFeed from './globalFeed'
import Article from './article'
import Authentication from './authentication'

export default () => {
    return(
        <Switch>
            <Route path="/" component={ GlobalFeed } exact/>
            <Route path="/login" component={ Authentication }/>
            <Route path="/register" component={ Authentication }/>
            <Route path="/articles/:slug" component={ Article } />
        </Switch>
    )
}