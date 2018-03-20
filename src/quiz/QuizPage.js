import React from 'react';
import QuizMenu from "./QuizMenu";
import QuizGameplay from "./QuizGameplay";

const VIEW_MENU = 'viewMenu';
const VIEW_GAMEPLAY = 'viewGameplay';

export default class QuizPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      view: VIEW_MENU,
    }
  }

  onStart = () => {
    this.setState({view: VIEW_GAMEPLAY});
  };

  onGameplayFinish = () => {
    this.setState({view: VIEW_MENU});
  }

  render() {
    const {view} = this.state;

    return (
      <div>
        {view === VIEW_MENU && <QuizMenu onStart={this.onStart} />}
        {view === VIEW_GAMEPLAY && <QuizGameplay onFinish={this.onGameplayFinish} />}
      </div>
    )
  }
}