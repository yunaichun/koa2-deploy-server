const Router = require('koa-router');
const Controller = require('../controller/mysql');

const router = new Router();

router.post('/insert', Controller.insert);
router.delete('/delete', Controller.delete);
router.get('/select', Controller.select);
router.put('/update', Controller.update);
router.post('/upload', Controller.upload);
router.get('/setCookies', Controller.setCookies);
router.get('/getCookies', Controller.getCookies);
router.get('/setSession', Controller.setSession);
router.get('/getSession', Controller.getSession);

module.exports = router;
