import AdsComponent from "./AdsComponent"


const AdsList = () => {

    let ads_client = [
        {
        "id": "01",
        "name": "JUAN", 
        "age" : 25,  
        "profession":"Developer",
        "advertisement":"miprofiolllesta en linkedin pasate a verlos",
    },
    {
        
        "id": "04",
        "name": "TANIA",
        "age" :30,
        "profession":"Designer",
        "advertisement":"Busco un trabajo en una empresa que me permita crecer como diseñadora."
    
    },
    {
        "id": "05",
        "name": "PEDRO",
        "age" :45,
        "profession":"Manager", 
        "advertisement":"Estoy buscando un puesto para mi nuevo equipo. Me interesa trabajar con gente joven y con experiencia."
    }
    ]
    return (
        <div>
            <AdsComponent ads={ads_client}/>
        </div>
    )
}

export default AdsList