import React from 'react'
import { Item } from 'semantic-ui-react'

const description = [
  '.',
].join(' ')

const ItemExampleDescriptions = () => (
  <Item.Group>
    <Item>
      <Item.Image size='large' src="https://www.allthingsdogs.com/wp-content/uploads/2018/10/American-Pitbull-Terrier-Sleeping.jpg" wrapped ui={false} />


      <Item.Content>
        <Item.Header as='a'>Fluffy</Item.Header>
        <Item.Description>
          <p>{description}</p>
          <p>Hi, my name is Fluffy and I'm newly adopted..<br></br><br></br>
          is a long established fact that a reader will be distracted by the readable <br></br> 
          content of a page when looking at its layout. The point of using Lorem Ipsum <br></br>
          is that it has a more-or-less normal distribution of letters, as opposed to <br></br>
          using 'Content here, content here', making it look like readable English.<br></br> 
      </p>
        </Item.Description>
      </Item.Content>
    </Item>

 </Item.Group>
)

export default ItemExampleDescriptions