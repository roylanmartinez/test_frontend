import React, {useState, useRef, useEffect} from 'react';


interface IProps{ 
  neededHelp?: boolean,
  isItPassword?: boolean,
  label: string,
  value: string,
  error?: string,
  stateId: string,
  onChange: (key: string, value: string | number | boolean) => void
  sentPlaceHolder?: string,
  notValid?: boolean,
  maximum?: number,
}

const SharedInput = ({ neededHelp, isItPassword, label, value, error, notValid, maximum, sentPlaceHolder, stateId, onChange}: IProps) => {
    const valueRef = useRef<HTMLInputElement  | null>(null);
    const [shownPassword, setShownPassword] = useState(!isItPassword)
    const [progressLine, setProgressLine] = useState(0)
    const handleChange = (newValue: string) => {
      
      if (isItPassword){
        let maximumPercentage = 100;
        let punctuation = Math.round(maximumPercentage * newValue.length / 24);
        setProgressLine((punctuation > maximumPercentage ? maximumPercentage : punctuation))
      }
      if (maximum && (newValue.length >= maximum)){
        onChange(stateId, newValue.slice(0, maximum))
      }
      else {
        onChange(stateId, newValue)
      }
    }
    useEffect(() => {
      handleChange(value)
    }, []);

    return (
        <div className="sharedInputStyle">
            <h6>
              {label} {neededHelp && <img title="orem ipsum dolor sit amet, consectetur adipiscing elit"
              src={require("../assets/img/help.png")}
              alt="asd"
              ></img>}
          </h6>
            <div className={`${notValid ? "notValid" : "normal"}`}>
              <input placeholder={sentPlaceHolder} type={`${shownPassword ? "text" : "password"}`} value={value} ref={valueRef} onChange={(changedValue)=>{
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
            {(maximum && !isItPassword) && <p>{`${value.length}/${maximum}`}</p>}
            {error && <p className="error">{error}</p>}
        </div>
        
    );
}

export default SharedInput;