import './dashboard-styles.css'

const TableRow = (props) => {
    const data = props.data;
    return (
        <div className="row">
            <div className="cell"><p>{data.id}</p></div>
            <div className="cell"><p>{data.name}</p></div>
        </div>
    )
};

export default TableRow;