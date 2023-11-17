import DataTable from './components/DataContent'
export default function Home() {
  const headers = ["Date", "Description", "Amount"]
  const table_data = [
    ["Today", "Test1", "100"],
    ["Yesterday", "Test2", "200"],
    ["The day before", "Test3", "300"],
  ]
  const total = table_data.reduce((a, b) => a + parseInt(b[2]), 0)
  const content_style = 'border p-1'
  return (
    <>
      <DataTable table_name="Finance Test Table" headers={headers} rows={table_data} content_style={content_style} />
      <p>Total: {total}</p>
    </>
  )
}