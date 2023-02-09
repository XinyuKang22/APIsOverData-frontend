import { gql, useSubscription } from '@apollo/client';
import { types, alias, subscription } from 'typed-graphqlify'
import './App.css';
import Table from './Table';

const getActorsSub = subscription('GetActors', {
  [alias('actor', 'actor')]: [{
    id: types.string,
    firstname: types.string,
    lastname: types.string,
  }],
})

function App() {
  const { loading, error, data } = useSubscription<typeof getActorsSub.data>(gql(getActorsSub.toString()));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(JSON.stringify(data))
  if (data) return (
    <div className="container">
      <Table data={data.actor}/>
    </div>
  );
  return <p>[]</p>;
}

export default App;