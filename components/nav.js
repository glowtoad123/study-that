import React from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

export default function Nav(){

    const {user} = useUser()

    const navStyle = {
        backgroundColor: '#F5F5F5',
        padding: '30px',
        border: 'none',
        borderRadius: '12px',
        position: 'fixed',
        top: '35%',
        /* top: !currentUser ? '35%' : '20%', */
        right: '5px',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        zIndex: '3',
        display: 'flex',
        flexDirection: 'column'
    }

    const navButtonStyle = {
        margin: "auto",
        marginTop: "15px",
        marginBottom: "15px",
        width: '32px',
        height: '32px',
        color: 'white'
    }

    return(
        <nav style={navStyle}>
            <Link href="/">
                <svg style={navButtonStyle} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            </Link>
            <Link href="/create">
                <svg style={navButtonStyle} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
            </Link>
            {/* <Link href="/account">
                <svg style={navButtonStyle} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </Link> */}
            {user && <a href="/api/auth/logout">
                <svg style={navButtonStyle} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-closed-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 1a1 1 0 0 0-1 1v13H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2a1 1 0 0 0-1-1H4zm2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
            </a>}
            {!user && <a href="/api/auth/login">
                <svg style={navButtonStyle} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-closed-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 1a1 1 0 0 0-1 1v13H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2a1 1 0 0 0-1-1H4zm2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
            </a>}
        </nav>
    )
}