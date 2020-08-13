class Team extends React.Component {
  constructor(props) {
    super(props)
  }
    render() {
        return (
            <div className="Team">
                Team
            </div>
        )
    }
}


function App(props) {
    return (
      <div className="App">
        <Team 
        name="Russiaville Raccoons" 
        logo="./assets/images/raccoons_disgusting.png"/>
      </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )