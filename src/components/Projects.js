
import colorSharp2 from "../assets/img/color-sharp2.png";
import refineDash from "../assets/img/refineDashboard.png";
import BrainWave from '../assets/img/BrainWave.png';
import NSSolution from '../assets/img/NSSolution.png';
import HealthCare from '../assets/img/HealthCare.png';
import SmulyChat from '../assets/img/SmulyChat.png';
import GuessmyNo from '../assets/img/GuessmyNo.png'
import omniFood from '../assets/img/Omnifood.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
          title: "BrainWave",
          description: "Design & Development",
          imgUrl: BrainWave,
          link: "https://brainwave-nu-ten.vercel.app/"
        },
        {
          title: "NS Solution",
          description: "Design & Development",
          imgUrl: NSSolution,
          link: "https://ns-solutions.vercel.app/"
        },
        {
          title: "Light-Fork Dashboard ",
          description: "Design & Development",
          imgUrl: refineDash,
          link: "https://refine-by-ustola.vercel.app/"
        },
        {
          title: "HealthCare Clinic",
          description: "Design & Development",
          imgUrl: HealthCare,
          link: "https://healthcare-mu-roan.vercel.app/"
        },
        {
          title: "Smuly Chat",
          description: "Design & Development",
          imgUrl: SmulyChat,
          link: "https://bg-chat-lbzmoe5my-ustolas-projects.vercel.app/"
        },
        {
          title: "Guess my No. ",
          description: "Design & Game Development",
          imgUrl: GuessmyNo,
          link:"https://guess-my-number69.vercel.app/"
        },
        {
            title: "omniFood ",
            description: "Design & Development",
            imgUrl: omniFood,
            link:"https://omnifood-by-logicule.netlify.app/"
          },
      ];

      return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col lg={12}>
                    <TrackVisibility>
                    {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                        <h2>Projects</h2>
                        <p>Here are a few of my projects. </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey={'first'} >
                            
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
                            </Tab.Content>
                        </Tab.Container>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
      )
}