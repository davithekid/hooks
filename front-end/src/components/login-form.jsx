"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { ModeToggle } from "./theme/button-theme"

export function LoginForm({ className, ...props }) {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error("ERRO AO FAZER LOGIN")
      }

      if (data.accessToken) {
        Cookies.set('token', data.accessToken, {
          expires: 1,
          secure: true,
          sameSite: 'strict'
        })

        alert('login bem-sucedido')
        router.push('/lista')
      }

    } catch (error) {
      alert('login mal-sucedido')

    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className={'flex justify-between'}>
          <CardTitle>Entre com sua conta</CardTitle>
          <ModeToggle />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" type="username" placeholder="Insira seu username" required
                  value={username}
                  onChange={(e) => { setUsername(e.target.value) }} />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                </div>
                <Input id="password" type="password" required placeholder='********'
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }} />
              </Field>
              <Field>
                <Button type="submit">Login</Button>

              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
