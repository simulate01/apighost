/**
 * Created with WebStorm.
 * User: stoneship
 * Email:258137678@qq.com
 * Date: 16/10/25
 * Time: 下午10:12
 * To change this template use File | Settings | File Templates.
 */
const PageRouter = require('./components/PageRouter.vue')
var map = {
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/:page/:data?',
      component: PageRouter
    },
    {
      path: '/:page?',
      component: PageRouter
    }
  ]
}
export default map
