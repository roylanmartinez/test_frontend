import React, {useState, useRef, ElementType, useEffect} from 'react';


interface IProps{ 
  neededHelp: boolean,
  isItPassword: boolean,
  value: string,
  notValid: boolean,
  maximum: number,
  onClick: ()=>void,
}

const SharedInput = ({ neededHelp, isItPassword, value, notValid, maximum}: IProps) => {
    const valueRef = useRef<HTMLInputElement  | null>(null);
    const [shownPassword, setShownPassword] = useState(false)
    const [inputValue, setInputValue] = useState(value)
    const [progressLine, setProgressLine] = useState(0)
    const handleChange = (newValue: string) => {
      
      if (isItPassword){
        let maximumPercentage = 80;
        let punctuation = Math.round(maximumPercentage * newValue.length / 24);
        if (/(?=.*[A-Z])(?=.*[0-9])/.test(newValue)){
          maximumPercentage = 100;
        }
        setProgressLine((punctuation > maximumPercentage ? maximumPercentage : punctuation))
      }
      if (maximum && (newValue.length >= maximum)){
        setInputValue(newValue.slice(0, maximum))
      }
      else {
        setInputValue(newValue)
      }
    }
    useEffect(() => {
      handleChange(value)
    }, []);

    return (
        <div className="sharedInputStyle">
            <h6>
              Crea tu usuario {neededHelp && <img title="orem ipsum dolor sit amet, consectetur adipiscing elit"
              src={require("../assets/img/help.png")}
              alt="asd"
              ></img>}
          </h6>
            <div className={`${notValid && "notValid"}`}>
              <input type={`${shownPassword ? "text" : "password"}`} value={inputValue} ref={valueRef} onChange={(changedValue)=>{
                handleChange(changedValue.target.value)
              }} />
              
              {
                isItPassword && <button onClick={()=> setShownPassword(!shownPassword)}>
                <img 
                  src={require(`../assets/img/${(shownPassword ? "view" : "hidden")}.png`)}
                  alt="password">
              </img>
              </button>
              }
            </div>
            {isItPassword && <div className={`progressLine s${progressLine}`}></div>}
            {maximum && <p>{`${inputValue.length}/${maximum}`}</p>}
        </div>
        
    );
}

export default SharedInput;