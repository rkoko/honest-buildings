import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'

const FeaturedBuildings = () => (
  <div>
    <h2>Featured Buildings</h2>
    <Card.Group>
        <Card
          href='#card-example-link-card'
          header="50 Prince Street"
          meta='NoLiTa'
          description='A modern mid-rise elevator building offering laundry facilities.'
        />
        <Card
          href='#card-example-link-card'
          header='171 Clinton Street'
          meta='Brooklyn Heights'
          description='A low-rise landmark walk-up building.'
        />
        <Card
          href='#card-example-link-card'
          header='239 Park Avenue South'
          meta='Gramercy Park'
          description='A pre-war mid-rise building offering laundry facilities. The apartments have very high ceilings.'
        />
      </Card.Group>
    </div>
)

export default FeaturedBuildings
