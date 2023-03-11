import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebase"

const Edit = () => {

    const [ nombre, setNombre ] = useState('')
    const [ correo, setCorreo ] = useState('')
    const [ celular, setCelular ] = useState('')
    const [ mesa, setMesa ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const reservacion = doc(db, "reservaciones", id)
        const data = {Nombre: nombre, Correo: correo, Telefono: celular, Mesa: mesa}
        await updateDoc(reservacion, data)
        navigate('/')
    }

    const getDataById = async (id) => {
        const reservacion = await getDoc( doc(db, "reservaciones", id) )
        if(reservacion.exists()) {
            //console.log(product.data())
            setNombre(reservacion.data().Nombre)    
            setCorreo(reservacion.data().Correo)
            setCelular(reservacion.data().Telefono)    
            setMesa(reservacion.data().Mesa)
        }else{
            console.log('La reservación no existe')
        }
    }

    useEffect( () => {
        getDataById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <>
        <div>Hello</div>
        <p>Componente edit</p>

        <Container>
          <Row>
              <Col>
                <Row>
                    
                    <h2>Edita tu reservación</h2>
                    <label class="label-form">Tu nombre</label>
                    <input type="text" placeholder='Marco Perez' name='Nombre' />
                    <input
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)} 
                        type="text"
                        className='form-control'
                    />

                    <label class="label-form">Tu correo</label>
                    <input type="text" placeholder='ejemplo@gmail.com' name='Correo' />
                    <input
                        value={correo}
                        onChange={ (e) => setCorreo(e.target.value)} 
                        type="text"
                        className='form-control'
                    />

                    <label class="label-form">Tu celular</label>
                    <input type="text" placeholder='33256788' name='Telefono' />
                    <input
                        value={celular}
                        onChange={ (e) => setCelular(e.target.value)} 
                        type="text"
                        className='form-control'
                    />

                    <label class="label-form">Mesa que vas reservar</label>
                    <input type="text" placeholder='3' name='Mesa' />
                    <input
                        value={mesa}
                        onChange={ (e) => setMesa(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </Row>
                <button type="button" onClick={() => update() }>Guardar</button>
              </Col>
          </Row>
      </Container>
        </>
    )
}

export default Edit;