import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment-timezone'

import {
  CardColumns,
  Card,
  Spinner
} from 'react-bootstrap'

function Index() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=667714809baa41abadf043997d0dcc6c`
    axios.get(url).then(res => {
      setLoading(false)
      setData(res.data.articles)
    })
  })

  return (
    <CardColumns>
      {
        loading === true &&
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      }

      {
        data.map((item,i) => (
          <Card key={`${item}-${i}`}>
            <Card.Img variant="top" src={item.urlToImage} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <small className="text-muted">{moment(item.publishedAt).format('DD/MM/YYYY HH:MM')}</small>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </CardColumns>
  )
}

export default Index;
