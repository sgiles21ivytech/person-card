import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  

  return (
    <>
      <div className="PersonCardList">
        <PersonCard
          firstName="George"
          lastName="Roberts"
          age="31"
          hairColor="Red"
        />
        <PersonCard
          firstName="Harrison"
          lastName="Lock"
          age="44"
          hairColor="Blonde"
        />
        <PersonCard
          firstName="Rose"
          lastName="Yorkshire"
          age="29"
          hairColor="Brown"
        />
        <PersonCard
          firstName="Amanda"
          lastName="Terry"
          age="37"
          hairColor="Light Brown"
        />
      </div>
    </>
  );
}

export default App
