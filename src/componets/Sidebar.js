import React from 'react'
import '../assets/css/style.css'
import * as FaIcons from "react-icons/fa";


export const Sidebar = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <FaIcons.FaHome/>
    },
    {
        title: 'Factura',
        path: '/factura',
        icon: <FaIcons.FaAddressCard/>
    },
    {
        title: 'Historial',
        path: '/historial',
        icon: <FaIcons.FaHistory/>
    },
]