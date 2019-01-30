import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getChars} from "../actions"

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mountings')
    // call our action
    this.props.getChars();
  }

  render() {
    console.log(this.props.characters)
    if (this.props.isLoading) {
      <h1>Data is Loading...</h1>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} isLoading={this.props.isLoading}/>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isLoading: state.charsReducer.isLoading
});
export default connect(
   mapStateToProps,
  {
   getChars
  }
)(CharacterListView);
