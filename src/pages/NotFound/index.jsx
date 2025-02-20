import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

const NotFound = () => {
    return (
        <Container>
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1>404</h1>
                    <h2>Səhifə tapılmadı</h2>
                    <p>Axtardığınız səhifə mövcud deyil və ya silinib.</p>
                    <Link to="/">
                        <Button variant="primary">
                            Ana səhifəyə qayıt
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default NotFound; 