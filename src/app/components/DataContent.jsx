export default function DataTable ({
  table_name='',
  headers=["header1", "header2"],
  rows=[["data_row_1.1", "data_row_1.2"], ["data_row_2.1", "data_row_2.2"]],
  content_style = 'border p-1'
  }){
  const caption_data = table_name != '' ? <caption className={content_style}>{table_name}</caption> : ''
  const headers_data = headers.map((header, key) => {
    return <th key={key} className={content_style}>{header}</th>
  })
  const table_data = rows.map((row, row_key) => {
    const column_data = row.map((column, col_key) => {
      return <td className={content_style} key={col_key}>{column}</td>
    })
    return <tr key={row_key}>{column_data}</tr>
  })
  return (
    <>
      <table className={content_style}>
        {caption_data}
        <tbody>
          <tr className={content_style} key="ThisIsAUniqueKeyNotReally.:)">{headers_data}</tr>
          {table_data}
        </tbody>
      </table>
    </>
  ) 
}