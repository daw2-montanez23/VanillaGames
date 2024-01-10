//Gestion del localstorage

export const ls ={
    //capturar los datos del localstorage
    getUsuario:()=>{
        //definimos usuario anonimo por is no hay datos en LocalStorage
        let usuario={
            email:'anonimo',
            rol:'no logueado',
            avatar:''
        }
        //capturamos datos localStorage
        const usuarioJSON=localStorage.getItem('usuarioVanilla')
        //Si hay un usuario logueado actualizamos usuario, sino devolvemos usuario anonimo
        if(usuarioJSON){
            //pasaremos datos de localstorage
            usuario=JSON.parse(usuarioJSON)
        }
        return usuario
    },

    setUsuario: (usuario)=>{
        //convertir el objeto a una cadena JSON
        const usuarioJSON = JSON.stringify(usuario)
        //Guardar en localstorage
        localStorage.setItem('usuarioVanilla', usuarioJSON)
    }
}