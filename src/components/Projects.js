import React, { Component } from 'react';
import _ from 'lodash';
import { CardColumns, Container } from 'reactstrap';

import projects from '../portfolioList/projects';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  renderProjects = () => {
    return _.map(projects, project => (
      <ProjectCard key={project.name} project={project} />
    ));
  };

  render() {
    return (
      <Container>
        <h1>Projects</h1>
        <hr />
        <CardColumns>{this.renderProjects()}</CardColumns>;
      </Container>
    );
  }
}

export default Projects;
