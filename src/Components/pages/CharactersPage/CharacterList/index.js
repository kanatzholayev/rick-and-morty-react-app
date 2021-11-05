import React, { Component } from "react";
import CharacterItem from "../CharacterItem";
import "./style.scss";

export class CharacterList extends Component {
  render() {
    const characterList = this.props.characters.map((character, idx) => {
      return <CharacterItem key={idx} data={character} />;
    });

    return <div className="characters-wrap">{characterList}</div>;
  }
}

export default CharacterList;
