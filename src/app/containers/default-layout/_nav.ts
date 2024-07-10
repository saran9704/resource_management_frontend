import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cilHome' }
  },
  {
    name: 'Applications',
    title: true
  },
  {
    name: 'Forms',
    url: '/dashboard/forms/jd-form',
    iconComponent: { name: 'cil-notes'},
  },
  {
    name: 'Master Question Bank',
    url: '/dashboard/question-bank/master-question-bank',
    iconComponent: { name:'cil-file'},
  }
    // children: [
    //   {
    //     name: 'JD Form',
    //     url: '/forms/jd-form'
    //   },
    //   {
    //     name: 'Technology Form',
    //     url: '/forms/technology-form'
    //   },
    //   {
    //     name: 'Skill Evaluation Form',
    //     url: '/forms/skill-evaluation-form'
    //   },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
]