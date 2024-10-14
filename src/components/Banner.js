import { Button, Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useEffect, useState } from "react";
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
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {"Hi, I'm "} <span className="wrap">{text}</span>
                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Button onClick={() => console.log("connect")}>
                  Let's Connect <ArrowRightCircle size={25} />
                </Button>
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