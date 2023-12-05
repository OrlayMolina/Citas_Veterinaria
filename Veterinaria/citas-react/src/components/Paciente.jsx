const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case"> Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case"> Orlay</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case"> orlay_gomez@hotmail.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case"> 10/10/2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim odio, semper non risus eu, gravida iaculis dui. Fusce nulla sem, volutpat hendrerit velit rutrum, condimentum aliquam mi. Fusce quis venenatis dui. Sed consectetur pellentesque vehicula. Aliquam nulla velit, sodales non felis vel, porta volutpat erat. Nunc cursus est et nunc tempus volutpat in nec quam.</span>
        </p>
      </div>
  )
}

export default Paciente
