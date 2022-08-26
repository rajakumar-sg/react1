import TableRow from './table-row'


const Dashboard = (props) => {
    const data = props.data;
    const rows = data.map(r => <TableRow key={r.id} data={r}/>);
    return (
        <div>
            {rows}
        </div>
    )
};

export default Dashboard;