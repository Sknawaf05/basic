import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Btn({name,location}) {


    // return (
    //     // <div>
    //     //     <p>Name: {name}</p>
    //     //     <p>location: {location}</p>
    //     // </div>
    // )


    return (
        <Card style={{ width: '18rem',border:'2px solid black',  }}>
          <Card.Img variant="top"src="https://th.bing.com/th/id/OIP.2o0q60qxVBJ6eKmvKuY4MwHaHa?rs=1&pid=ImgDetMain" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              
              Some quick example text to build
              on the card title and make up the
              bulk of the card's content.
              
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}

export default Btn;