import loginImage from '@/assets/login-image.jpg'
import { DatePickerField } from '@/components/date-picker'
import { LoginField } from '@/components/login'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { TypographyH2, TypographyMuted, TypographyP } from '@/components/ui/typography'
import { cepMask } from '@/mask/cep-mask'
import { Eye, EyeOff, ShieldAlert } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [birthDate, setBirthDate] = React.useState<Date>()

  return (
    <div className="relative min-h-svh overflow-hidden bg-black text-white">
      <img
        src={loginImage}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black/60" />

      <main className="relative z-10 flex min-h-svh items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-[100px] sm:p-10">
          <div className="mx-auto mb-8 max-w-md text-center">
            <div className="relative flex mb-5 h-20 w-20 items-center justify-center mx-auto">
              <svg
                viewBox="0 0 64 64"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full text-[#7C3AE0]"
              >
                <path
                  d="M32 6 58 54H6L32 6Z"
                  fill="black"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="relative mt-3.5 text-xl font-black tracking-tight text-gray-300">
                EP
              </span>
            </div>

            <TypographyH2 className="mb-4 border-0 p-0 font-semibold leading-tight tracking-tight text-white">
              Bem Vindo ao <TypographyP className="text-[#7C3AE0] text-3xl font-bold">EventPlace</TypographyP>
            </TypographyH2>
            <TypographyMuted className="mx-auto max-w-lg text-sm leading-6 text-white/70">
              Crie sua conta para começar a explorar eventos incríveis e encontrar o que mais combina com você.
            </TypographyMuted>
          </div>

          <form className="mx-auto w-full max-w-xl space-y-4">
            <LoginField
              id="name"
              label="Nome Completo"
              type="text"
              placeholder="Digite seu nome completo"
              required
            />

            <LoginField
              id="username"
              label="Nome de Usuário"
              type="text"
              placeholder="Digite seu nome de usuário"
              required
            />

            <DatePickerField
              id="birthDate"
              label="Data de nascimento"
              date={birthDate}
              onDateChange={setBirthDate}
              placeholder="Selecione sua data de nascimento"
              required
              className="w-full"
            />

            <LoginField
              id="cep"
              label="CEP"
              type="text"
              placeholder="00000-000"
              required
              mask={cepMask}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <LoginField
                id="country"
                label="País"
                type="text"
                clickable={false}
              />

              <LoginField
                id="state"
                label="Estado"
                type="text"
                clickable={false}
              />

              <LoginField
                id="street"
                label="Rua"
                type="text"
                clickable={false}
              />

              <LoginField
                id="number"
                label="Número"
                type="text"
                placeholder="Digite o número da sua casa ou apartamento"
                required
              />
            </div>

            <LoginField
              id="email"
              label="Email"
              type="email"
              placeholder="exemplo@email.com"
              required
            />

            <div>
              <LoginField
                id="password"
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                placeholder="**********"
                required
                trailingIcon={
                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((isVisible) => !isVisible)}
                    className="cursor-pointer absolute right-3 top-1/2 flex size-4 -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 text-white/70 outline-none hover:text-white focus-visible:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                }
              />
              <div className="mt-1">
                <Label
                  htmlFor="password"
                  className="flex flex-col text-left items-start gap-1 text-[0.82rem] font-medium tracking-wide text-white/70"
                >
                  <p className="flex items-center gap-1">
                    <ShieldAlert className="text-red-700" />
                    A senha deve conter no mínimo 6 caracteres.
                  </p>

                  <p className="flex items-center gap-1">
                    <ShieldAlert className="text-red-700" />
                    Lembre-se sempre de colocar uma senha forte.
                  </p>
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              variant="outline"
              className="cursor-pointer mt-2 h-10 w-full border-white/30 bg-white text-sm font-semibold text-black hover:bg-white/90 hover:text-black"
            >
              Criar conta
            </Button>
          </form>

          <div className="mt-7 space-y-3 text-center">
            <TypographyP className="text-sm font-medium leading-none text-white/70">
              Já tem uma conta?
            </TypographyP>
            <Button
              asChild
              variant="outline"
              className="mt-2 group relative h-10 w-full overflow-hidden border-white/25 bg-transparent text-sm font-semibold text-white transition-colors0 hover:text-black"
            >
              <Link to="/login">
                <span className="relative">Faça login agora!</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
