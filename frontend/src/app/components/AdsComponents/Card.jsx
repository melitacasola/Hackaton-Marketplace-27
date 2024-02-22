import Image from "next/image"

const Card = ({ads}) => {
    return (
        <div className="flex row gap-12 w-full">

            {
                ads?.map((item)=>(
                <div className="flex flex-col items-center rounded-[14px] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" style={{ width: '33.33%' }}>
                
                <div key={item.stack_id} className="m-4 flex flex-col items-center">
                    <img
                        className="rounded-full h-36 w-36 p-2 items-center"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                        alt="picture about "
                        width="150"
                        height="170" />
                    <div className="p-2">
                        <p
                        className="mb-2 text-center text-sm font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                        {item.metacoders_ads[0].client_firstname}  {item.metacoders_ads[0].client_lastname}</p>
                        <h6 className="text-sm mb-4 font-semibold text-center">{item.stacks[0].stack_name}</h6>
                        <p className="mt-2 text-sm text-center font-semibold text-neutral-600 dark:text-neutral-200">
                        {item.metacoders_ads[0].location}
                        </p>
                    </div>
                </div> 
                
            </div>
            ))
        }
    </div>
    );
}

export default Card