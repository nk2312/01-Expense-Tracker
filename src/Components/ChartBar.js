

import './style.css';

const ChartBar=(props)=>{

    const barFill=(props.value/props.max)*100;

    return (
    <div className='chart-bar-div'>
        <div className='chart-bar-inner'>
            <div style={{backgroundColor:'purple',height:`${barFill}%`,borderRadius:'8px'}}>
                </div>
            </div>
        <div className='char-bar-label'>{props.label}</div>
    </div>
    )
}

export default ChartBar;
