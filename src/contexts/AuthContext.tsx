import type { ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import React, { createContext, useState } from "react";
import { login } from "../services/Service";
import axios from "axios";

// Definir os estados e funções disponibilizadas pelo context
interface AuthContextProps  {
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): void
    handleLogout(): void
    isLoading: boolean
}

// Quem vai consumir a context
interface AuthProviderProps {
    children: ReactNode
}

//Criar o contexto usando a tipagem AuthContextProps
// O Contexto ira disponibilizar os estados e funções do Glogalmente
export const AuthContext =  createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    const [isLoading, setIsLoading] = useState<boolean>(true)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            alert('Usuario logado com sucesso!')

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                alert(`Erro ao logar o usuário: ${error.response.status}`)
            } else {
                alert("Erro ao logar o usuário! Verifique a conexão com a API!")
            }
            setIsLoading(false)
        }
        
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        })
    }

    return (
        <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}