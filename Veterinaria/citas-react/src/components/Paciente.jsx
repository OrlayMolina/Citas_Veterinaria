import PropTypes from 'prop-types';

const Paciente = ({paciente, setPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas} = paciente;
  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-lg mb-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className='flex justify-between mt-6'>
          <button 
            type='button' 
            className='py-2 px-10 bg-indigo-600 text-white font-bold uppercase hover:bg-indigo-700 rounded-lg'
            onClick={ ( ) => setPaciente(paciente) }
          >Editar
          </button>
            

          <button 
            type='button' 
            className='py-2 px-10 bg-red-600 text-white font-bold uppercase hover:bg-red-700 rounded-lg'
            
          >Eliminar
          </button>
        </div>

      </div>
  )
}

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
};

export default Paciente
