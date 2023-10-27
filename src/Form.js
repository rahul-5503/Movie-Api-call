import "./Formcss.css"; 
export const Form =()=>{
    return(
    <div className="Box">
        <form  >
            <input type="text" placeholder="full Name"/>
            <input type="text" placeholder="Email"/>
            <input type="number" placeholder="Age"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <input type="Submit" />
        </form>
    </div>
        
    );
};