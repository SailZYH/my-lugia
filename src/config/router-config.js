import Information from '../page/information';
import Login from '../page/login';
import Admin from '../page/admin';
import Position from '../page/position';

const router = {
            "/information": {
              exact: true,
              component: Information
            },
            "/": {
              component: Admin
            },
            "/login":{
              component:Login,
              exact:true
            },
            "/position":{
                component:Position,
                exact:true
            }
    }
    
    export default router;