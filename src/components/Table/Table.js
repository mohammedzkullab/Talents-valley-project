const Table = ({
  headers,
  tableList,
  TableBody,
  setEditedUserId,
  deleteUserFunc,
  className,
}) => {
  return (
    <table className={className}>
      <tbody>
        <tr>
          {headers && headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
        {tableList &&
          tableList.map((item, index) => (
            <TableBody
              key={index}
              item={item}
              setEditedUserId={setEditedUserId}
              deleteUserFunc={deleteUserFunc}
            />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
