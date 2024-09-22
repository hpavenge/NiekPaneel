'use client'

import React, { useState } from 'react';


export default function Home() {

  const [selectedTeam, setSelectedTeam] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [formData, setFormData] = useState({
    vraag1: '',
    vraag2: '',
    vraag3: '',
    teamname: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  type TeamName = 'Team1' | 'Team2' | 'Team3' | 'Team4' | 'Team5' | 'Team6' | 'Team7' | 'Team8' | 'Team9';

  const teamprompts = {
    'Team1': 'Wat tekst voor team 1',
    'Team2': 'Wat tekst voor team 2',
    'Team3': 'Wat tekst voor team 3',
    'Team4': 'Wat tekst voor team 4',
    'Team5': 'Wat tekst voor team 5',
    'Team6': 'Wat tekst voor team 6',
    'Team7': 'Wat tekst voor team 7',
    'Team8': 'Wat tekst voor team 8',
    'Team9': 'Wat tekst voor team 9'
  }

  function handleTeamChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.target.value;
    setSelectedTeam(selectedValue); // Updates the selected team
    setFormData({ ...formData, teamname: selectedValue }); // Sets the teamname in formData
  }


  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('Form submitted successfully!');
        setFormData({
          vraag1: '',
          vraag2: '',
          vraag3: '',
          teamname: '',
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Error submitting the form');
      }
    } catch (error) {
      setError('Error submitting the form');
    } finally {
      setLoading(false);
    }
  }

  function togglePrompt() {
    setShowPrompt(!showPrompt)
  }


  return (
    <section className="grid gap-8  mx-8 mt-8">
      <div>
        <h1 className="text-4xl font-medium mb-2">Teamdag Kennis Over Zien 2024</h1>
        <p>We heten je van harte welkom op onze Kennis Over Zien teamdag. Nu je hier bent, mag je zo al genieten van een lekker stuk gebak. Vergeet je niet jezelf ook van wat te drinken te voorzien? Fijn! Geniet ervan! Straks zal Hanneke je meenemen in wat we gaan doen vanmiddag. Maar mocht je al nieuwsgierig zijn, lees dan gerust hieronder verder. </p >
        <br></br>
        <details>
          <summary>Spel</summary>
          <p>Veel van de collega's kennen elkaar al, maar omdat we vandaag de dag met meer dan ooit zijn, kennen veel collega's elkaar nog niet (zo goed). Onze teamdag staat daarom in het teken van verbinden, omdat samenwerken niet alleen veel effectiever is als we elkaar kennen, maar belangrijker nog: het is ook veel leuker. Om dat verbinden op een speelse manier te bewerkstelligen, hebben we hieronder een spelvorm bedacht waarbij jullie worden uitgedaagd om in teams na te denken over hetgeen jullie aangereikt wordt op het mooie Visio-terrein.</p>
          <br></br>
          <p>We nodigen jullie daarom graag uit om dadelijk in beurten, met je team, het terrein te gaan verkennen. Om te weten bij wie je in het team hoort, vinden jullie hieronder een tabel met daarin de verschillende teams. Om ervoor te zorgen dat we elkaar zo min mogelijk in de weg lopen, gaan eerst teams 1 tot en met 4 het terrein op en een half uur later team 5 tot en met 9. Een vijftal gebeurtenissen staan jullie, verspreid over het terrein, te wachten. Bij elk van deze punten zullen jullie een gebeurtenis aantreffen waar jullie als team jullie brein over gaan breken. Omdat de gebeurtenissen verspreid liggen over het terrein, is het de bedoeling dat gij zoekt en gij daarom zult vinden. Krijg je ze niet alle 5 gevonden? Vraag dan vooral eerst elkaar om hulp. Kom je er dan nog steeds niet uit? Dan mag je altijd aankloppen bij de organisatie.</p>
          <br></br>
          <p>Tijdens het verkennen van het terrein, zullen jij en je team een vijftal geluidsfragmenten tegenkomen over een bekende Kennis Over Zien casus. Het is aan jullie om, op basis van deze fragmenten hieronder in de tabel, het juiste fragment te koppelen aan het juiste onderdeel van de kenniscirkel. We zullen eens zien hoe goed deze er bij eenieder inzit, wellicht kom je erachter dat een kleine opfrisser op zijn plek is; een goede reden om goed gebruik te maken van elkaars kennis en kunde. De antwoorden vul je hieronder in de tabel in. Succes en heel veel plezier!</p>
        </details>
        <br></br>
        <details>
          <summary>Teamopstelling</summary>
          <p>Team 1:<br></br>
            Alice Dallinga, Hans Wouters, Karin Terbraak, Marit van Buijsen, Tamar Petiet</p>
          <br></br>
          <p>Team 2:<br></br>
            Cynthia Oh José Jurcka Katja Korte Marjolein Onnink Rinske Jellema</p>
          <br></br>
          <p>Team 3:<br></br>
            Berber Woudsma, Chantal Janssen, Edine van Munster, Lianne Noteboom, Luuk-Jan Boon</p>
          <br></br>
          <p>Team 4:<br></br>
            Gerie Tempelman, Imke van Kats, Mark Lanting, Ruben Koman, Zeyneb Aljanabi</p>
          <br></br>
          <p>Team 5:<br></br>
            Claudia van den Berg, Danielle Kistemaker, Merel Bosman, Peter Middelkoop, Pien Grauwelman</p>
          <br></br>
          <p>Team 6:<br></br>
            Wendela Oskam, Cynthia Lamper, Femke Oude Lansink, Jolanda van Dee, Petra Wijen</p>
          <br></br>
          <p>Team 7:<br></br>
            Eline van der Voort, Kirsten Veldhoen, Liz Bloemheuvel, Mélinda Choo, Mieke van de Riet, Minke de Boer</p>
          <br></br>
          <p>Team 8:<br></br>
            Biljana Volchevska, Els de Keijzer, Inge Wolters, Marcelle Beerepoot, Petra van Antwerpen, Stephanie Witjes</p>
          <br></br>
          <p>Team 9:<br></br>
            Jamuna van Raay, Marian van Heerebeek, Mischa Thiers, Nies Kraan, Sabine Timmer, Wim Pierik</p>
          <br></br>
        </details>
        <br></br>
        <p>Zoals net besproken gaat de helft van de groepen het terrein op. De andere helft blijft voor alsnog even binnen. Omdat we jullie niet met lege handen willen achterlaten, hebben we een aantal vragen bedacht die alvast wat hersenactiviteit bespoedigen. Je vindt ze hieronder:</p>
      </div >

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vraag1">
            Op welke drie vlakken komen wij als groep overeen met elkaar?
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vraag1"
            name="vraag1"
            rows={3}
            placeholder="Jouw antwoord op vraag 1"
            value={formData.vraag1}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vraag2">
            Op welke drie vlakken zouden wij als groep graag overeen komen met elkaar?
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vraag2"
            name="vraag2"
            rows={3}
            placeholder="Jouw antwoord op vraag 2"
            value={formData.vraag2}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vraag3">
            Wat zouden jullie als team de regiegroep mee willen geven?
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vraag3"
            name="vraag3"
            rows={3}
            placeholder="Jouw antwoord op vraag 3"
            value={formData.vraag3}
            onChange={handleInputChange}
            required
          />
        </div>


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
            {Object.keys(teamprompts).map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value={loading ? 'Versturen...' : 'Verstuur'}
            disabled={loading}
          />
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </form>

    </section >
  );
}
