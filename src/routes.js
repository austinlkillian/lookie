  
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
        <Route path='/category' component={Category} />
        <Route path='/organization-create' component={OrganizationCreate} />
        <Route path='/organizations' component={Organizations} />
        <Route path='/organization-single' component={OrganizationSingle} />
        <Route path='/profile' component={Profile} />
        <Route path='/reviewer' component={Reviewer} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/saved-organizations' component={SavedOrganizations} />
        <Route path='/upvoted-reviewers' component={UpvotedReviewers} />
    </Switch>
)