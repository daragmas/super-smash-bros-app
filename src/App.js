import './App.css';

function App() {
  const fighters = ['Roy','Ganondorf','Mewtwo','Samus','Fox','Link', 'Pikachu', 'Mario', 'Lucario', 'Villager', 'Sheik', 'Ness']

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((element,index)=>{
            return(
              <div>
                <img key={index} src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${element.toLowerCase()}.png`}/>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
