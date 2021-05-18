import React from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../contexts/OauthContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Feed() {
  const { currentUser } = useAuth();
  return (
    <div className="w-100 p-2">
      <div className="d-flex">
        <h2 className="p-2">Your favourites</h2>
        <h2 className="ml-auto p-2">
          <AccountCircleIcon fontSize="large" />
          {currentUser.email}
        </h2>
      </div>

      <Card></Card>
      <div className="div">
        <div className="p-3" style={{ overflowX: `scroll` }}>
          <div style={{ display: `flex`, width: `max-content` }}>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Legends Barbershop</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Cuts & Co.</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>ManJesty</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Francis Gents</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Tony the Barber</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Kuif and Baard Barbershop</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Legends Barbershop</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <h2 className="p-2">In a Rush?</h2>
      <div className="div">
        <Card></Card>
        <div className="p-3" style={{ overflowX: `scroll` }}>
          <div style={{ display: `flex`, width: `max-content` }}>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Legends Barbershop</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Cuts & Co.</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>ManJesty</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Francis Gents</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Tony the Barber</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Kuif and Baard Barbershop</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow m-3" style={{ width: `18rem` }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Legends Barbershop</Card.Title>
                <Card.Text>Fee: R35 20mins - 30mins </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
