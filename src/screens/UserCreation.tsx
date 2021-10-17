import React, { useContext, useState } from "react";
import SharedInput from "../components/SharedInput";
import SharedButton from "../components/SharedButton";
import AppContext from "../AppContext";
interface IErrors {
    usuario?: string,
    empty?: string,
    different?: string, 
    short?: string, 
    notSafe?: string, 
  }

const validate = (inputs: {
  usuario: string,
  contra1: string,
  contra2: string,
}): object => {
  
  let errors: IErrors = {};
  if (!inputs.usuario) {
    errors.usuario = "El nombre de usuario es necesario";
  } 
  if (!inputs.contra1 && !inputs.contra2) {
    errors.empty = "La contrseña es necesaria";
  } 
   if (inputs.contra1 !== inputs.contra2) {
    errors.different = "Las contraseñas no coinciden";
  } 
  if (inputs.contra1.length < 8) {
    errors.short = "La contraseña es demasiado corta";
  } 
  if (!/(?=.*[A-Z])(?=.*[0-9])/.test(inputs.contra1)) {
    errors.notSafe = "La contraseña debe contener al menos una mayúscula y un número";
  } 

  return errors;
}

function UserCreation() {
  const { mainState, setValue } = useContext(AppContext);
  const [inputErrors, setInputErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);

  const createUser = () => {
    const errors = validate({usuario: mainState.usuario, contra1: mainState.password1, contra2:  mainState.password2})
    setInputErrors(errors)
    if (Object.keys(errors).length === 0){
      setValue("selectedScreen", 2)
    }
  };
  return (
    <div className="body">
      <div className="titleContainer">
        <h1 className="title">Test Frontend Wheel Hub</h1>
      </div>
      <div className="generalInputContainer">
        <SharedInput
          label={"Crea tu usario"}
          sentPlaceHolder={"Introduce tu usuario"}
          stateId={"usuario"}
          onChange={setValue}
          value={mainState.usuario}
          notValid={inputErrors.usuario ? true : false}
          error={inputErrors.usuario}
        />
      </div>
      <div className="generalInputContainer">
        <SharedInput
          label={"Crea tu contraseña"}
          sentPlaceHolder={"Crea tu contraseña"}
          stateId={"password1"}
          onChange={setValue}
          isItPassword={true}
          value={mainState.password1}
          notValid={(inputErrors.empty || inputErrors.different || inputErrors.notSafe || inputErrors.short) ? true : false}
          maximum={24}
          error={inputErrors.empty || inputErrors.different || inputErrors.notSafe || inputErrors.short}
        />
        <SharedInput
          label={"Repite tu contraseña"}
          sentPlaceHolder={"Repite tu contraseña"}
          stateId={"password2"}
          onChange={setValue}
          isItPassword={true}
          value={mainState.password2}
          notValid={(inputErrors.empty || inputErrors.different || inputErrors.notSafe || inputErrors.short) ? true : false}
          maximum={24}
          error={inputErrors.empty || inputErrors.different || inputErrors.notSafe || inputErrors.short}
        />
      </div>
      <h5 className="recordatorio">Lorem ih5sum dolor sit amet, consectetur adipiscing elit.</h5>
      <div className="generalInputContainer">
        <SharedInput
          label={"Crea tu pista para recordar tu contraseña (opcional)"}
          sentPlaceHolder={
            "Crea tu pista para recordar tu contraseña (opcional)"
          }
          stateId={"pista"}
          onChange={setValue}
          neededHelp={true}
          isItPassword={false}
          value={mainState.pista}
          notValid={false}
          maximum={60}
        />
      </div>
      <div className="footer flexRowRight">
        <SharedButton
          label={"Atrás"}
          isTransparent={true}
          isBold={false}
          onClick={() => {
            // if (mainState.acceptedConditions) setValue("selectedScreen", 1);
          }}
          isAllowed={true}
        />
        <SharedButton
          label={"Continuar"}
          isTransparent={false}
          isBold={true}
          onClick={createUser}
          isAllowed={true}
        />
      </div>
    </div>
  );
}

export default UserCreation;
