import Link from "next/link"


const AdsComponent = ({ads}) => {

    return (
        <div>
            <ul className="m-4">
                {
                    ads?.map((item) =>(
                        <li key={item.id} className="flex row bg-bg-header m-4 justify-between p-6 rounded-lg">
                            <Link  href={`/details/${item.id}`}>
                                <h3 className="font-semibold">{item.name}</h3>
                            </Link>
                            
                         
                            <p>{item.advertisement}</p>
                            <h5>{item.profession}</h5>
                            <div className="flex row gap-4 items-center">
                                <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 4H38C39.1046 4 40 4.89544 40 6V44.2866C40 44.8388 39.5522 45.2868 39 45.2868C38.8122 45.2868 38.628 45.2336 38.4688 45.1338L24 36.0626L9.53118 45.1338C9.06326 45.4272 8.44612 45.2858 8.15274 44.8178C8.05294 44.6586 8 44.4746 8 44.2866V6C8 4.89544 8.89544 4 10 4ZM36 8H12V38.8648L24 31.3414L36 38.8648V8Z" fill="#3A3A3A"/>
                                </svg>
                                <div className="font-bold text-start"> ... </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        
        </div>
    )
}

export default AdsComponent