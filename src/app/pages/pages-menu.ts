import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../services/auth.service';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'จัดการข้อมูล',
    group: true,
  },
  {
    title: 'บัญชีผู้ใช้',
    icon: 'shopping-cart-outline',
    link: '/pages/account',
  },
  {
    title: 'บทบาท',
    icon: 'shopping-cart-outline',
    link: '/pages/role',
    
  },
  {
    title: 'ที่อยู่',
    icon: 'shopping-cart-outline',
    link: '/pages/address',
    
  },
  {
    title: 'ยานพาหนะ',
    icon: 'shopping-cart-outline',
    link: '/pages/vehicle',
    
  },
  {
    title: 'จัดการงานขนส่ง',
    link: '/pages/task-transport',
  },
  
];