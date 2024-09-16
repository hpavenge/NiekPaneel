'use client'

import React, {useState} from 'react';

export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  type TeamName = 'Team1' | 'Team2' | 'Team3' | 'Team4' | 'Team5' | 'Team6' | 'Team7' | 'Team8' | 'Team9' | 'Team10' | 'Team11' | 'Team12';

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

  function handleTeamChange(e: { target: { value: React.SetStateAction<string>; }; }){
    setSelectedTeam(e.target.value);

  }

  function togglePrompt(){
    setShowPrompt(!showPrompt)
  }


  return (
    <section className="grid gap-8  mx-8 mt-8">
      <div>
        <h1 className="text-4xl font-medium mb-2">Uitleg niekert</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum mauris enim, id suscipit lectus rutrum vel. Integer ac odio odio. Praesent non nulla vitae enim elementum blandit quis ac massa. Donec vitae risus consectetur sem fermentum iaculis. Morbi euismod nec ex eu fringilla. Sed urna neque, auctor molestie magna vel, eleifend elementum ante. Aenean lacinia, tellus ac commodo volutpat, sem arcu tincidunt nunc, eget dignissim nibh quam sit amet turpis. Phasellus augue neque, tristique non odio quis, lacinia malesuada quam.
Nulla non mi sed dui sagittis accumsan. Nam suscipit arcu quis purus placerat, nec lacinia magna laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec sapien id metus interdum pretium. Vivamus sit amet congue mi, id volutpat magna. Donec eu blandit ante, ut dignissim leo. Curabitur consequat, ligula id porta maximus, eros ante pellentesque felis, eu accumsan justo nunc non lectus. Donec facilisis interdum nisi, at efficitur massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p >
      </div >

            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4', 'Vraag 5'].map((label, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`vraag${index + 1}`}>
              {label}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`vraag${index + 1}`}
              type="text"
              name={`vraag${index + 1}`}
              placeholder={`Jouw antwoord op ${label}`}
            />
          </div>
        ))}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="team">
            Kies je team
          </label>
          <select 
            id="team" 
            name="teamname"
            value={selectedTeam}
            onChange={handleTeamChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecteer een team</option>
            {(Object.keys(teamprompts) as TeamName[]).map((team) => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>          
        </div>
        <div className="flex items-center justify-between">
          <input 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit"
            value="Verstuur"
          />
          <button 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={togglePrompt}
          >
            {showPrompt ? 'Verberg Prompt' : 'Toon Prompt'}
          </button>
        </div>
      </form>

      {showPrompt && selectedTeam && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p className="font-bold">Prompt voor {selectedTeam}</p>
          <p>{teamprompts[selectedTeam as TeamName]}</p>
        </div>
      )}

    </section >
  );
}
