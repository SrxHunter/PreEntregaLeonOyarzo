import React from 'react'
import "./Item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, desc, img}) => {

    const navigate = useNavigate();

    const formatMoney = (amount, decimalCount = 2, decimal = ',', thousands = '.') => {
            try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
            const negativeSign = amount < 0 ? '-' : '';
            const i = parseInt(
                (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
            ).toString();
            const j = i.length > 3 ? i.length % 3 : 0;
            return (
                negativeSign +
                (j ? i.substr(0, j) + thousands : '') +
                i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands)
            );
            } catch (e) {}
    }

  return (
    <div className='col-lg-2 col-md-6 col-sm-8 col-xs-12'>
        <Card className="card-box">
            <Card.Img variant="top" className='card-img' src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                   ${formatMoney(precio)}
                </Card.Text>

                <div className="container-btn">
                    <Link to={`/item/${id}`}>
                        <Button className="card-btn" variant="primary">Ver detalle</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item