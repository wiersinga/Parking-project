import Card from 'react-bootstrap/Card';

function ShowTicket() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Text>
         <h3>Le numéro de votre parking place est:</h3>
         <h3>15</h3>
        </Card.Text>
      <Card.Body>
        <Card.Title>Parking de la ville</Card.Title>
        <Card.Text>
          En cas de perte de votre ticket,contacter le centre de contröle à l'adresse Suivante: <br />
          Les Papeteries Cran-Gevrier 74960
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ShowTicket;