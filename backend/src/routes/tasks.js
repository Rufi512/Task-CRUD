import {Router} from 'express'
import * as taskCtrl from '../controllers/task_controller'
const router = Router()

router.get('/list',taskCtrl.getList)

router.post('/create',taskCtrl.create)

router.put('/modify/:id',taskCtrl.modify)

router.delete('/delete/:id',taskCtrl.deleteTask)

export default router
