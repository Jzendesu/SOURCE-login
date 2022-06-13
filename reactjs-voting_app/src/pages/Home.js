import React, { useState } from "react";
// import { render } from "react-dom";
import _ from "lodash";
import {
  Button,
  Card,
  Divider,
  Image,
  Placeholder,
  Header,
  Icon,
  Modal,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Link } from "react-router-dom";



const cards = [
  {
    id: 1,
    avatar:
    "/images/286670371_1087420372193633_2447639217471189387_n.jpg",
    date: "Joined in 2022",
    header: "Jessa Mae E. Dabon",
    description: "Vote  me for President!",
  },
  {
    id: 2,
    avatar:
    "/images/286913030_552952176270888_8647593070960316925_n.jpg",
    date: "Joined in 2022",
    header: "Andres Edman G. Olario",
    description: "Vote  me for President!",
  },
  {
    id: 3,
    avatar:
    "/images/286853398_553291829754555_7804087744922530478_n.jpg",
    date: "Joined in 2022",
    header: "Harlie Quin Marc C. Quipit",
    description: "Vote  me for Vice President!",
  },
  {
    id: 4,
    avatar:
    "/images/286667023_1074447223160582_4742046145313370949_n.jpg",
    date: "Joined in 2022",
    header: "Lord Emmanuel C. Figueras",
    description: "Vote  me for Vice President!",
  },
  {
    id: 5,
    avatar:
    "/images/286745837_558156392361364_874480466019451254_n.jpg",
    date: "Joined in 2022",
    header: "Edyr Ryle G. Ilisan",
    description: "Vote  me for Secretary!",
  },
  {
    id: 6,
    avatar:
    "/images/286705639_3336389353296681_8171666291947907539_n.jpg",
    date: "Joined in 2022",
    header: "Kissy Cyrine A. Garciano",
    description: "Vote  me for Secretary!",
  },
  {
    id: 7,
    avatar:
    "/images/286371569_533210515119021_3091342441490640392_n.jpg",
    date: "Joined in 2022",
    header: "Cathylyn Shaine P. Olandre",
    description: "Vote  me for Infomedia!",
  },
  {
    id: 8,
    avatar:
    "/images/286671681_556764259358984_8196998284308055366_n.jpg",
    date: "Joined in 2022",
    header: "Lucy Mae Tan",
    description: "Vote  me for Infomedia!",
  },
  {
    id: 9,
    avatar:
    "/images/286652953_420649696595499_2127719474498414433_n.jpg",
    date: "Joined in 2022",
    header: "Chris Heart E. Blanco",
    description: "Vote  me for Public Relations and Communications!",
  },
  {
    id: 10,
    avatar:
    "/images/281881697_760203854981165_7470029647938678879_n.jpg",
    date: "Joined in 2022",
    header: "Wena Mae V. Mabasa",
    description: "Vote  me for Public Relations and Communications!",
  },
  {
    id: 11,
    avatar:
    "/images/286137550_1181276312624302_2038377381336101921_n.jpg",
    date: "Joined in 2022",
    header: "Ruel Dean Buray",
    description: "Vote  me for Public Relations and Communications!",
  },
  {
    id: 12,
    avatar:
    "/images/281512585_881410616150959_5289929775882168360_n.jpg",
    date: "Joined in 2022",
    header: "Abby Kate V. Dela Peña",
    description: "Vote  me for Budget and Finance!",
  },
  {
    id: 13,
    avatar:
    "/images/287089743_4977644659031709_8536296840854942870_n.jpg",
    date: "Joined in 2022",
    header: "Ruffa Mae L. Arañez",
    description: "Vote  me for Budget and Finance!",
  },
  {
    id: 14,
    avatar:
    "/images/286842518_1620869101620535_8768267539397184702_n.jpg",
    date: "Joined in 2022",
    header: "John Piolo H. Mutia",
    description: "Vote  me for Material Preparation and Services!",
  },
  {
    id: 15,
    avatar:
    "/images/278657520_686000222612910_7881783352018967832_n.jpg",
    date: "Joined in 2022",
    header: "Keith M. Ostia",
    description: "Vote  me for Material Preparation and Services!",
  },
  {
    id: 16,
    avatar:
    "/images/280371669_368240838493655_7270112749840638905_n.png",
    date: "Joined in 2022",
    header: "JMark Chezter M. Barcelo",
    description: "Vote  me for Logistics!",
  },
  {
    id: 17,
    avatar:
    "/images/283339498_1371469656652476_396593691737047951_n.jpg",
    date: "Joined in 2022",
    header: "Aliza Nicole M. Gumapac",
    description: "Vote  me for Logistics!",
  },
];


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [voteForA, setVoteForA] = useState(0);
  const [voteForB, setVoteForB] = useState(0);
  const [voted, setVoted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openVoted, setOpenVoted] = useState(false);


  const submitVote = () => {
    axios
      .post("https://6291542a27f4ba1c65caeb73.mockapi.io/vote", {
        partyA: voteForA,
        partyB: voteForB,
       
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      
      <div>
        {voteForA} - {voteForB} 
      </div>
      <Divider />
      <Card.Group doubling itemsPerRow={3} stackable>
        {_.map(cards, (card) => (
          <Card key={card.header}>
            {loading ? (
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            ) : (
              <Image src={card.avatar} />
            )}

            <Card.Content>
              {loading ? (
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line length="very short" />
                    <Placeholder.Line length="medium" />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              ) : (
                <>
                  <Card.Header>{card.header}</Card.Header>
                  <Card.Meta>{card.date}</Card.Meta>
                  <Card.Description>{card.description}</Card.Description>
                </>
              )}
            </Card.Content>

            <Card.Content extra>
              <Button
                disabled={voted}
                onClick={() => [
                  card.id === 1
                    ? setVoteForA(voteForA + 1)
                    : setVoteForB(voteForB + 1),
                     
                  setVoted(true),
                  setOpen(true),
                ]}
                primary
              >
                Vote
              </Button>
              <Button
                disabled={
                  (card.id === 1 && voteForA <= 0 ? true : false) ||
                  (card.id === 2 && voteForB <= 0 ? true : false)
                 
                }
                onClick={() => [
                  card.id === 1
                    ? setVoteForA(voteForA - 1)
                    : setVoteForB(voteForB - 1),
                     
                  setVoted(false),
                ]}
              >
                Unvote
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
     
      >
        <Header icon>
          <Icon name="archive" />
          You are about to vote for this party
        </Header>
        <Modal.Content>
          <p>Are you sure this party is the best one?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button
            color="green"
            inverted
            onClick={() => [setOpen(false), submitVote(), setOpenVoted(true)]}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal
        basic
        onClose={() => setOpenVoted(false)}
        onOpen={() => setOpenVoted(true)}
        open={openVoted}
        size="small"
        // trigger={<Button>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name="archive" />
          You have voted!
        </Header>
        <Modal.Content>
          <h4>Thanks! Want to see the result now?</h4>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color="red"
            inverted
            onClick={() => [
              setOpenVoted(false),
              setOpen(false),
              window.location.reload(),
            ]}
          >
            <Icon name="remove" /> No
          </Button>
          <Link to="/result">
            <Button
              color="green"
              inverted
              onClick={() => [setOpenVoted(false), setOpen(false)]}
            >
              <Icon name="checkmark" /> Yes
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Home;
