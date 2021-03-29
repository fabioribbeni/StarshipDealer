import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import SimpleCard from './SimpleCard'
import StarshipForm from './StarshipForm'

function App() {
  const [starships, setStarships] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [newStarship, setNewStarship] = useState({});

  const getAllStarships = async () => {
    const { data: starships } = await axios.get('http://localhost:3000/starships')
    setStarships(starships)
  }

  useEffect(() => {
    getAllStarships()
  })

  const onInputChange = e => {
    setNewStarship(starship => ({ ...starship, [e.target.name]: e.target.value }));
  }

  const checkForm = () => newStarship.name && newStarship.image && newStarship.cargo_capacity >= 0 && newStarship.manufacturer && newStarship.crew >= 0 && newStarship.passengers >= 0

  const closeForm = () => {
    setNewStarship({})
    setShowFormModal(false)
  }

  const addNewStarship = async e => {
    e.preventDefault()
    console.log(newStarship)
    if (checkForm()) {
      await axios.post('http://localhost:3000/starships', newStarship)
      await getAllStarships();
    }
    else {
      throw new Error('Form not valid')
    }
  }

  return (
    <div className={"App"}>
      <div className={"cardContainer"}>{starships.map(starship => (<SimpleCard fetchAll={getAllStarships} starship={starship} key={starship.id} />))}</div>
      <StarshipForm starship={newStarship} show={showFormModal} handleClose={closeForm} onInputChange={onInputChange} addPost={addNewStarship} />
      <Button className={'addButton'} size={'lg'} variant={'primary'} onClick={() => setShowFormModal(true)}>+</Button>
    </div>
  );
}

export default App;
