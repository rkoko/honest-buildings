import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Rating } from 'semantic-ui-react'

const options = [
  { key: 'm', text: '139 E. 30th', value: '139 E. 30th' },
  { key: 'f', text: '11 Broadway', value: '11 Broadway' },
]

class ReviewForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Communication' placeholder='Communication'/>
          
          <Form.Field control={Input} label='Building Upkeep' placeholder='Building Upkeep' />
          </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Speed of Resolution' placeholder='Speed of Resolution' />
          <Form.Field control={Input} label='Quality of Work' placeholder='Quality of Work' />
        </Form.Group>

        <Form.Field control={Select} label='Building' options={options} placeholder='Building' />

        {/* <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} label='One' value='1' checked={value === '1'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Two' value='2' checked={value === '2'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Three' value='3' checked={value === '3'} onChange={this.handleChange} />
        </Form.Group> */}
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Rating maxRating={5}/>
        {/* <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' /> */}
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}


export default ReviewForm
