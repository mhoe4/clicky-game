import React, { Component } from "react";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Footer from "./components/Footer";
import images from "./images.json";

let clickedImages = [];
let score = 0;
let topScore = 0;
let banner = "Click an image to begin!";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score,
    topScore,
    banner
  };

  clickImage = id => {
    //returns true if element matches id
    function checkForId(element) {
      return element === id;
    }

    //returns true if the id of the clicked image is found in clickedImages array
    if (clickedImages.find(checkForId)) {
      // console.log("You guessed incorrectly.");
      banner = "You guessed incorrectly.";
      //if current score > top score... set new top score
      if (score > topScore) {
        topScore = score
      }

      //reset score and clickedImages array
      score = 0;
      clickedImages.length = 0;

      //setState to render new scores and banner
      this.setState({ score, topScore, banner });

    } else { //image was clicked for the first time so...
      // console.log("You guessed correctly.");
      banner = "You guessed correctly.";

      //increment score
      score++;
      //add id of image to clicked images array 
      clickedImages.push(id);
      //setState to render new banner
      this.setState({ banner });
    };

    // console.log(`clickedImages: ${clickedImages} score: ${score}`);

    //shuffle images array
    shuffle(images);
    
    //setState to render shuffle on screen
    this.setState({ images });
  };

  // Map over this.state.images and render a Image component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav 
          score = {score}
          topScore = {topScore}
          banner = {banner}
        />
        <Title/>
        <Container>
          {this.state.images.map(friend => (
            <Image
              clickImage={this.clickImage}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Container>
        <Footer/>

      </Wrapper>
    );
  }
}

let shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default App;
