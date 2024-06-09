import {Hono} from "hono"
import { getCatalogue,createCatalogue, getCatalogues,deleteCatalogue,updateCatalogue} from "./statusCatalogueController";

export const catalogueRouter = new Hono();

catalogueRouter.get('/catalogue', getCatalogues)
catalogueRouter.get('/catalogue/:id', getCatalogue)
catalogueRouter.post('/catalogue', createCatalogue)
catalogueRouter.post('/catalogue/:id', updateCatalogue)
catalogueRouter.delete('/catalogue', deleteCatalogue)