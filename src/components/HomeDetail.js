import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Thumbnail from 'components/jinseong/Thumbnail';
class HomeDetail extends Component {
    render() {
        return (
            <main className="my-5 py-5">
                <Container className="px-0">
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <div className="position-relative">
                                    <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
                                        Home
                                    </span>

                                    <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Portfolio Project</span>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                                         
                                    </article>
                                </div>
                            </Fragment>
                            <Thumbnail/>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default HomeDetail;
