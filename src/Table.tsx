type tbodyData = {
    data: any[];
}
export default function Table({data}: tbodyData) {
    return (
        <table>
           <thead>
            <tr>
              <th>id</th>
              <th>firstname</th>
              <th>lastname</th>
            </tr>
           </thead>
           <tbody>
            {data.map((actor) => (
        <tr>
        <td>{actor.id}</td>
        <td>{actor.firstname}</td>
        <td>{actor.lastname}</td>
      </tr>
    ))}
        </tbody>
    </table>
    );
    }