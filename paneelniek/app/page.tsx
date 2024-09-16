'use client'

import React, {useState} from 'react';

export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [showPromt, setShowPrompt] = useState(false);

  const teamprompts = {
    'Team1': 'Wat tekst voor team 1',
    'Team2': 'Wat tekst voor team 2',
    'Team3': 'Wat tekst voor team 3',
    'Team4': 'Wat tekst voor team 4',
    'Team5': 'Wat tekst voor team 5',
    'Team6': 'Wat tekst voor team 6',
    'Team7': 'Wat tekst voor team 7',
    'Team8': 'Wat tekst voor team 8',
    'Team9': 'Wat tekst voor team 9',
    'Team10': 'Wat tekst voor team 10',
    'Team11': 'Wat tekst voor team 11',
    'Team12': 'Wat tekst voor team 12',
  }

  function handleTeamChange(e){
    setSelectedTeam(e.target.value);

  }

  function togglePrompt(){
    setShowPrompt(!showPromt)
  }


  return (
    <section className="grid gap-8  mx-8 mt-8">
      <div>
        <h1 className="text-4xl font-medium mb-2">Uitleg niekert</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum mauris enim, id suscipit lectus rutrum vel. Integer ac odio odio. Praesent non nulla vitae enim elementum blandit quis ac massa. Donec vitae risus consectetur sem fermentum iaculis. Morbi euismod nec ex eu fringilla. Sed urna neque, auctor molestie magna vel, eleifend elementum ante. Aenean lacinia, tellus ac commodo volutpat, sem arcu tincidunt nunc, eget dignissim nibh quam sit amet turpis. Phasellus augue neque, tristique non odio quis, lacinia malesuada quam.
Nulla non mi sed dui sagittis accumsan. Nam suscipit arcu quis purus placerat, nec lacinia magna laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec sapien id metus interdum pretium. Vivamus sit amet congue mi, id volutpat magna. Donec eu blandit ante, ut dignissim leo. Curabitur consequat, ligula id porta maximus, eros ante pellentesque felis, eu accumsan justo nunc non lectus. Donec facilisis interdum nisi, at efficitur massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p >
      </div >

      <form>
        <div>
          <label>Vraag 1</label>
          <input type="text" name="vraag1"></input>
        </div>
        <div>
          <label>Vraag 2</label>
          <input type="text" name="vraag2"></input>
        </div>
        <div>
          <label>Vraag 3</label>
          <input type="text" name="vraag3"></input>
        </div>
        <div>
          <label>Vraag 4</label>
          <input type="text" name="vraag4"></input>
        </div>
        <div>
          <label>Vraag 5</label>
          <input type="text" name="vraag5"></input>
        </div>
        <div>
          <select id="team" name="teamname" value={selectedTeam} onChange={handleTeamChange}>
            <option value="">Kies je team</option>
            {Object.keys(teamprompts).map((team => (
              <option key ={team} value={team}>{team}</option>
            )))}
          </select>          
        </div>
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"/>
      </form>
      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={togglePrompt}>
          {showPromt ? 'Verberg Prompt tekst' : 'Toon Prompt tekst'}
        </button>
      </div>

      {showPromt && selectedTeam && (
          <span className="mt-4 p-4 bg-gray-100 rounded">
          {teamprompts[selectedTeam]}
        </span>
        )}

    </section >
  );
}
