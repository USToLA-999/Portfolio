import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

// import 'animate.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];

      return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>lorem aksdjkakja  kajhd hdkas shdksd ksag hgfegfjdfkaf8</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey={'first'} >
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-itmes-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey={'first'}>Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={'second'}>Tab Second</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={'third'}>Tab Third</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey={"first"}>
                                    <Row>
                                        {
                                            projects.map((projects, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...projects}
                                                    />
                                                )
                                            } )
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'second'}>lorem</Tab.Pane>
                                <Tab.Pane eventKey={'third'}>lorem ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
      )
}