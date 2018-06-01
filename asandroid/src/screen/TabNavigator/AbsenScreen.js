import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { Container, Header, Card, CardItem, Content, Form, Badge,
  Item, Input, Label, Left, Right, Button, Icon, Body, Title, Thumbnail } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'

class AbsenScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://github.com/c3budiman/FreeSent/blob/master/absensi/public/avatar/avatar.png?raw=true'}} />
                <Body>
                  <Text>c3budiman</Text>
                  <Text note>Admin</Text>
                </Body>
              </Left>
              <Badge info>
                <Text style={{color: '#fff'}}>Pengumuman</Text>
              </Badge>
            </CardItem>
            <CardItem cardBody>
              <Text note>&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit, Read More...</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default AbsenScreen;
