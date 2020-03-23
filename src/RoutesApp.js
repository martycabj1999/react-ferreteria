import Register from "./modules/user/register/pages/Register";
import ResetPass from './modules/user/recovery/pages/Resetpass';
import Profile from './modules/user/profile/pages/Profile';
import Home from './modules/layout/pages/Home';
import Auth from './modules/user/auth/pages/Auth';
import Unauthorized from "./modules/layout/components/Unauthorized";
import RolesAndPermissions from './modules/user/admin/pages/Rolespermissions';
import PanelAdmin from './modules/user/admin/pages/PanelAdmin';
import Customization from './modules/customization/colorPicker/pages/Customization';

export const routesPublic = [
    {
    name: 'Inicio',
    path: '/home',
    component: Home,
    menuList: true,
    },
    {
    name: 'Autentication',
    path: '/auth',
    component: Auth,
    menuList: false,
    },
    {
    name: 'Logout',
    path: '/logout',
    component: Auth,
    menuList: false,
    },
    {
    name: 'Register',
    path: '/register',
    component: Register,
    menuList: false,
    },
    {
    name: 'Reset Password',
    path: '/reset-pass',
    component: ResetPass,
    menuList: false,
    },
    {
    name:'UnAuthorized',
    path:'/unauthorized',
    component: Unauthorized,
    menuList: false,
}
];

export const routesPrivate = [
    {
        name:'Perfil',
        path:'/profile',
        component: Profile,
        roles: ['admin', 'user'],
        menuList: true,
    },
    {
        name:'Roles y permisos',
        path:'/view-permissions',
        component: RolesAndPermissions,
        roles: ['admin'],
        menuList: true,
    },
    {
        name:'Gestion de usuario',
        path:'/panel-admin',
        component: PanelAdmin,
        roles:['admin'],
        menuList: true,
    },
    {
        name:'Personalizacion',
        path:'/customization',
        component: Customization,
        roles:['admin'],
        menuList: true,
    },
];