function Table({data}) {
    return (
      <table border={2} cellPadding={10} cellSpacing={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
            </thead>
            <tbody>
                {data.map((x) => {
                    return (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.age }</td>
                       </tr>
                   )
               })}
            </tbody>
      </table>
    );
}
export default Table;