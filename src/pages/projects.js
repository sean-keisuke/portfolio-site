import * as React from "react";
import styled from "styled-components";
import { Header, Footer, Projects } from "../components";

const ProjectsStyles = styled.div`
  padding: 17px;
`;

const ProjectsPage = () => (
  <main>
    <Header />
    <ProjectsStyles>
      <Projects />
    </ProjectsStyles>
    <Footer />
  </main>
);

export default ProjectsPage;
