/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utn.frd.wagroup.rest.services;

import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import utn.frd.wagroup.entity.TipoMovimiento;
import utn.frd.wagroup.entity.sessions.TipoMovimientoFacade;

/**
 *
 * @author awisner
 */
@Path("/tipoMovimiento")
public class TipoMovimientoRest {
   @EJB
    private TipoMovimientoFacade ejbTipoMovimientoFacade;
    
    //obtener todas las entidades
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public List<TipoMovimiento> findAll(){
    return ejbTipoMovimientoFacade.findAll();
    }

    //crear entidades
    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(TipoMovimiento tipoMovimiento){
    ejbTipoMovimientoFacade.create(tipoMovimiento);
    }

    //actualizar entidades
    @PUT
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{id}")
    public void edit(@PathParam("id")long id, TipoMovimiento tipoMovimiento){
    ejbTipoMovimientoFacade.edit(tipoMovimiento);
    }

    //eliminar entidades
    @DELETE
    @Consumes({MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN})
    @Path("/{id}")
    public void remove(@PathParam("id")long id){
    ejbTipoMovimientoFacade.remove( ejbTipoMovimientoFacade.find(id) );
    }

    //obtener una entidad por id
    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public TipoMovimiento findById(@PathParam("id")long id){
    return ejbTipoMovimientoFacade.find(id);
    }

  
}
