//import {COLOR, compute} from './module' //мы получаем объект модуля и с помощью дестрактинга получаем нужные поля

//compute(1, 2)
//console.log(COLOR)

//=================получаем из default===========================
//При импорте из default мы должны назвать отдельный объект без скобок, т.е. мы не привязаны к имени
//import Logger, {COLOR, compute} from './module' //мы получаем объект модуля и с помощью дестрактинга получаем нужные поля

//compute(1, 2)
//console.log(COLOR)
//Logger.log()

//====================One more way of import======================
import * as Module from './module'
Module.compute(1, 2)
Module.COLOR
Module.default.log()
