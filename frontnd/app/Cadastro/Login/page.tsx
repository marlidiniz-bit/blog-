"use client"

import { useRouter } from "next/navigation" 
import { useState } from "react"

export default function Login(){

    const [email,setEmail] = useState("")
     const [senha,setsenha] = useState("")
     const router = useRouter()

        const logar = async (e:any)=>{
         e.preventDefault()

         const res = await fetch("http://localhost:3000/login",{
            method: 'POST',
            headers: {"content-Type":"application/json"},
            body:JSON.stringify({email,senha})
         })


         const data = await res.json()
         if(res.ok){
            localStorage.setItem("token",data.token)
            router.push("/Posts")
         }else{
            alert("Erro ao fazer login")
         }
        }


  return(
       <main>
        <h1>Login</h1>
        <form onSubmit={logar}>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
           />

           <input
           type="password"
           placeholder= "Senha"
           className="border p-2"
           value={senha}
           onChange={(e)=>{setsenha(e.target.value)}}
           />



  <button className="bg-blue-600 text-whitw p+2 rounded hover:bg-blue-700 cursor-pointer">
    cadastrar
  </button>
        </form>
       </main>
    )
}    

