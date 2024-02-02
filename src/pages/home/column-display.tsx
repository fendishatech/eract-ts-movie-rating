import { DisplayData, DisplayType } from "./interfaces";


interface Props {
    data: DisplayData[];
    displayType: DisplayType
}

const ColumnDisplay = (props: Props) => {
    console.log(props.data[0])
    return (
        <>
            {
                props.displayType === DisplayType.Movies ?
                    (<div style={{ display: 'flex flex-col' }}>
                        <img src={props.data[0].poster_path} style={{ width: 150, height: 200 }} alt="" />
                        <p>{props.data[0].title}</p>
                    </div>) :
                    (<div>{props.data[0].name}</div>)
            }
        </>
    )
}

export default ColumnDisplay