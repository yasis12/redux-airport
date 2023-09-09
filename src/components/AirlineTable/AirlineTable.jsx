import { useSelector } from "react-redux";

function AirlineTable() {

    const airlineList = useSelector(store => store.airlineList);

    return (
        <div>
            <table>
                <tr>
                <th>Airlines</th>
                </tr>
                    {airlineList.map((airline, i) =>(
                    <tr key={i}>{airline}</tr>
                    ))}
            </table>
        </div>
       
    )
}

export default AirlineTable;