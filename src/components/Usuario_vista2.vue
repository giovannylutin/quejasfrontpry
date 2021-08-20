<template>
    <div class="datospersonales">
        <form>
        <div class="Titulo">
            <h4><span class="indicador">1</span> Datos Personales</h4>
        </div>

        <div class="formulario1">
             
                <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Nombre completo" required>
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">No. CUI</label>
                        <input type="text" class="form-control" id="nombre" placeholder="CUI" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Telefono</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Telefono">
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Celular</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Celular" required>
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" class="form-control" id="nombre" placeholder="Correo">
                    </div>
                </div>
         
        </div>
        <br>

        <div class="Titulo">
            <h4><span class="indicador">2</span> Datos Proveedor</h4>
        </div>
        <div class="formulario1">
             <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Empresa</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Nombre de la empresa" >
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Razon Social</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Razon Social Empresa" >
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Nit</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Nit de la Empresa" >
                    </div>
             </div>

              <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Direccion</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Direccion de la empresa" >
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Zona</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Zona Social Empresa" >
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Telefono</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Telefono de la Empresa" >
                    </div>
             </div>
                <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Departamento</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Departamento de la empresa" >
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Municipio</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Municipio Social Empresa" >
                    </div>
             </div>
        </div>
        <br>

         <div class="Titulo">
            <h4><span class="indicador">3</span> Detalle Queja</h4>
        </div>
         <div class="formulario1">
                <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">No. Factura</label>
                        <input type="text" class="form-control" id="nombre" placeholder="No. Factura" >
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Fecha Emision</label>
                        <input type="date" class="form-control" id="nombre" placeholder="Fecha Emision" >
                    </div>

                </div>
                  <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Detalle de lo sucedido</label>
                        <textarea type="text" class="form-control" id="nombre" placeholder="" ></textarea>
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Que solicita </label>
                        <textarea type="" class="form-control" id="nombre" placeholder="" ></textarea>
                    </div>

                </div>
                  <div class="form-row">
                 
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Seleccione un Pdf de la factura</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                </div>
         </div>
           <br>
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
    </div>
</template>

<style scoped>
.Titulo{
    margin-top: 15px;
    height: 12%;
     border-bottom: 2px solid lightgray;
}
.indicador{
    color: white;
    font-weight: bolder ;
    background-color: black;
    text-align: center;
    padding: 10px;
    border: 2px solid grey;
    border-radius: 100%;
}
</style>