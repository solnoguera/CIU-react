import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./Form.css";

export default function Form() {
  const [state, setState] = useState({ badInput: null, newPartner: null });
  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const inputs = [
    { name: "name", ref: nameRef, placeholder: "Nombre y Apelllido" },
    { name: "phone", ref: mobileRef, placeholder: "Nro de Celular" },
    { name: "email", ref: emailRef, placeholder: "Email" },
    { name: "state", ref: stateRef, placeholder: "Provincia" },
    { name: "city", ref: cityRef, placeholder: "Ciudad" },
    { name: "adress", ref: addressRef, placeholder: "Dirección" },
  ];

  const checkInputs = () => {
    const partner = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      email: emailRef.current.value,
      phone: mobileRef.current.value,
    };

    let badInput = null;

    if (isNaN(partner.phone)) badInput = "Número de teléfono inválido.";

    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!emailRegex.test(partner.email))
      badInput = "El email ingresado no es válido.";

    if (
      partner.name === "" ||
      partner.phone === "" ||
      partner.email === "" ||
      partner.address === "" ||
      partner.city === "" ||
      partner.state === ""
    )
      badInput = "Tenés que completar todos los campos para continuar.";

    badInput
      ? setState({ badInput, newPartner: null })
      : setState({ badInput: null, newPartner: partner });
  };

  return (
    <>
      <div className="containerCheckOut">
        <h3>Te gustaría ser socio de FOXY?</h3>
        <h6>
          Los socios de FOXY! reciben las mejores promociones y descuentos
          semanales.
        </h6>
        <h6>Si te gustaría formar parte, ingresá tus datos:</h6>
        <div className="inputs">
          {inputs.map((input) => (
            <Input
              name={input.name}
              ref={input.ref}
              placeholder={input.placeholder}
            />
          ))}
        </div>
        <div id="sendOrder">
          {state.badInput && <p>{state.badInput}</p>}
          {state.newPartner ? (
            <>
              <h3>¡Bienvenido a nuestra comunidad!</h3>
              <h5>Se han enviado correctamente tus datos.</h5>
              <div className="data">
                <p>
                  <b>Nombre</b>: {state.newPartner.name}
                </p>
                <p>
                  <b>Email</b>: {state.newPartner.email}
                </p>
                <p>
                  <b>Telefono</b>: {state.newPartner.phone}
                </p>
                <p>
                  <b>Direccion</b>: {state.newPartner.address}
                </p>
                <p>
                  <b>Ciudad</b>: {state.newPartner.city}
                </p>
                <p>
                  <b>Provincia</b>: {state.newPartner.state}
                </p>
              </div>
            </>
          ) : (
            <Button
              variant="danger"
              onClick={checkInputs}
              className="enviar-pedido"
            >
              Quiero ser socio!
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

const Input = React.forwardRef(({ name, placeholder }, ref) => {
  return (
    <>
      <input type="text" name={name} ref={ref} placeholder={placeholder} />
      <br />
    </>
  );
});
