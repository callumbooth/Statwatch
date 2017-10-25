import React, {Component} from 'react';
import {FormControl, Button, Row, Col} from 'react-bootstrap';

class RegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    
    render() {
        return (
            <Row className="form-wrapper">
                <Col xs={6} md={4} xsOffset={3} mdOffset={4}>
                    <form action="">
                        <FormControl
                            id="username"
                            type="text"
                            label="text"
                            placeholder="Enter Username"
                        />
                        <FormControl
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Enter Password"
                        />
                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </Col>
            </Row>
        )
    }
}

export default RegForm;