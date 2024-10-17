import { Button, Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";
export const Banner= () => {

    const toRotate = ["Web Developer", "Web Designer"];
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 -Math.random() * 100);
    const preload = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNumber % toRotate.length;

        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2  )
        }

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true)
            setDelta(preload)
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNumber(loopNumber + 1 );
        
            setDelta(500)
        }
    }

    return(
        
        <>
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Sunny`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a Developer with an effective problem solving mindset passionated for programming, Gaming and about technology. Also Growing my skills on many other platforms like MySQL, SQL, Java, Html, Css, JavaScript, React, Tailwind Css, Bootstrap, C++, Github etc. Also growing my skills on Web Development . i like to surfing internet for grabbing information about new Technology.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="header" />
              </Col>
            </Row>
          </Container>
        </section>
      </>
        
    )
}