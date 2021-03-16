  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import OrganizationCreate from './pages/OrganizationCreate';
import Organizations from './pages/Organizations';
import OrganizationSingle from './pages/OrganizationSingle';
import Profile from './pages/Profile';
import Reviewer from './pages/Reviewer';
import Reviews from './pages/Reviews';
import SavedOrganizations from './pages/SavedOrganizations';
import UpvotedReviewers from './pages/UpvotedReviewers';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/category' component={Category} />
        <Route exact path='/organization-create' component={OrganizationCreate} />
        <Route exact path='/organizations' component={Organizations} />
        <Route exact path='/organization-single' component={OrganizationSingle} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/reviewer' component={Reviewer} />
        <Route exact path='/reviews' component={Reviews} />
        <Route exact path='/saved-organizations' component={SavedOrganizations} />
        <Route exact path='/upvoted-reviewers' component={UpvotedReviewers} />
    </Switch>
)