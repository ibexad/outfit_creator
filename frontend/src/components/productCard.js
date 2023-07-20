import React, { useState, useEffect } from 'react'
import { Card, ListGroup, Badge, Button } from 'react-bootstrap';
import ImageService from '../services/imageService'
import SpinnerIcon from './spinnerIcon';

const ProductCard = (props) => { 
  
  const [image, setImage] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {    
    setImage(getProductImage(props.variants[0]?.images[0]?.key));       
  },[props]);   
  
  const getProductImage = async (imageKey) => {
    setIsLoading(true)
    await ImageService.getProductImage(imageKey).then((data) => {
      setImage(data)
      setIsLoading(false)
      return data;      
    });
  }

  const getTranslatedDescription = (items) => {
    return items.filter(f => f.language === "DE")[0]?.description;
  }

  return ( 
    <>      
      <Card style={{ width: '20rem' }}>
        {isLoading && 
          <div className='text-center pt-5'>
            <SpinnerIcon />
          </div>}
        {image && !isLoading && <Card.Img variant="top" src={`data:image/png;base64,${image}`} alt="Card image" loading='lazy' />}
        <Card.Body>
          <Card.Title>{props.maintenance_group}</Card.Title>
          <Card.Text>
            {getTranslatedDescription(props.descriptions)}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.brand}</ListGroup.Item>
          <ListGroup.Item><b>{props.variants[0].original_price}</b> {props.variants[0].currency}</ListGroup.Item>
          <ListGroup.Item>{props.variants[0].sizes.map((size) => <Badge className='ms-1' bg="secondary">{size.size_name}</Badge>)}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant='danger' href="#">Add to Card</Button>
          <Card.Link className='float-end' href="#">Favorite</Card.Link>
        </Card.Body>
      </Card>
    </>   
  )    
}

export default ProductCard;

