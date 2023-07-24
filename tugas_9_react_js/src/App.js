import { Component } from "react";
import { Alert, Breadcrumb, Button, Col, Collapse, Container, Form, Nav, NavDropdown, Navbar, OverlayTrigger, Pagination, Popover, ProgressBar, Row, Tab, Table, Tabs } from "react-bootstrap";


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      buka: true,
    }
  }
  render(){
    const Informasi = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Informasi Website</Popover.Header>
        <Popover.Body>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang Berita
          olahraga
          </Popover.Body>
      </Popover>
    ) 
    return(
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Berita</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Live Score</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Piala & Liga"></NavDropdown>
            <Nav.Item>
              <Nav.Link href="/">Transfer Pemain</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Tim</Nav.Link>
            </Nav.Item>
          </Nav>
          <Col></Col>
          <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="search"/>
            <Button variant="outline-success" className="me-2">Search</Button>
          </Form>
        </Navbar>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
          <Alert variant="secondary">
          <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
          <Breadcrumb.Item href="/" active>Transfer pemain</Breadcrumb.Item>
          </Breadcrumb>
          </Alert>
          
          </Col>
        </Row>
        <Row>
          <h3>Rumor Transfer Pemain</h3>
            <br/><br/><br/>
            <Col>
            <Tabs defaultActiveKey="Semua Transfer">
              <Tab eventKey="Semua Transfer" title="Semua Transfer">
              <br/>
              <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Pemain</th>
            <th>Tim</th>
            <th>Transfer</th>
            <th>Proses Transfer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>MAROUANE FELLAINI</td>
            <td>MANCHESTER UNITED</td>
            <td>SHANDONG LUNENG </td>
            <td><ProgressBar now={85} label="85%"/></td>
          </tr>
          <tr>
            <td>2</td>
            <td>LUIS NANI</td>
            <td>SPORTING CP</td>
            <td>ORLANDO CITY</td>
            <td><ProgressBar now={55} label="55%"/></td>
          </tr>
          <tr>
            <td>3</td>
            <td>MAREK HAMSIK</td>
            <td>NAPOLI</td>
            <td>DALIAN YIFANG</td>
            <td><ProgressBar now={95} label="95%"/></td>
          </tr>
          <tr>
            <td>4</td>
            <td>SARDAR AZMOUN</td>
            <td>RUBIN KAZAN</td>
            <td>ZENIT ST PETERBURG</td>
            <td><ProgressBar now={100} label="100%"/></td>
          </tr>
          <tr>
            <td>5</td>
            <td>MICHY BATSHUAYI</td>
            <td>CHELSEA</td>
            <td>CRYSTAL PALACE</td>
            <td><ProgressBar now={50} label="50%"/></td>
          </tr>
          <tr>
            <td>6</td>
            <td>LUCAS PIAZON</td>
            <td>CHELSEA</td>
            <td>CHIEVO</td>
            <td><ProgressBar now={100} label="100%"/></td>
          </tr>
        </tbody>
      </Table>
              </Tab>
              <Tab eventKey="Liga Primer Inggris" title="Liga Primer Inggris">
              </Tab>
              <Tab eventKey="Serie A" title="Serie A">
              </Tab>
              <Tab eventKey="Divisi Primera" title="Divisi Primera">
              </Tab>
              <Tab eventKey="Bundesliga" title="Bundesliga">
              </Tab>
              <Tab eventKey="Liga 1 Indonesia" title="Liga 1 Indonesia">
              </Tab>
            </Tabs>
            </Col>
          </Row>
          <Row>
            <Col>
            <Pagination>
            <Pagination.First/>
            <Pagination.Prev/>
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Ellipsis/>
            <Pagination.Item >10</Pagination.Item>
            <Pagination.Item >11</Pagination.Item>
            <Pagination.Item >12</Pagination.Item>
            <Pagination.Item >13</Pagination.Item>
            <Pagination.Item >14</Pagination.Item>
            <Pagination.Ellipsis/>
            <Pagination.Item>20</Pagination.Item>
            <Pagination.Next/>
            <Pagination.Last/>
            </Pagination>
            </Col>
          </Row>
          <Row>
            <Col>
            <OverlayTrigger trigger="click" placement="right" overlay={Informasi}>
          <Button variant="primary" className="me-2">informasi</Button>
          </OverlayTrigger>
          
           <Button 
      variant="primary"
      onClick={()=>this.setState({buka: !this.state.buka})}
      >Versi Website</Button>
      <Collapse in={this.state.buka}>
       <p>Akses Sport v.1.0</p>
      </Collapse>
      
            </Col>
          </Row>
      </Container>
    )
  }
}

export default App;
