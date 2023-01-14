
import ChartBar from "./ChartBar"
import Card from "./Card"

export const Chart = (props) => {
    const datapointsValue=props.datapoints.map(data=>data.value);
    const totalMaximum=Math.max(...datapointsValue);
    return(
    <Card>
        <div className="chart-bar">
            {props.datapoints.map(data => <ChartBar value={data.value} label={data.month} key={data.id} max={totalMaximum} />)}
        </div>
    </Card>
    )
}