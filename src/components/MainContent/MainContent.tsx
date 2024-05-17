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
                        <div className="d-flex "
                            style={{ "width": "30vh" }}>
                            <img src={CardExample} className='rounded img-fluid d-flex cardBox' />
                        </div>
                        <Row className="align-items-end">
                            {projects.map(project => (
                                <CardImg id={project.id}
                                    description={project.description} img_src={project.img_src}
                                    title={project.title} key={project.id} />
                            ))}
                        </Row>
                    </section>
                    <Row className="flex-row gap-4 px-2 ">
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </Row>
                </Container>
            </section>
        </>
    )
}