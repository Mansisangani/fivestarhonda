import * as React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Data from "../Data/Data";
import { Link, useLocation } from "react-router-dom";
import ProdcutDetail from '../CommonComponent/ProductDetail';

export interface IScooterProps { }

export const Scooter: React.FunctionComponent<IScooterProps> = (props: React.PropsWithChildren<IScooterProps>) => {
  const query = new URLSearchParams(useLocation().search);
  const scooterId = query.get("id");
  const scooterNumber = parseInt(scooterId ? scooterId : '0')

  return (
    <Row>
      {
        scooterId ?
          <div style={{ marginTop: 15, padding: 15 }}>
            <Link to={`/scooter`}><span
              style={{ fontWeight: 'bold', color: 'black', cursor: 'pointer', fontSize: 18 }}>
              <img style={{ width: 25 }} src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9ImFycm93LWJhY2siPjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgb3BhY2l0eT0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTIgMTIpIi8+PHBhdGggZD0iTTE5IDExSDcuMTRsMy42My00LjM2YTEgMSAwIDEgMC0xLjU0LTEuMjhsLTUgNmExLjE5IDEuMTkgMCAwIDAtLjA5LjE1YzAgLjA1IDAgLjA4LS4wNy4xM0ExIDEgMCAwIDAgNCAxMmExIDEgMCAwIDAgLjA3LjM2YzAgLjA1IDAgLjA4LjA3LjEzYTEuMTkgMS4xOSAwIDAgMCAuMDkuMTVsNSA2QTEgMSAwIDAgMCAxMCAxOWExIDEgMCAwIDAgLjY0LS4yMyAxIDEgMCAwIDAgLjEzLTEuNDFMNy4xNCAxM0gxOWExIDEgMCAwIDAgMC0yeiIvPjwvZz48L2c+PC9zdmc+"></img>
              {`Go Back`}
            </span></Link>
            <ProdcutDetail ProductNumber={scooterNumber} ProductType={"Scooter"}></ProdcutDetail>
          </div>
          : Data.scooter.map((val) => {
            return <Col md={3} style={{ marginTop: 15 }}><Card>
              <Card.Img variant="top" src={val.ThumbnaiImage} />
              <Card.Body>
                <Card.Title>{val.Name}</Card.Title>
                <Link to={`scooter?id=${val.Id}`}><Button variant="danger" href={`?id=${val.Id}`}>Details</Button></Link>
              </Card.Body>
            </Card>
            </Col>
          })}
    </Row>
  );
};
