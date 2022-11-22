const Table = ({ headers, tableList, TableBody, actions }) => {
  return (
    <table>
      <tbody>
        <tr>
          {headers && headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
        {tableList &&
          tableList.map((item, index) => (
            <tr key={index}>
              <TableBody item={item} />
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
