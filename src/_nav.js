import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilFile,
  cilHome,
  cilLockLocked,
  cilNotes,
  cilPaperPlane,
  cilPaperclip,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilWarning,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Painel Geral',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Gestão',
  },
  {
    component: CNavItem,
    name: 'Avisos',
    to: '/wall',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Documentos',
    to: '/documents',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reservas',
    to: '/documents',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ocorrências',
    to: '/warnings',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Achados e Perdidos',
    to: '/foundandlost',
    icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Dados',
  },
  {
    component: CNavItem,
    name: 'Usuários',
    to: '/users',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Unidades',
    to: '/units',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Áreas Comuns',
    to: '/commonareas',
    icon: <CIcon icon={cilPaperclip} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Configurações',
  },
  {
    component: CNavItem,
    name: 'Meu Perfil',
    to: '/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sair',
    to: '/logout',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
]

export default _nav
