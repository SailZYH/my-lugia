import Information from '../page/information';
import Login from '../page/login';
import Admin from '../page/admin';

const router = {
            "/ information": {
              exact: true,
              component: Information
            },
            "/": {
              component: Admin
            },
            "/login":{
              component:Login,
              exact:true
            }
    }
    
    export default router;