import { Container, Row } from "reactstrap"
import { projects } from '../../database/projects'
import CardImg from "./components/CardImg"
import Box from "./components/Box"

import CardExample from '../../../public/ChaveiroCard.png'

export default function MainContent() {
    // Creating the mainContent of the Portfolio, consting Projects and other stuff
    return (
        <>
            <section className="mainSection defaultpadding px-5">
                <Container className="d-flex flex-column gap-4" fluid>
                    <section className="d-flex flex-row gap-4">
                        <div className="d-flex"
                            style={{ "width": "30vh" }}>
                            <img src={CardExample} className='rounded img-fluid d-flex cardBox' />
                        </div>
                        <Row className="align-items-end">
                            {projects.map(project => (
                                <CardImg id={project.id} href={project.href}
                                    description={project.description} img_src={project.img_src}
                                    title={project.title} key={project.id} small_size
                                 />
                            ))}
                        </Row>
                    </section>
                    <Row className="flex-row gap-4 px-2">
                        <Box icon={'collection-fill'} description={'Meus projetos'} 
                        href="/myProjects" target={false} />
                        <Box icon={'person-workspace'} description={"Histórico Profissional"} 
                        href="professional_experiences" target={false} />
                        <Box icon={"linkedin"} description={"Meu LinkedIn"} 
                        href="https://www.linkedin.com/in/arthur-gonçalves-saldanha-375a70157" target={true} />
                        <Box icon={"file-earmark-richtext-fill"} description={'Meu Currículo'} 
                        href="https://drive.google.com/file/d/1FYl3iC4gEwcw1MVYhEyIQW1m18sLAuml/view?usp=sharing" 
                        target={true} />
                    </Row>
                </Container>
            </section>
        </>
    )
}