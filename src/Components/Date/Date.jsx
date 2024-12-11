import { DateStyled } from "./Date.Styled";

const getDayWeek = () =>{

    const weekday = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];        
    const d = new Date();
    let day = weekday[d.getDay()];
    // console.log(day);
    return day;
}

const getdate = () => {
    const d = new Date();
    let day = d.getDate();
    // console.log(day);
    return day;
}

const getMonth = () => {
    const month = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];        const d = new Date();
    let name = month[d.getMonth()];
    // console.log(name);
    return name
    
}


export const DateTime = () =>{
    return(
        <DateStyled>
                        <div>
                        <p>{getDayWeek()}</p>
                        <p>{getdate()+". " + getMonth()}</p>
                        </div>
        </DateStyled>
    )
}