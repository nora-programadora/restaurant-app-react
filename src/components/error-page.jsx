import { useRouteError } from "react-router-dom";

export default function ErrorPage () {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Ops!</h1>
            <p>Ocurrio un error, está ruta no existe o algo salió mal: </p>
            <p>
                <i>{ error.statusText || error.message }</i>
            </p>
        </div>
    )

}